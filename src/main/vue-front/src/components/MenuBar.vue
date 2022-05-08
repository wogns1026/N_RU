<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
<!--      <img alt="N_RU LOGO" src="../assets/nru_logo.png">-->
      <h3>NRU GALLERY</h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="nruInfo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              소개
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">N_RU STORY</a></li>
              <li><a class="dropdown-item" href="#">오시는 길</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="cafeInfo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ testData }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">신메뉴</a></li>
              <li><a class="dropdown-item" href="#">음료</a></li>
              <li><a class="dropdown-item" href="#">디저트</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="hotelInfo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              민박
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">소개</a></li>
              <li><a class="dropdown-item" href="#">예약</a></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="galleryInfo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              GALLERY
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">전시회</a></li>
              <li><a class="dropdown-item" href="#">문의하기</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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