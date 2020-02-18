<template>
  <div class="start">
    <div id="love" class="love"></div>
  </div>
</template>
<script>
import { init } from 'ityped'
export default {
  mounted() {
    let _this = this
    init('#love', {
      strings: [
        '2018年6月8日，这天我俩高考',
        '英语考试完不久',
        '害羞的我终于鼓起勇气，说出了一句',
        '怎么办，我喜欢你！',
        '我俩命运的齿轮从此滚动起来...'
      ],
      typeSpeed: 220,
      backSpeed: 100,
      startDelay: 1000,
      backDelay: 500,
      loop: false,
      showCursor: false,
      cursorChar: '|',
      onFinished: function() {
        setTimeout(() => {
          _this.$router.push({ name: 'establish' })
        }, 1000)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.start {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.love {
  position: absolute;
  width: 275px;
  text-align: center;
  left: 50px;
  top: 500px;
  font-size: 16px;
}
</style>
