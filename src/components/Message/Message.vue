<template>
  <div class="message" aria-live="polite">
    <component :is="getComponent"></component>
  </div>
</template>
<script>
import Finished from "./dialogs/Finished.vue";
import Canceling from "./dialogs/Canceling";
import Uploading from "./dialogs/Uploading";
import { mapGetters } from "vuex";

export default {
  components: {
    Finished,
    Canceling,
    Uploading
  },
  computed: {
    ...mapGetters(["uploadState"]),
    getComponent() {
      if (this.uploadState.canceling) return "Canceling";
      if (this.uploadState.finished) return "Finished";
      if (this.uploadState.uploading) return "Uploading";
      return "";
    }
  }
};
</script>
<style scoped lang="scss">
.message {
  display: inline-flex;
  align-items: center;
  height: 100%;

  p {
    margin: 0;
    padding: 0;
  }
}
</style>
