<template>
  <div class="wrapper">
    <svg
      class="spinner"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      v-if="!hasFinished"
    >
      <g class="spinnerCircle">
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
    <div v-if="hasFinished">
      ur done yay
    </div>
    <span class="label">
      Uploaded: {{ percentageUploaded }} // Remaining: {{ percentageRemaining }}
    </span>
    <button @click="startUpload">Start Upload</button>
    <button @click="pauseUpload">
      <span v-if="!hasStarted || hasFinished">cant click</span>
      Pause Upload
    </button>
    <button @click="resetUpload">
      <span v-if="!hasStarted">cant click</span>
      Reset Upload
    </button>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {},
  data() {
    return {
      totalPercentage: 100,
      percentageUploaded: 0,
      timerInterval: null,
      hasStarted: false,
      hasFinished: false
    };
  },
  methods: {
    startUpload() {
      this.hasStarted = true;
      this.timerInterval = setInterval(() => {
        if (this.percentageUploaded < this.totalPercentage) {
          this.percentageUploaded += 1;
        }
        if (this.percentageUploaded === this.totalPercentage) {
          this.hasFinished = true;
        }
      }, 100);
    },
    pauseUpload() {
      clearInterval(this.timerInterval);
    },
    resetUpload() {
      clearInterval(this.timerInterval);
      this.hasStarted = false;
      this.percentageUploaded = 0;
    }
  },
  computed: {
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

<style scoped lang="scss">
.wrapper {
  background: pink;
  position: relative;
  width: 300px;
  height: 300px;
}

.spinner {
  fill: none;
  stroke: none;
}

.percentageUploaded {
  stroke-width: 9px;
  stroke: #6c57c2;
}

.percentageRemaining {
  stroke-width: 10px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  stroke: #cfcfcf;
  animation: yay-spinny 2s linear infinite;
}

@keyframes yay-spinny {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
