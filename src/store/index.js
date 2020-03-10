import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasStarted: false,
    hasFinished: false,
    isPaused: false,
    percentageUploaded: 0,
    totalPercentage: 100
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
  actions: {
    startUpload({ commit, state }) {
      commit("start_upload");
      state.timerInterval = setInterval(() => {
        if (state.percentageUploaded < state.totalPercentage) {
          state.percentageUploaded++;
        }
        if (state.percentageUploaded === state.totalPercentage) {
          commit("finish_upload");
          clearInterval(state.timerInterval);
        }
      }, 100);
    },
    pauseUpload({ commit, state }) {
      commit("pause_upload");
      clearInterval(state.timerInterval);
    },
    resetUpload({ commit, state }) {
      commit("reset_upload");
      clearInterval(state.timerInterval);
    }
  },
  getters: {
    showProgress: state => !state.hasFinished,
    uploadState: state => {
      return {
        uploading: state.hasStarted && !state.isPaused && !state.hasFinished,
        canceling: state.isPaused,
        finished: state.hasFinished
      };
    },
    showStartButton: state =>
      !state.hasStarted && !state.isPaused && !state.hasFinished,
    showPauseButton: state =>
      state.hasStarted && !state.hasFinished && !state.isPaused
  },
  modules: {}
});
