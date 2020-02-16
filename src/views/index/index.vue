<template lang="pug">
  .index
    app-tabs.tabs
      app-tab.tab(v-for="(item, index) in tabsData" :title="item.title" :key="index")
        .tab-content 123
    app-footer-bar(:active-index="active")
</template>
<script>
import { timeline } from '@/utils/timeline'
import AppFooterBar from '@/components/app-footer-bar'

export default {
  data() {
    return {
      tabsData: [],
      active: 0
    }
  },
  mounted() {
    this.tabsData = timeline
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
  .tabs {
    // padding: 70px 0 0 0;
    // background: $bg-page;
    // .tab-content {
    //   .goods-list {
    //     &-item {
    //     }
    //   }
    // }
    }
}
</style>
