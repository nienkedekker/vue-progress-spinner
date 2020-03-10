<template>
  <div class="buttons">
    <button @click="startUpload" v-if="showStartButton">
      Start Upload
    </button>
    <button @click="pauseUpload" v-if="showPauseButton">
      Cancel Upload
    </button>
    <button @click="startUpload" v-if="uploadState.canceling">
      No
    </button>
    <button
      @click="resetUpload"
      v-if="uploadState.canceling"
      class="cancelUpload"
    >
      Yes
    </button>
    <button v-if="uploadState.finished" @click="resetUpload">
      Upload another file
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["showStartButton", "showPauseButton", "uploadState"])
  },
  methods: {
    startUpload() {
      this.$store.dispatch("startUpload");
    },
    pauseUpload() {
      this.$store.dispatch("pauseUpload");
    },
    resetUpload() {
      this.$store.dispatch("resetUpload");
    }
  }
};
</script>
<style lang="scss">
.buttons {
  width: 100%;
  border-top: 1px solid #b8bbbd;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 30px;
  box-sizing: border-box;

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
