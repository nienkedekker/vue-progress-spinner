<template>
  <div id="app">
    <Spinner />
  </div>
</template>

<script>
import Spinner from "./components/Spinner.vue";

export default {
  name: "App",
  components: {
    Spinner
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
