<template>
  <div class="home" ref="home">
    <div id="love" class="love" style="font-size: 16px;color: #aaa;">
    </div>
    <div class="star comet"></div>
    <div
    :class="index % 20 == 0 ? 'star star--big' : index % 9 == 0 ? 'star star--medium' : 'star'"
    v-for="index in 160"
    :key="index"
    :style="{
      top: `${Math.round(Math.random() * wH)}px`,
      left: `${Math.round(Math.random() * wW)}px`,
      animationDuration: `${Math.round(Math.random() * 3000) + 3000}ms`,
      animationDelay:`${Math.round(Math.random() * 3000)}ms`
      }
    ">
    </div>
  </div>
</template>

<script>
import { init } from 'ityped'
export default {
  mounted() {
    const start = new Date('2014-07-12 00:00:00').getTime()
    this.setLoveDate(start)
    let _this = this
    init('#love', {
      strings: [
        '今天是锁与颖相爱的' + this.loveTime.days + '天',
        '愿我们能永远幸福快乐的在一起！',
        '我爱你，王颖！永远爱你！',
        '想陪你看流星!',
        '想陪你看烟花!',
        '想陪你看尽这世间的一切!'
      ],
      typeSpeed: 220, // default
      backSpeed: 100, // default
      startDelay: 1000, // default
      backDelay: 500, // default
      loop: false, // default
      showCursor: false, // default
      cursorChar: '|', // default
      onFinished: function() {
        setTimeout(() => {
          _this.$router.push({name: 'mine'})
        }, 1000)
      }
    })
  },
  data() {
    return {
      wH: window.innerHeight,
      wW: window.innerWidth,
      loveTime: {}
    }
  },
  methods: {
    calcLoveDays(distance) {
      const days = Math.floor(distance / (24 * 3600 * 1000))
      const leave1 = distance % (24 * 3600 * 1000)
      const hours = Math.floor(leave1 / (3600 * 1000))
      const leave2 = leave1 % (3600 * 1000)
      const minutes = Math.floor(leave2 / (60 * 1000))
      const leave3 = leave2 % (60 * 1000)
      const seconds = Math.round(leave3 / 1000)
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    },
    setLoveDate(start) {
      const now = new Date().getTime()
      const distance = now - start + 1000
      this.loveTime = this.calcLoveDays(distance)
    }
  },
  computed: {
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #03061A;
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
  .love2 {
    position: absolute;
    width: 275px;
    text-align: center;
    left: 50px;
    top: 530px;
    font-size: 16px;
  }
  .love3 {
    position: absolute;
    width: 275px;
    text-align: center;
    left: 50px;
    top: 560px;
    font-size: 16px;
  }
  .star {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(237, 205, 163, 0.8);
    box-shadow: 0 0 40px 0 rgba(237, 205, 163, 0.8), 0 0 20px 0 #FFFFFF;
    animation: glow 5s infinite;
  }
  .star--medium {
    width: 6px;
    height: 6px;
  }
  .star--big {
    width: 9px;
    height: 9px;
    box-shadow: 0 0 40px 0 #EDCDA3, 0 0 20px 0 #FFFFFF, inset 0 0 4px #FFFFFF;
  }

  .comet {
    width: 6px;
    height: 6px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 40px 0 #EDCDA3, 0 0 20px 0 #FFFFFF, inset 0 0 8px rgba(255, 255, 255, 0.6);
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
