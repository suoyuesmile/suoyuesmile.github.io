<template lang="pug">
  van-tabs(
    v-bind="$attrs"
    v-on="$listeners"
    :line-width="lineWidth"
    :title-active-color="getThemeColor"
    background="transparent"
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
  ::v-deep .van-ellipsis {
    font-size: 14px;
    font-weight: 400;
    color: #000;
  }
  ::v-deep .van-tabs__line {
    bottom: 22px;
    border-radius: 2px;
    background: linear-gradient(135deg, $color-purple 0%, $color-red 100%) !important;
  }
  ::v-deep .van-tab--active {
    color: $color-orange;
    font-weight: 400;
    font-size: 17px;
  }
}
</style>
