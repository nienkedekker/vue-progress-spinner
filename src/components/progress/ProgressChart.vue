<template>
  <div class="progress" v-if="!uploadState.finished">
    <svg
      class="spinner"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
    >
      <circle class="background" cx="50" cy="50" r="45" />
      <circle
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        class="foreground"
        cx="50"
        cy="50"
        r="45"
      ></circle>
    </svg>
    <slot></slot>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Progress",
  computed: {
    ...mapGetters(["uploadState", "percentageUploaded", "totalPercentage"]),
    percentageRemaining() {
      return this.totalPercentage - this.percentageUploaded;
    },
    // 45 = the radius of the circle
    circumference() {
      return 2 * Math.PI * 45;
    },
    dashOffset() {
      return (
        (this.percentageRemaining / this.totalPercentage) * this.circumference
      );
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/variables";
.progress {
  position: relative;
  margin: 2em 2em 0 2em;
}

.spinner {
  fill: none;
  stroke: none;
  animation: rotateSpinner 2s linear infinite;
}

.background {
  stroke-width: 5px;
  stroke: $athens-gray;
}

.foreground {
  stroke-width: 5px;
  transform: rotate(
    90deg
  ); // make sure the progress starts at the top of the circle
  transform-origin: center;
  stroke: $dodger-blue;
  stroke-linecap: round;
}

@keyframes rotateSpinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
