<template>
  <div class="progress" v-if="showProgress">
    <svg
      class="spinner"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="geometricPrecision"
    >
      <circle class="background" cx="50" cy="50" r="45" />
      <circle
        stroke-dasharray="283"
        :stroke-dashoffset="dashArray"
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
  props: {
    totalPercentage: {
      type: Number,
      required: true
    },
    percentageUploaded: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters(["showProgress"]),
    percentageRemaining() {
      return this.totalPercentage - this.percentageUploaded;
    },
    dashArray() {
      return `${(
        (this.percentageRemaining / this.totalPercentage) *
        283
      ).toFixed(0)}`;
    }
  }
};
</script>
<style lang="scss">
.progress {
  position: relative;
}

.spinner {
  fill: none;
  stroke: none;
  animation: rotateSpinner 2s linear infinite;
}

.background {
  stroke-width: 5px;
  stroke: #e7eaed;
}

.foreground {
  stroke-width: 5px;
  border-radius: 100px;
  transform: rotate(90deg);
  transform-origin: center;
  stroke: #3c9ffd;
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
