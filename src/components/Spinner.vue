<template>
  <section class="container">
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
      <div class="percentageLabel">{{ percentageUploaded }}%</div>
    </div>
    <div class="buttons">
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
  </section>
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
          this.percentageUploaded++;
        }
        if (this.percentageUploaded === this.totalPercentage) {
          this.hasFinished = true;
          clearInterval(this.timerInterval);
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
.container {
  border: 1px solid grey;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  height: 600px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.wrapper {
  width: 250px;
  height: 250px;
  position: relative;
}

.spinner {
  fill: none;
  stroke: none;
}

.percentageLabel {
  color: red;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  width: 250px;
  height: 250px;
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
