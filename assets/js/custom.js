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
