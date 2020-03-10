<template>
  <div id="app">
    <div class="container">
      <ProgressChart
        :totalPercentage="totalPercentage"
        :percentageUploaded="percentageUploaded"
      >
        <ProgressLabel :percentageUploaded="percentageUploaded" />
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
  },
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

#app {
  border: 1px solid #e8e8e8;
  margin: 20px;
  background: #fff;
  border-radius: 20px;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 6px 3px 29px -24px rgba(0, 0, 0, 0.15);
}

.container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
