<template lang="pug">
  .index
    app-tabs.tabs
      app-tab.tab(title="料理")
        .food-data
          .food__item(v-for="(item, index) in foodData" :key="index")
            .food__item__label {{ item.name }}
            .food__item__val {{item.value}}
      app-tab.tab(title="健身")
      app-tab.tab(title="电影")
      app-tab.tab(title="游戏")
      app-tab.tab(title="动漫")
      app-tab.tab(title="追剧")
    app-footer-bar(:active-index="active")
</template>
<script>
import AppFooterBar from '@/components/app-footer-bar'

export default {
  data() {
    return {
      tabsData: [],
      active: 1,
      foodData: [
        {
          name: '料理次数',
          value: '120'
        },
        {
          name: '料理种类',
          value: '30'
        }
      ]
    }
  },
  mounted() {},
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
