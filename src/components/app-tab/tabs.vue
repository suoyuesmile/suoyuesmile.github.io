<template lang="pug">
  van-tabs.van-tabs(
    v-bind="$attrs"
    v-on="$listeners"
    sticky
    :line-width="lineWidth"
    title-active-color="#fff"
    @scroll="handleScroll"
    background="trasparent"
    swipeable
    )
    slot
</template>

<script>
import { Tabs } from 'vant'
import Vue from 'vue'
import { getColor } from '@/utils'
Vue.use(Tabs)

export default {
  name: 'app-tabs',
  props: {
    lineWidth: {
      type: Number,
      default: 40
    },
    theme: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    getThemeColor() {
      return getColor(this.theme)
    }
  },
  methods: {
    handleScroll({scrollTop, isFixed}) {
      console.log(scrollTop, isFixed)
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabs {
  ::v-deep .van-tabs__wrap {
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
  }
  ::v-deep .van-ellipsis {
    z-index: 1000;
    font-size: 14px;
    font-weight: 400;
    color: $color-weak;
    background: rgba(100, 100, 100, 0.6);
  }
  ::v-deep .van-tabs__line {
    bottom: 22px;
    border-radius: 2px;
    background: #fff;
  }
  ::v-deep .van-tab--active {
    color: $color-weak;;
    font-weight: 400;
    font-size: 17px;
  }
}
</style>
