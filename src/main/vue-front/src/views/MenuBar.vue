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