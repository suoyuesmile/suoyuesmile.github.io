<template lang="pug">
  .index
    app-calendar
    .lovetime
      span.lovetime--text 相爱
      span.lovetime--num {{lovetime.days}}
      span.lovetime--text 天
      span.lovetime--num {{lovetime.hours}}
      span.lovetime--text 小时
      span.lovetime--num {{lovetime.minutes}}
      span.lovetime--text 分钟
      span.lovetime--num {{lovetime.seconds}}
      span.lovetime--text 秒
    .memory-days.fix
      .memory-day.fl.ml8(
        v-for="(item, index) in memorydaysList"
        :key="index"
        @click="selectedCard = index"
      )
        .memory-day--common.memory-day--front(:style="index === selectedCard ? 'transform: rotateY(-180deg);': ''")
          .memory-day--front__text {{item.name}}
          .memory-day--front__count
            span.memory-day--front__count--num {{item.days}}
            span.memory-day--front__count--text 天
        img.memory-day--common.memory-day--back(
          :style="{transform: index === selectedCard ? 'rotateY(-360deg)': 'rotateY(-180deg)'}"
          :src="require(`@/assets/images/${item.img}.png`)"
          )

    app-footer-bar(:active-index="active")
</template>
<script>
import AppFooterBar from '@/components/app-footer-bar'
import AppCalendar from '@/components/app-calendar'
import { memoryDays } from '@/api/memory'
import { calcTime } from '@/utils/monent'
export default {
  data() {
    return {
      active: 3,
      lovetime: {},
      memorydaysList: [],
      selectedCard: ''
    }
  },
  mounted() {
    this.setLoveTime()
    this.setMemoryDays()
  },
  methods: {
    getLoveTime() {
      const start = new Date('2014-07-12 00:00:00').getTime()
      const distance = new Date().getTime() - start
      return calcTime(distance)
    },
    setLoveTime() {
      setInterval(() => {
        this.lovetime = this.getLoveTime()
      }, 1000)
    },
    nowDateEnd(date) {
      const now = new Date()
      const currentMonth = now.getMonth() + 1
      const currentDay = now.getDate()
      const month = parseFloat(date.time.slice(5, 7))
      const day = parseFloat(date.time.slice(8, 10))
      if (month === currentMonth && day === currentDay) {
        return now
      }
      if (month === currentMonth && day > currentDay) {
        return new Date(String(now.getFullYear()) + '-' + month + '-' + day)
      }
      if (month > currentMonth) {
        return new Date(String(now.getFullYear()) + '-' + month + '-' + day)
      }
      return new Date(now.getFullYear() + 1 + '-' + month + '-' + day)
    },
    setMemoryDays() {
      this.memorydaysList = memoryDays
      this.memorydaysList.forEach((item, index, arr) => {
        const end = this.nowDateEnd(item)
        const distance = end - new Date().getTime()
        this.memorydaysList[index].days = calcTime(distance).days
      })
    }
  },
  components: {
    AppFooterBar,
    AppCalendar
  }
}
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100%;
  .lovetime {
    height: 48px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
    background: rgba(250, 250, 250, 0.6);
    box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
    &--text {
      font-size: 14px;
      color: $color-deep;
    }
    &--num {
      font-size: 18px;
      color: $color-red;
    }
  }
  .memory-days {
    margin-left: 12px;
    width: 350px;
    margin-bottom: 60px;
    .memory-day {
      position: relative;
      height: 130px;
      width: 107px;
      margin-top: 10px;
      &--common {
        position: absolute;
        height: 130px;
        width: 107px;
        border-radius: 4px;
        background: #fff;
        text-align: center;
        box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset, 0 .5em 1em rgba(0, 0, 0, 0.6);
        perspective: 500;
        transition: 1s ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transform: rotateY(0deg);
      }
      &--front {
        &__text {
          background: #f7ebea;
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
          color: $color-deep;
          font-weight: 500;
          line-height: 28px;
        }
        &__count {
          height: 90px;
          line-height: 90px;
          font-weight: 500;
            &--text {
              font-size: 12px;
              color: $color-deep;
            }
            &--num {
              font-size: 30px;
              color: $color-red;
            }
        }
      }
      &--back {
        transform: rotateY(-180deg);
        background: $color-blue;
      }
    }
  }
}
</style>
