document.getElementById('header').innerHTML = `  <div class="header-top">
<div class="container">
  <div class="d-flex py-1 justify-content-between">
    <div class="">
      <a href=""><i class="ri-mail-fill"></i> </a>
      <a href=""><i class="ri-phone-fill"></i> </a>
      <a href=""><i class="ri-map-pin-2-fill"></i></a>
    </div>
    <div class="socail-media">
      <a href=""><i class="ri-facebook-fill"></i></a>
      <a href=""><i class="ri-instagram-fill"></i></a>
      <a href=""><i class="ri-twitter-x-fill"></i></a>
      <a href=""><i class="ri-linkedin-fill"></i></a>
    </div>
  </div>
</div>
</div><header>
    <nav class="navbar container navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="./assets/images/logo/logo-black.png" alt=""
            class="img-fluid  " /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 gap-4 mb-lg-0">
            <li class="nav-item  fs-5">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item  fs-5">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item dropdown position-relative menu-item  fs-5">
              <a class="nav-link" href="#">Tiles Categories</a>
              <div class="mega-menu p-3   ">
                <ul class="nav nav-tabs" id="tileTabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-3 active" id="floor-tab" data-bs-toggle="tab"
                      data-bs-target="#floor" type="button" role="tab">Floor Tiles</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-3" id="wall-tab" data-bs-toggle="tab" data-bs-target="#wall"
                      type="button" role="tab">Wall Tiles</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link rounded-3" id="special-tab" data-bs-toggle="tab" data-bs-target="#special"
                      type="button" role="tab">Special Tiles</button>
                  </li>
                </ul>
                <div class="tab-content mt-2" id="tileTabsContent">
                  <div class="tab-pane fade show active" id="floor" role="tabpanel">
                    <a href="bfloor.html" class="d-block text-warning py-1 px-2 rounded">Bathroom Floor Tiles</a>
                    <a href="kfloor.html" class="d-block text-warning py-1 px-2 rounded">Kitchen Floor Tiles</a>
                    <!-- <a href="#" class="d-block text-warning py-1 px-2 rounded">Outdoor Floor Tiles</a> -->
                    <a href="livingfloor.html" class="d-block text-warning py-1 px-2 rounded">Living Room Tiles</a>
                    <a href="#" class="d-block text-warning py-1 px-2 rounded">Bedroom Tiles</a>
                    <a href="#" class="d-block text-warning py-1 px-2 rounded">Commercial Spaces Tiles</a>
                  </div>
                  <div class="tab-pane fade" id="wall" role="tabpanel">
                    <a href="bwall.html" class="d-block text-warning py-1 px-2 rounded">Bathroom Wall Tiles</a>
                    <a href="kwall.html" class="d-block text-warning py-1 px-2 rounded">Kitchen Wall Tiles</a>
                    <a href="#" class="d-block text-warning py-1 px-2 rounded">bedroom Wall Tiles</a>
                  </div>
                  <div class="tab-pane fade" id="special" role="tabpanel">
                    <a href="#" class="d-block text-warning py-1 px-2 rounded">Mosaic Tiles</a>
                    <a href="#" class="d-block text-warning py-1 px-2 rounded">Marble Tiles</a>
                    <a href="#" class="d-block text-warning py-1 px-2 rounded">Glass Tiles</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item  fs-5">
              <a class="nav-link" href="#">Contact us</a>
            </li> 
              
                      
          </ul>
           <form class="d-flex" role="search">
       <a class="download-button text-decoration-none" href="/assets/images/ecatalogue.pdf" download="Cera's-E-catalogue.pdf" download>
            <div class="docs">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                ></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
             Cera's E-Catalogue
            </div>
            <div class="download">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </a> 
      </form>
        </div>
      </div>
    </nav>
  </header>
    `;

document.getElementById('footer').innerHTML = `   <!-- Footer -->
  <footer class="text-center text-lg-start bg-dark text-white">


    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start  ">
        <!-- Grid row -->
        <div class="row py-5">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <img src="./assets/images/logo/logo-white.png" alt="" class="img-fluid">
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Tiles
            </h6>
            <p>
              <a href="#!" class="text-reset">Floor Tiles</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Wall Tiles</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Special Tiles</a>
            </p>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Direct pages
            </h6>
            <p>
              <a href="#!" class="text-reset">Home</a>
            </p>
            <p>
              <a href="#!" class="text-reset">About</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Tiles</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Contact</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="ri-home-2-line"></i> Karachi Pakistan</p>
            <p>
              <i class="ri-mail-fill"></i>
              info@ceramictiles.com
            </p>
            <p><i class="ri-phone-line"></i> +92 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2025 Copyright:
      <a class="text-reset fw-bold" href="#!">CeramicTiles</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->`;