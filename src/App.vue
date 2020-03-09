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
body,
html {
  background-color: #e4e4e4;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica,
    Arial, sans-serif;
}
</style>
