document.addEventListener("DOMContentLoaded", function () {
  fetch("../assets/js/products.json") // Replace with actual JSON path
      .then(response => response.json())
      .then(data => {
          populateMainSlider(data.products);
          populateNavSlider(data.products);

          // Slick ko tab initialize karo jab data inject ho chuka ho
          setTimeout(() => {
              $(".product_slider").slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  fade: true,
                  asNavFor: ".product_slider_nav"
              });

              $(".product_slider_nav").slick({
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  asNavFor: ".product_slider",
                  dots: true,
                  autoplay:true,
                  autoplaySpeed: 2000, 
                  arrows: false,
                  centerMode: true,
                  focusOnSelect: true
              });
              $('.product_slider_nav li').html('');
          }, 500); // Slight delay taake HTML inject ho sake
      })
      .catch(error => console.error("Error fetching JSON:", error));
});

function populateMainSlider(products) {
  const sliderContainer = document.querySelector(".product_slider");
  sliderContainer.innerHTML = ""; // Purana data remove karo

  products.forEach((product) => {
      let productHTML = `
          <div class="">
              <div class="row">
                  <div class="col-md-6">
                      <img src="${product.image}" alt="${product.category}" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                      <h3 class="text-capitalize fw-bold mb-4 display-6">${product.category} - ${product.type}</h3>
                      <p>${product.description}</p>
                      <a href="${product.document}" class="mainBtn" download>
                          <span><i class="ri-file-text-line"></i> Download Document</span>
                      </a>
                  </div>
              </div>
          </div>`;
      sliderContainer.innerHTML += productHTML;
  });
}

function populateNavSlider(products) {
  const navSlider = document.querySelector(".product_slider_nav");
  navSlider.innerHTML = ""; // Purana data remove karo

  products.forEach((product) => {
      let navHTML = `
          <div class="">
              <img src="${product.image}" alt="${product.category}" class="img-fluid">
              <span>${product.category} - ${product.type}</span>
          </div>`;
      navSlider.innerHTML += navHTML;
  });
}
 

function loadTiles(containerId, categories, type) {
    const tilesContainer = $(containerId);
    const bgClasses = ["bg-white", "bg-gray"]; // Alternate backgrounds
    let index = 0;
    let slidersToInit = [];

    try {
        if (!tilesData) throw new Error("Tiles data not loaded!");

        tilesContainer.html(`<div class="text-center py-5"><strong>Loading tiles...</strong></div>`);
        tilesContainer.empty();

        categories.forEach(category => {
            if (!tilesData[category] || !tilesData[category][type]) return;

            const tiles = tilesData[category][type];
            const bgClass = bgClasses[index % 2];
            index++;

            let sliderClass = `tiles_slider_${index}`;
            const section = $(`
                <section class="${bgClass} py-5">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="text-capitalize fw-bold mb-4 display-5 text-warning">
                                ${category} ${type} Tiles
                            </h2>
                        </div>
                        <div class="${sliderClass} tiles_slider"></div>
                    </div>
                </section>
            `);

            tilesContainer.append(section);
            const sliderContainer = section.find(`.${sliderClass}`);

            $.each(tiles, function (_, tile) {
                if (tile.image) {
                    const slide = $(`
                        <div class="slides mx-3">
                            <a href="${tile.image}" data-lightbox="${category}-set" data-title="${tile.description}">
                                <img src="${tile.image}" alt="${category} Tile" class="img-fluid" />
                            </a>
                        </div>
                    `);
                    sliderContainer.append(slide);
                }
            });

            slidersToInit.push(`.${sliderClass}`);
        });

        setTimeout(() => {
            slidersToInit.forEach((selector) => {
                $(selector).slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    dots: true,
                    arrows: false,
                    infinite: true,
                    responsive: [
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                        { breakpoint: 480, settings: { slidesToShow: 1 } }
                    ],
                });
            });    $('#tiles-container li').html('');
        }, 500);

    } catch (error) {
        console.error("Error loading data:", error);
        tilesContainer.html(`<div class="text-center py-5 text-danger">Failed to load tiles.</div>`);
    }
}
