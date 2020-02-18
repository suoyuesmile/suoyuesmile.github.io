<template lang="pug">
  .index
    AppCalendar
    app-footer-bar(:active-index="active")
</template>
<script>
import AppFooterBar from '@/components/app-footer-bar'
import AppCalendar from '@/components/app-calendar'
export default {
  data() {
    return {
      active: 3
    }
  },
  mounted() {
  },
  components: {
    AppFooterBar,
    AppCalendar
  }
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>
