<template lang="pug">
  .index
    //- audio(id="music1" controls="controls" autoplay="autoplay" preload hidden)
    //-   source(:src="require('@/assets/audio/lovestory.ogg')")
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
              @click="handleEnterStory(story)"
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
              .memory__item__opt.fr
                app-icon.memory__item__opt__app-icon(
                  :width="24"
                  :height="24"
                  :name="story.id !== memoryActive ? 'index/bofang' : 'index/bofanging'"
                  @click="handleClickMemory(story)"
                )
    app-footer-bar(:active-index="active")
</template>
<script>
import { typewords } from '@/utils/ityped'
import { memory } from '@/api/memory'
import swiper from './components/swiper'
import AppFooterBar from '@/components/app-footer-bar'

export default {
  data() {
    return {
      active: 0,
      memoryActive: -1,
      memory: {}
    }
  },
  mounted() {
    this.memory = memory
  },
  methods: {
    handleClickMemory(story) {
      this.memoryActive = story.id
      this.print(story.words)
    },
    handleEnterStory(story) {

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
  // .top-area {
  //   height: 64px;
  //   background: $color-red;
  //   color: #fff;

  // }
  .tabs {
    // height: 64px;
    position: relative;
  }
  .memory-wrapper {
    margin-top: -44px;
    .memory__play {
      position: relative;
      height: 456px;
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
      // height: 100%;
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
        &:last-child {
          margin-bottom: 56px;
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
            filter:drop-shadow(0px 0px 1px rgb(200,20,20));
            animation: heart-hits 1.2s linear infinite;
            @keyframes heart-hits
            {
              0%   {transform: scale(1)}
              25%  {transform: scale(1.5)}
              100% {transform: scale(1)}
            }
          }
        }
        &__cell {
          // width: 200px;
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
        &__opt {
          text-align: center;
          padding-top: 12px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
