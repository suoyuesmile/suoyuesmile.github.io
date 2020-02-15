<template>
  <div id="app">
    <keep-alive>
      <transition :name="slide">
        <router-view class="routers" />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: ''
    }
  },
  watch: {
    $route(to, from) {
      this.slide = 'slide-top'
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.routers {
  position: absolute;
  left: 0;
  top: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-top-enter-active,
.slide-top-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 1000ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-top-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}

.slide-top-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}

</style>
