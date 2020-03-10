<template>
  <Transition name="fade">
    <div class="progress" v-if="showProgress">
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
  </Transition>
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
    // 283 is calculated by doing 2 * pi * 45
    circumference() {
      return 2 * Math.PI * 45;
    },
    dashOffset() {
      return `${(this.percentageRemaining / this.totalPercentage) *
        this.circumference}`;
    }
  }
};
</script>
<style lang="scss">
.progress {
  position: relative;
  padding: 40px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
