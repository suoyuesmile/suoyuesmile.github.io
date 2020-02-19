<template lang="pug">
  van-tabs.van-tabs(
    v-bind="$attrs"
    v-on="$listeners"
    sticky
    :line-width="lineWidth"
    title-active-color="#fff"
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
  }
}
</script>

<style lang="scss" scoped>
.van-tabs {
  ::v-deep .van-tabs__wrap {
    height: 50px;
    z-index: 1000;
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
  }
  ::v-deep .van-ellipsis {
    background: rgba(100, 100, 100, 1);
    z-index: 1000;
    line-height: 50px;
    font-size: 14px;
    font-weight: 400;
    color: $color-weak;
  }
  ::v-deep .van-tabs__line {
    bottom: 22px;
    border-radius: 2px;
    background: #fff;
  }
  ::v-deep .van-tab--active {
    color: $color-weak;;
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
