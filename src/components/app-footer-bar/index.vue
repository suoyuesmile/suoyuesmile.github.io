<template lang="pug">
  van-tabbar.app-footer-bar(
    v-bind="$attrs"
    v-on="$listeners"
    title="标题"
    :value="activeIndex"
    left-arrow
    active-color="#ff3333"
    inactive-color="#000"
  )
    van-tabbar-item(icon="home-o" @click="handleChangePage(0)") 时光机
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="!props.active ? 'footer-bar/001' : 'footer-bar/011'"
      )
    van-tabbar-item(icon="home-o" @click="handleChangePage(1)") 爱生活
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="!props.active ? 'footer-bar/002' : 'footer-bar/012'"
      )
    van-tabbar-item(icon="home-o" @click="handleChangePage(2)") 狗喵喵
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="!props.active ? 'footer-bar/003' : 'footer-bar/013'"
      )
    van-tabbar-item(icon="home-o" @click="handleChangePage(3)") 纪念日
      app-icon(
        :width="24"
        :height="25"
        slot="icon"
        slot-scope="props"
        :name="!props.active ? 'footer-bar/004' : 'footer-bar/014'"
      )

</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'app-footer-bar',
  data() {
    return {}
  },
  props: {
    activeIndex: {
      type: Number
    }
  },
  methods: {
    handleChangePage(index) {
      if (this.activeIndex === index) {
        return
      }
      switch (index) {
        case 0:
          this.$router.replace({ name: 'index' })
          break
        case 1:
          this.$router.replace({ name: 'life' })
          break
        case 2:
          this.$router.replace({ name: 'jojo' })
          break
        case 3:
          this.$router.replace({ name: 'days' })
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  height: 50px;
  background: $bg-theme!important;
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1.2em rgba(0, 0, 0, 0.6);
  ::v-deep &-item {
    &__text {
      font-size: 10px;
    }
  }
}
</style>
