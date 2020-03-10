<template>
  <div class="progress" v-if="showProgress">
    <svg
      class="spinner"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle class="percentageUploaded" cx="50" cy="50" r="45" />
        <path
          :stroke-dasharray="dashArray"
          class="percentageRemaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
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
      ).toFixed(0)} 283`;
    }
  }
};
</script>
<style lang="scss">
.progress {
  position: relative;
  padding: 20px;
}

.spinner {
  fill: none;
  stroke: none;
}

.percentageUploaded {
  stroke-width: 9px;
  stroke: #3c9ffd;
}

.percentageRemaining {
  stroke-width: 10px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  stroke: #e7eaed;
  animation: rotateSpinner 2s linear infinite;
  transition: stroke-dashoffset 200ms linear, stroke 200ms linear;
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
