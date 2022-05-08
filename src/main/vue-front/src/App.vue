<template>
  <menu-bar />
  <main-page />

</template>

<script>
import MenuBar from "@/components/MenuBar";
import MainPage from "@/components/MainPage";

export default {
  name: 'App',
  components: {
    MainPage,
    MenuBar,
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
