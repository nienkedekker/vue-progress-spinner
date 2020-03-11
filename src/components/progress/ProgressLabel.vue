<template>
  <div class="percentageLabel" aria-live="off">
    <!-- Probably want to add a visually-hidden upload indicator for screen readers/AT here.
    Something that only announces the percentage uploaded when it's almost done, or lagging, or something. -->
    <span class="percentageLabelUploaded"
      >{{ percentageUploaded }}
      <span class="percentageSign">%</span>
    </span>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ProgressLabel",
  computed: {
    ...mapGetters(["percentageUploaded"])
  }
};
</script>
<style scoped lang="scss">
@import "../../styles/variables";

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
  color: $black;
  font-size: 3.5em;
}

.percentageSign {
  color: $oslo-gray;
  font-size: 0.45em;
  vertical-align: top;
  display: inline-block;
  position: relative;
  margin-left: -5px;
  top: 10px;
}
</style>
