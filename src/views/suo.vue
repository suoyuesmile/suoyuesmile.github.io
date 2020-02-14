<template>
  <div class="suo" :style="{'backgroundImage': `url(${require('@/assets/images/bg.png')})`}"
   @click="$router.push({name: 'home'})"
  >
  </div>
</template>

<style lang="scss" scoped>
.suo {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>
