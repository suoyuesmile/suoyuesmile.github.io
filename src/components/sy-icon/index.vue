<template>
  <svg class="icon svg-icon" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
import './iconfonts.js' 
export default {
  props: {
    name: String
  }
  // mounted() {
    
  // }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
