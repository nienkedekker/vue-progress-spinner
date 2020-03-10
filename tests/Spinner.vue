<template>
  <section class="container">
    <div class="wrapper">
      <div class="progress" v-if="showProgress">
        <svg
          class="spinner"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
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
        <div class="percentageLabel">
          <span class="percentageLabelUploaded"
            >{{ percentageUploaded }}
            <span class="percentageSign">%</span>
          </span>
        </div>
      </div>
      <div v-if="showFinishedDialog" class="message">
        🎉 We're done! Get a link here..
        <button @click="resetUpload">try again</button>
      </div>
      <div v-if="showCancelDialog" class="message">
        Are you sure?
        <button @click="startUpload">NO Continue</button>
        <button @click="resetUpload" class="cancelUpload">
          Yes Cancel
        </button>
      </div>
    </div>
    <div class="buttons">
      <!-- Show START when hasStarted: false, isPaused: false and hasFinished: false-->
      <button @click="startUpload" v-if="showStartButton">
        Start Upload
      </button>
      <!-- Show CANCEL when hasStarted: true and hasFinished: false-->
      <button @click="pauseUpload" v-if="showPauseButton">
        Cancel Upload
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Spinner",
  props: {},
  data() {
    return {
      totalPercentage: 100,
      percentageUploaded: 0,
      timerInterval: null
    };
  },
  methods: {
    startUpload() {
      this.$store.commit("start_upload");
      this.timerInterval = setInterval(() => {
        if (this.percentageUploaded < this.totalPercentage) {
          this.percentageUploaded++;
        }
        if (this.percentageUploaded === this.totalPercentage) {
          this.$store.commit("finish_upload");
          clearInterval(this.timerInterval);
        }
      }, 100);
    },
    pauseUpload() {
      this.$store.commit("pause_upload");
      clearInterval(this.timerInterval);
    },
    resetUpload() {
      this.$store.commit("reset_upload");
      this.percentageUploaded = 0;
      clearInterval(this.timerInterval);
    }
  },
  computed: {
    ...mapGetters([
      "showProgress",
      "showCancelDialog",
      "showFinishedDialog",
      "showStartButton",
      "showPauseButton"
    ]),
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
  border: 1px solid #e8e8e8;
  // padding: 20px;
  margin: 20px;
  background: #fff;
  border-radius: 20px;
  // height: 400px;
  width: 350px;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  align-items: center;
  box-shadow: 6px 3px 29px -24px rgba(0, 0, 0, 0.15);
}

.wrapper {
  /*width: 250px;*/
  /*height: 250px;*/
  position: relative;
}

.spinner {
  fill: none;
  stroke: none;
}

.percentageLabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.percentageLabelUploaded {
  color: #000;
  font-size: 48px;
}

.percentageSign {
  color: #b8bbbd;
  font-size: 0.45em;
  vertical-align: top;
  display: inline-block;
  position: relative;
  margin-left: -4px;
  top: 5px;
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

.message {
  font-size: 4em;

  p {
    font-size: 16px;
  }
}

@keyframes rotateSpinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.buttons {
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-around;
  button {
    border: 1px solid #409fff;
    color: #409fff;
    font-size: 1em;
    cursor: pointer;
    background: white;
    padding: 10px 30px;
    border-radius: 20px;

    &:hover {
      color: blue;
      border-color: blue;
    }
  }

  .cancelUpload {
    background: #409fff;
    color: white;

    &:hover {
      color: white;
      background: blue;
    }
  }
}
</style>
