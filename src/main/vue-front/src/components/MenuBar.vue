<template>
  <div class="hero_area">
<!--    <div class="bg-box">-->
<!--      <img src="images/nru-gallery1.jpg" alt="">-->
<!--    </div>-->
    <header class="header_section" style="background-color: white;">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
            <span>
              NRU Gallery
            </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto ">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">NRU STORY <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item" >
                <a class="nav-link" href="menu.html">MENU</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">숙소</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="book.html">GALLERY</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <section class="slider_section">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="images/nru-gallery.JPG" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="images/nru-gallery.JPG" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="images/nru-img1.PNG" alt="Third slide">
          </div>
        </div>
<!--        <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="number(1000)">-->
<!--          <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--          <span class="sr-only">Previous</span>-->
<!--        </a>-->
        <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="number(1000)">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
<!--        <div class="carousel-inner">-->
<!--          <div>-->
<!--            <img src="images/nru-gallery1.jpg" alt="">-->
<!--            <div class="container ">-->
<!--              <div class="row">-->
<!--                <div class="col-md-7 col-lg-6 ">-->
<!--                  <div class="detail-box">-->
<!--                    <h1>-->
<!--                      Fast Food Restaurant-->
<!--                    </h1>-->
<!--                    <p>-->
<!--                      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="carousel-item ">-->
<!--            <div class="container ">-->
<!--              <div class="row">-->
<!--                <div class="col-md-7 col-lg-6 ">-->
<!--                  <div class="detail-box">-->
<!--                    <h1>-->
<!--                      Fast Food Restaurant-->
<!--                    </h1>-->
<!--                    <p>-->
<!--                      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="carousel-item">-->
<!--            <div class="container ">-->
<!--              <div class="row">-->
<!--                <div class="col-md-7 col-lg-6 ">-->
<!--                  <div class="detail-box">-->
<!--                    <h1>-->
<!--                      Fast Food Restaurant-->
<!--                    </h1>-->
<!--                    <p>-->
<!--                      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="container">-->
<!--          <ol class="carousel-indicators">-->
<!--            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>-->
<!--            <li data-target="#customCarousel1" data-slide-to="1"></li>-->
<!--            <li data-target="#customCarousel1" data-slide-to="2"></li>-->
<!--          </ol>-->
<!--        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MenuBar",

  data() {
    return {
      testData: '카페',
    }
  }
}
</script>

<style scoped>

</style>