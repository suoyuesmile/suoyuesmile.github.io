<template lang="pug">
  .card-wrap(
    v-on="$listeners"
  )
    .card(:style="{height: isVertical ? '260px' : '260px'}")
      img.card__cover(
        :src="require('@/assets/images/index/1.png')"
        :style="getCardCoverStyle"
        )
      .card__title {{title}}
      .card__desc {{desc}}
      //- .card__tag {{tag}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    isVertical() {
      return this.type === 'vertical'
    },
    getCardCoverStyle() {
      if (!this.isVertical) {
        return {
          left: '0px',
          top: '0px',
          width: '168px',
          height: '200px'
        }
      }
      return {
        left: '5px',
        top: '118px',
        width: '168px',
        height: '200px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-wrap {
  // position: absolute;
  .card {
    width: 168px;
    border-radius: 4px;
    background: #fff;
    position: relative;
    overflow: hidden;
    &__cover {
      position: absolute;
      left: 0px;
      height: 200px;
    }
    &__title {
      margin: 210px 0px 0px 10px;
      font-size: 15px;
      font-weight: 400;
      // color: #ff5959;
    }
    &__desc {
      margin: 8px 0px 0px 10px;
      font-size: 10px;
      color: #b3b3b3;
    }
    &__tag {
      margin: 10px 0px 0px 10px;
      width: fit-content;
      line-height: 16px;
      padding: 0 4px;
      height: 16px;
      border-radius: 12px;
      background: #ffa6a6;
      color: #fff;
      font-size: 10px;
    }
  }
}
</style>
