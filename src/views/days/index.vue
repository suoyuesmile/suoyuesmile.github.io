<template lang="pug">
  .index
    p 123
    app-footer-bar(:active-index="active")
</template>
<script>
import AppFooterBar from '@/components/app-footer-bar'

export default {
  data() {
    return {
      active: 3
    }
  },
  mounted() {
  },
  components: {
    AppFooterBar
  }
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>
