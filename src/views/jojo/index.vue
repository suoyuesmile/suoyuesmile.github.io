<template lang="pug">
  .index
    .wrapper
      swiper
      img.swiper-cover(:src="require('@/assets/images/cover.png')")
      Cardbox.card-box.mt10(
        v-for="(cardbox, index) in goodsData"
        :key="index"
        :title="cardbox.title")
        //- Banner.mb8(v-show="cardbox.topBanner")
        .card-box--wrap(:style="{height: cardbox.maxHeight + 'px'}")
          Card.card-item(
            v-for="(item, index) in cardbox.list"
            :style="{left: item.left + 'px', top: item.top + 'px'}"
            :key="index"
            :title="item.title"
            :desc="item.desc"
            :tag="item.tag"
            :type="item.type"
            @click="$router.push({name: 'goods-detail'})"
            )
        //- Banner(v-show="cardbox.bottomBanner")
      app-footer-bar(:active-index="active")
</template>
<script>
import swiper from './components/swiper'
import AppFooterBar from '@/components/app-footer-bar'
import Cardbox from './components/card/cardbox'
import Card from './components/card/card'
import { jojoData } from '@/utils/jojo'
export default {
  data() {
    return {
      active: 2,
      goodsData: []
    }
  },
  methods: {
    computeWaterFallStyle() {
      this.goodsData = jojoData
      this.goodsData.forEach((cardbox, cardIndex) => {
        let leftWeight = 0
        let rightWeight = 0
        cardbox.list.forEach((item, index) => {
          const weight = item.type === 'vertical' ? 2 : 1
          if (index === 0) {
            this.goodsData[cardIndex].list[index].left = 0
            this.goodsData[cardIndex].list[index].top = 0
            leftWeight = leftWeight + weight
          } else {
            if (rightWeight < leftWeight) {
              this.goodsData[cardIndex].list[index].left = 175
              this.goodsData[cardIndex].list[index].top = rightWeight * 268
              rightWeight = rightWeight + weight
              this.goodsData[cardIndex].maxHeight = rightWeight * 268
            } else {
              this.goodsData[cardIndex].list[index].left = 0
              this.goodsData[cardIndex].list[index].top = leftWeight * 268
              leftWeight = leftWeight + weight
              this.goodsData[cardIndex].maxHeight = leftWeight * 268
            }
          }
        })
      })
    }
  },
  mounted() {
    this.computeWaterFallStyle()
  },
  components: {
    AppFooterBar,
    swiper,
    Cardbox,
    Card
  }
}
</script>
<style lang="scss" scoped>
.index {
  position: relative;
  width: 100%;
  height: 100%;
  background: $bg-page;
  .wrapper {
    position: relative;
    background: $bg-page;
    padding-bottom: 60px;
    .swiper-cover {
        position: absolute;
        top: 210px;
        height: 15px;
        width: 375px;
        z-index: 200;
    }
    .card-box {
        &--wrap {
          position: relative;
          .card-item {
            position: absolute;
          }
        }
      }
  }
}
</style>
