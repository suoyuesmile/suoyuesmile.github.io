import Vue from 'vue'

import { Sticky } from 'vant'
import appIcon from '@/components/app-icon'
import appMusic from '@/components/app-music'
import appTab from '@/components/app-tab'
import appTabs from '@/components/app-tab/tabs'

// 全局注册基础组件，页面无需再次引用即可使用
Vue.component('app-icon', appIcon)
Vue.component('app-music', appMusic)
Vue.component('app-tab', appTab)
Vue.component('app-tabs', appTabs)
Vue.use(Sticky)
