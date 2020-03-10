<template>
  <div class="percentageLabel">
    <span class="percentageLabelUploaded"
      >{{ percentageUploaded }}
      <span class="percentageSign">%</span>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    percentageUploaded: {
      type: Number,
      required: true
    }
  }
};
</script>
<style lang="scss">
.percentageLabel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-variant-numeric: lining-nums;
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
</style>
