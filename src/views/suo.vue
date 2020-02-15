<template>
  <div class="suo" :style="{'backgroundImage': `url(${require('@/assets/images/bg.png')})`}"
  >
    <div class="love">这是我们的秘密</div>
    <div class="love2">邵锁 * 王颖</div>
    <div class="button" @click="$router.push({name: 'home'})"></div>
  </div>
</template>

<style lang="scss" scoped>
.suo {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  .love, .love2 {
    position: absolute;
    top: 300px;
    left: 50px;
    width: 275px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
  .love2 {
    top: 330px;
  }
  .button {
    position: absolute;
    top: 560px;
    left: 162px;
    // border: 1px solid #000;
    width: 50px;
    height: 46px;
  }
}
</style>
