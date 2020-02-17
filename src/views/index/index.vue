<template lang="pug">
  .index
    app-tabs
      app-tab.tab(v-for="(item, index) in memory" :title="item.year" :key="index")
        .memory-wrapper
          .memory__play
            swiper
            .love(id="love")
          ul.memory
            li.memory__item.fix(
              v-for="(story, index) in item.timeline"
              :key="index"
              @click="handleClickMemory(story)"
              )
              .memory__item__icon.fl(v-show="story.id === memoryActive")
                app-icon.memory__item__icon__app-icon(
                  :width="24"
                  :height="24"
                  name="index/love"
                )
              .memory__item__name.fl(v-show="story.id !== memoryActive") {{story.name}}
              .memory__item__cell.fl
                .memory__item__cell__title {{story.title}}
                .memory__item__cell__time {{story.time}}
    app-footer-bar(:active-index="active")
</template>
<script>
import { typewords } from '@/utils/ityped'
import { memory } from '@/utils/memory'
import swiper from './components/swiper'
import { timeline } from '@/utils/timeline'
import AppFooterBar from '@/components/app-footer-bar'

export default {
  data() {
    return {
      tabsData: [],
      active: 0,
      memoryActive: -1,
      memory: {}
    }
  },
  mounted() {
    this.tabsData = timeline
    this.memory = memory
  },
  methods: {
    handleClickMemory(story) {
      this.memoryActive = story.id
      this.print(story.words)
    },
    print(words) {
      this.clearWord()
      typewords('#love', words, () => {
      })
    },
    clearWord() {
      var last = document.getElementById('love')
      last.innerText = ''
    }
  },
  components: {
    AppFooterBar,
    swiper
  }
}
</script>
<style lang="scss" scoped>
.index {
  position: relative;
  width: 100%;
  height: 100%;
  background: $bg-page;
  .tabs {
    position: relative;
  }
  .memory-wrapper {
    height: 400px;
    .memory__play {
      position: relative;
      height: 316px;
      .love {
        bottom: 30px;
        left: 50px;
        text-align: center;
        width: 275px;
        position: absolute;
        color: #fff;
        z-index: 0;
      }
    }
    .memory {
      margin-top: -16px;
      padding-top: 16px;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 1000px;
      background: #fff;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      &__item {
        height: 48px;
        &:active {
          background: #eee;
        }
        &__name {
          text-align: center;
          line-height: 48px;
          width: 90px;
          color: $color-pl;
        }
        &__icon {
          text-align: center;
          padding-top: 10px;
          width: 90px;
          &__app-icon {
            animation: round 5s linear infinite;
            @keyframes round
            {
              0%   {transform: rotateY(0deg)}
              25%  {transform: rotateY(90deg)}
              50%  {transform: rotateY(180deg)}
              25%  {transform: rotateY(270deg)}
              100% {transform: rotateY(360deg)}
            }
          }
        }
        &__cell {
          &__title {
            margin-top: 6px;
            line-height: 18px;
            height: 18px;
          }
          &__time {
            line-height: 20px;
            height: 18px;
            font-size: 12px;
            color: $color-pl;
          }
        }
      }
    }
  }
}
</style>
