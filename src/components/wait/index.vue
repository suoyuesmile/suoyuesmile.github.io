<template>
  <div
    class="box"
    :style="{
      backgroundImage: 'url(' + require('../../assets/images/' + name) + ')'
    }"
  >
    <p class="tip">{{ tip }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    tip: {
      type: String,
      default: '加紧建设中...'
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 100%;
  height: 0px;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 80%;
  color: #fff;
  text-align: center;
  background-size: cover;
  .tip {
    position: absolute;
    width: 100%;
    bottom: 30px;
  }
}
</style>
