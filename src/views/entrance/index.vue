<template lang="pug">
  .entrance(ref="entrance")
    .love(v-show="!hideWord" id="love" style="font-size: 16px;color: #aaa;")
    .star.comet
    .star(
      :class="index % 20 == 0 ? 'star--big' : index % 9 == 0 ? 'star--medium' : ''"
      v-for="index in 160"
      :key="index"
      :style="{top: `${Math.round(Math.random() * windowHeight)}px`, left: `${Math.round(Math.random() * windowWidth)}px`,animationDuration: `${Math.round(Math.random() * 3000) + 3000}ms`,animationDelay:`${Math.round(Math.random() * 3000)}ms`}"
    )
    .spaceboat
      img.spaceboat__icon(:src="require('@/assets/images/fly.png')")
      .spaceboat__opt
        .spaceboat__opt--start(@click="$router.push({name: 'start'})") 启动时光机
        .spaceboat__opt--skip(@click="$router.push({name: 'index'})") 回家

</template>

<script>
import Vue from 'vue'
import { typewords } from '@/utils/ityped'
import { calcTime } from '@/utils/monent'
import VueAnime from 'vue-animejs'
Vue.use(VueAnime)
export default {
  mounted() {
    this.generateLoveTime()
    this.print()
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      loveTime: {},
      playMemory: true,
      hideWord: false,
      words: ['你看这星空，它就像我对你的爱', '无穷无尽！', '我要开始召唤时光机啦', '带你穿梭到过去和未来！', '3', '2', '1']
    }
  },
  methods: {
    setLoveDate(start) {
      const now = new Date().getTime()
      const distance = now - start + 1000
      this.loveTime = calcTime(distance)
    },
    generateLoveTime() {
      const start = new Date('2014-07-12 00:00:00').getTime()
      this.setLoveDate(start)
    },
    handleConfirm() {

    },
    ufofly() {
      const spaceboat = document.querySelectorAll('div.spaceboat')
      const bodyHeight = document.body.clientHeight
      this.$anime({
        targets: spaceboat,
        translateY: bodyHeight - 200,
        keyframes: [
          {translateX: 100, translateY: 100, scale: '0.1'},
          {translateX: 150, translateY: 120, scale: '0.2'},
          {translateX: 200, translateY: 180, scale: '0.1'},
          {translateX: 300, translateY: 200, scale: '0.4'},
          {translateX: 200, translateY: 250, scale: '0.5'},
          {translateX: 350, translateY: 400, scale: '0.1'},
          {translateX: 250, translateY: bodyHeight - 200, scale: '1.2'}
        ],
        opacity: [0.5, 1],
        delay: 1000,
        loop: false,
        duration: 10000
      })
    },
    handleCancel() {},
    print() {
      const _this = this
      const firstword = '笨蛋颖，今天是我们相爱的' + this.loveTime.days + '天'
      const words = [firstword].concat(this.words)
      typewords('#love', words, () => {
        setTimeout(() => {
          _this.hideWord = true
          _this.ufofly()
        }, 1000)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.entrance {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #03061a;
  position: relative;
  overflow: hidden;
  .love {
    position: absolute;
    width: 275px;
    text-align: center;
    left: 50px;
    top: 500px;
    font-size: 16px;
  }
  .spaceboat {
    width: 275px;
    height: 80px;
    position: absolute;
    left: -200px;
    text-align: center;
    transform: scale(0.1);
    &__icon {
      width: 100px;
      height: 100px;
    }
    &__opt {
      color: #fff;
      &--start {
        float: left;
        font-size: 10px;
        margin-left: 80px;
      }
      &--skip {
        float: left;
        font-size: 10px;
        margin-left: 30px;
      }
    }
  }
  .star {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(237, 205, 163, 0.8);
    box-shadow: 0 0 40px 0 rgba(237, 205, 163, 0.8), 0 0 20px 0 #ffffff;
    animation: glow 5s infinite;
  }
  .star--medium {
    width: 6px;
    height: 6px;
  }
  .star--big {
    width: 9px;
    height: 9px;
    box-shadow: 0 0 40px 0 #edcda3, 0 0 20px 0 #ffffff, inset 0 0 4px #ffffff;
  }
  .comet {
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 40px 0 #edcda3, 0 0 20px 0 #ffffff, inset 0 0 8px rgba(255, 255, 255, 0.6);
    top: 0;
    left: 80%;
    opacity: 0.3;
    transform: rotate(-45deg) translate(0, -50px);
    animation: comet 6s infinite;
  }
  .comet:after {
    content: '';
    width: 20vw;
    height: 6px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(237, 205, 163, 0.4);
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes glow {
    0% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.9;
    }
  }
  @keyframes comet {
    0% {
      transform: rotate(-45deg) translateX(0);
      opacity: 0.3;
    }
    10% {
      opacity: 1;
    }
    20% {
      transform: rotate(-45deg) translateX(-100vw);
      opacity: 0;
    }
    100% {
      transform: rotate(-45deg) translateX(-100vw);
      opacity: 0;
    }
  }
}
</style>
