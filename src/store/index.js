import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasStarted: false,
    hasFinished: false,
    isPaused: false,
    percentageUploaded: 0
  },
  mutations: {
    start_upload(state) {
      state.hasStarted = true;
      state.isPaused = false;
    },
    pause_upload(state) {
      state.isPaused = true;
    },
    finish_upload(state) {
      state.hasFinished = true;
    },
    reset_upload(state) {
      state.hasFinished = false;
      state.hasStarted = false;
      state.hasFinished = false;
      state.isPaused = false;
      state.percentageUploaded = 0;
    }
  },
  getters: {
    showProgress: state => !state.hasFinished,
    showCancelDialog: state => state.isPaused,
    showFinishedDialog: state => state.hasFinished,
    percentageUploaded: state => state.percentageUploaded,
    showStartButton: state =>
      !state.hasStarted && !state.isPaused && !state.hasFinished,
    showPauseButton: state =>
      state.hasStarted && !state.hasFinished && !state.isPaused
  },
  modules: {}
});
