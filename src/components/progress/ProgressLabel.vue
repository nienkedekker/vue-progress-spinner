<template>
  <div class="percentageLabel">
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
    ...mapGetters(["percentageUploaded"]),
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
  font-size: 4em;
}

.percentageSign {
  color: $oslo-gray;
  font-size: 0.45em;
  vertical-align: top;
  display: inline-block;
  position: relative;
  margin-left: -10px;
  top: 10px;
}
</style>
