<template lang="pug">
  .detail 详情
</template>
<script>

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
  mounted() {}

}
</script>
<style lang="scss" scoped>
.detail {
  width: 100%;
  height: 100%;
}
</style>
