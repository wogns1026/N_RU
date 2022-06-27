<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
        NRU GALLERY
      </a>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
        <div class="flex-fill">
          <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">NRU STORY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">MENU</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop.html">숙소</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">GALLERY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">공지사항</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- Close Header -->

  <!-- Modal -->
  <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="w-100 pt-1 mb-5 text-right">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="" method="get" class="modal-content modal-body border-0 p-0">
        <div class="input-group mb-2">
          <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ...">
          <button type="submit" class="input-group-text bg-success text-light">
            <i class="fa fa-fw fa-search text-white"></i>
          </button>
        </div>
      </form>
    </div>
  </div>



  <!-- Start Banner Hero -->
  <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" style="">
      <div class="carousel-item active">
        <div class="container">
          <div class="row p-5">
            <img style="height: 600px;" src="nru-img1.PNG" alt="">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <img style="height: 600px;" src="nru-gallery.JPG" alt="">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <img style="height: 600px;" src="nru-gallery1.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
      <i class="fas fa-chevron-right"></i>
    </a>
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