<template>
  <div id="app">
    <div class="container">
      <ProgressChart>
        <ProgressLabel />
      </ProgressChart>
      <Message />
      <Buttons />
    </div>
  </div>
</template>

<script>
import ProgressChart from "./components/progress/ProgressChart";
import ProgressLabel from "./components/progress/ProgressLabel";
import Message from "./components/Message/Message";
import Buttons from "./components/Buttons/Buttons";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    ProgressChart,
    ProgressLabel,
    Buttons,
    Message
  },
  computed: {
    ...mapState(["totalPercentage", "percentageUploaded"])
  }
};
</script>

<style lang="scss">
@import "./styles/variables";

* {
  box-sizing: border-box;
}

body,
html {
  background-color: $gallery-white;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 100%;
  line-height: 1;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20em;
  height: 28em;
  margin: 2em;
  border: 1px solid $athens-gray;
  background-color: $white;
  border-radius: 20px;
  box-shadow: 6px 3px 29px -24px rgba(0, 0, 0, 0.25);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
