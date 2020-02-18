<template lang="pug">
  .app-calendar
    .today-title
      span.mr4 {{month}}月
      span {{year}}年
    .weeks
      .weeks__cell.dib(v-for="(title, index) in weekTitleList" :key="index") {{title}}
    .days(@touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd")
      .days__cell.dib(ref="days" v-for="index in getMonthDays()" :key="index" :style="{marginLeft: index === 1 ? (getWeekInMonth(year, month) - 1) * 48 + 'px' : '0px'}") {{index}}
</template>

<script>

export default {
  name: 'app-calendar',
  data() {
    return {
      weekTitleList: ['一', '二', '三', '四', '五', '六', '日'],
      today: '',
      year: '',
      month: '',
      day: '',
      startX: '',
      moveX: ''
    }
  },
  mounted() {
    this.setDefaultDate()
  },
  methods: {
    setDefaultDate() {
      const today = new Date()
      this.year = today.getFullYear()
      this.month = today.getMonth() + 1
      this.day = today.getDate()
      this.today = this.year + '-' + (this.month < 10 ? '0' + this.month : this.month) + '-' + (this.day < 10 ? '0' + this.day : this.day)
    },
    getWeekInMonth(year, month) {
      const weekDay = new Date(year + '/' + month + '/' + '01').getDay()
      return weekDay || 7
    },
    getMonthDays() {
      return new Date(2019, 2, 0).getDate()
    },
    handleChangeLastMonth() {
      if (this.month === 1) {
        this.month = 12
        this.year = this.year - 1
      } else {
        this.month = this.month - 1
      }
    },
    handleChangeNextMonth() {
      if (this.month === 12) {
        this.month = 1
        this.year = this.year + 1
      } else {
        this.month = this.month + 1
      }
    },
    handleTouchStart(event) {
      if (event) {
        event.preventDefault()
      }
      if (event.touches && event.touches.length) {
        this.startX = event.touches[0].screenX
      }
    },
    handleTouchMove(event) {
      if (!event.touches || !event.touches.length) {
        return
      }
      if (event.touches[0].screenX - this.startX > 30) {
        this.handleChangeLastMonth()
      }
      if (event.touches[0].screenX - this.startX < -30) {
        this.handleChangeNextMonth()
      }
    },
    handleTouchEnd(event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
$cell-width: 48px;
$cell-heigth: 36px;
.app-calendar {
  background: #f7ebea;
  width: 350px;
  margin: 20px auto;
  padding-bottom: 8px;
  padding-top: 4px;
  border-radius: 8px;
  .today-title {
    height: 30px;
    line-height: 30px;
    font-weight: 500;
    margin: 0 auto;
    text-align: center;
  }
  .weeks {
    width: $cell-width * 7;
    &__cell {
      text-align: center;
      line-height: $cell-heigth;
      height: $cell-heigth;
      width: $cell-width;
      font-size: 12px;
    }
  }
  .days {
    width: $cell-width * 7;
    &__cell {
      margin-left: 2px;
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      line-height: $cell-heigth;
      width: $cell-width;
      height: $cell-heigth;
    }
  }
}
</style>
