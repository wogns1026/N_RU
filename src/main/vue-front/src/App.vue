<template>
  <div>
    <menu-bar />
    <main-page />
    <nru-footer />
  </div>
</template>

<script>
import MenuBar from "@/views/MenuBar";
import MainPage from "@/views/MainPage";
import NruFooter from "@/views/NruFooter";

export default {
  name: 'App',
  components: {
    MainPage,
    MenuBar,
    NruFooter,
  },

  data() {
    return {

    }
  }
}
</script>