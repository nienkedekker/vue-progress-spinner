<template>
  <div class="buttonsContainer">
    <button @click="startUpload" v-if="!uploadState.started">
      Start Upload
    </button>
    <button @click="pauseUpload" v-if="uploadState.uploading">
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
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["uploadState"])
  },
  methods: {
    ...mapActions(["startUpload", "pauseUpload", "resetUpload"])
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/variables";

.buttonsContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1.5em;
  border-top: 1px solid $oslo-gray;

  button {
    min-width: 7em;
    max-height: 3em;
    padding: 0.8em 2em;
    border-radius: 500px;
    border: 1px solid $dodger-blue;
    color: $dodger-blue;
    font-size: 1em;
    cursor: pointer;
    background-color: $white;

    &:hover {
      color: $science-blue;
      border-color: $science-blue;
    }
  }

  .cancelUpload {
    background: $dodger-blue;
    color: $white;

    &:hover {
      color: $white;
      background: $science-blue;
    }
  }
}
</style>
