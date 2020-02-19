import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'

import '@/assets/styles/index.scss'
import '@/utils/adapt'
import './global'
Vue.use(VueTouch, { name: 'v-touch' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
