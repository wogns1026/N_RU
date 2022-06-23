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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
