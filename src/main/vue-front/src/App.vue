<template>
  <div>
    <menu-bar />
    <main-page />
    <nru-footer />
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
import MainPage from "@/components/MainPage";
import NruFooter from "@/components/NruFooter";

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