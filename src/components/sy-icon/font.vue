<template>
  <i
    class="iconfont"
    :style="{ color: color, fontSize: size }"
    v-on="$listeners"
    :class="name"
  ></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#666'
    },
    size: {
      type: String,
      default: '16px'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
