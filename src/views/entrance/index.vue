<template lang="pug">
  .entrance(ref="entrance")
    .love(id="love" style="font-size: 16px;color: #aaa;")
    .star.comet
    .star(
      :class="index % 20 == 0 ? 'star--big' : index % 9 == 0 ? 'star--medium' : ''"
      v-for="index in 160"
      :key="index"
      :style="{top: `${Math.round(Math.random() * windowHeight)}px`, left: `${Math.round(Math.random() * windowWidth)}px`,animationDuration: `${Math.round(Math.random() * 3000) + 3000}ms`,animationDelay:`${Math.round(Math.random() * 3000)}ms`}"
    )
    sy-dialog.sy-dialog(
      v-model="playMemory"
      showCancelButton
      confirmButtonText="穿梭"
      cancelButtonText="跳过"
      cancelButtonColor="#999999"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    )
      .memory
        img.memory__icon(:src="@require('@/assets/images/x.png')")
        .memory__text 搭乘时光机回到过去

</template>

<script>
import { typewords } from '@/utils/ityped'
import { calcTime } from '@/utils/monent'
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
      playMemory: false,
      words: ['你看这星空，它就像我对你的爱', '无穷无尽！', '2020 我们也要好好在一起！']
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
    handleConfirm() {},
    handleCancel() {},
    print() {
      const _this = this
      const firstword = '笨蛋颖，今天是我们相爱的' + this.loveTime.days + '天'
      const words = [firstword].concat(this.words)
      typewords('#love', words, () => {
        setTimeout(() => {
          _this.playMemory = true
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
  .sy-dialog {
    .memory {
      width: 200px;
      height: 50px;
      &__icon {
        width: 50px;
        height: 50px;
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
