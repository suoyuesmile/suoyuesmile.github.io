import Vue from 'vue'
import VueRouter from 'vue-router'
import entrance from '../views/entrance'

Vue.use(VueRouter)

/**
 * 时间线
 * 2014
 * 第一回：两个青年的相遇
 * 第二回：表白——我喜欢你，怎么办
 * 第三回：昭告天下——
 * 第四回：庆祝高考——有趣的场景——美好的恋爱
 * 第五回：大学——异地恋的开端
 * 第六回：你的生日——我们一起吃完整个蛋糕
 * 第七回：我的生日——时空交错的惊喜
 * 第八回：第一个寒假——热干面、锅盔完美的早餐——武汉
 * 2015
 * 第九回：第一个暑假——椰子、清补凉那南边的海岛——海南
 * 第十回：痛苦的分别
 * 第十一回：两种生活
 * 第十二回：你的名字
 * 第十三回：再次告白
 * 第十四回：重逢——多年未见的激动
 * 第十五回：飞向你的城市——结束了多年的异地
 * 第十六回：我们的小窝
 * 第十七回：许多第一次
 * 第十八回：JOJO的到来
 * 第十九回：被疫情分隔的我们
 * 第二十回：告别2019——期待2020
 */
const routes = [
  {
    path: '/',
    name: 'entrance',
    component: entrance
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('../views/play/start.vue')
  },
  {
    // 时光机
    path: '/index',
    name: 'index',
    component: () => import('../views/index/index.vue')
  },
  {
    // 爱生活
    path: '/life',
    name: 'life',
    component: () => import('../views/life/index.vue')
  },
  {
    path: '/jojo',
    name: 'jojo',
    component: () => import('../views/jojo/index.vue')
  },
  {
    path: '/days',
    name: 'days',
    component: () => import('../views/days/index.vue')
  }
  // {
  //   path: '/start',
  //   name: 'start',
  //   component: Start
  // },
  // {
  //   path: '/establish',
  //   name: 'establish',
  //   component: Establish
  // },
  // {
  //   path: '/celebration',
  //   name: 'celebration',
  //   component: Celebration
  // },
  // {
  //   path: '/mybirthday',
  //   name: 'mybirthday',
  //   component: mybirthday
  // },
  // {
  //   path: '/ubirthday',
  //   name: 'ubirthday',
  //   component: ubirthday
  // },
  // {
  //   path: '/firstWindy',
  //   name: 'firstWindy',
  //   component: firstWindy
  // },
  // {
  //   path: '/firstSummay',
  //   name: 'firstSummay',
  //   component: firstSummay
  // },
  // {
  //   path: '/department',
  //   name: 'department',
  //   component: department
  // },
  // {
  //   path: '/twolife',
  //   name: 'twolife',
  //   component: Twolife
  // },
  // {
  //   path: '/yourname',
  //   name: 'yourname',
  //   component: Yourname
  // },
  // {
  //   path: '/again',
  //   name: '',
  //   component: ''
  // },
  // {
  //   path: '/meet-again',
  //   name: 'meet-again',
  //   component: meetAgain
  // },
  // {
  //   path: '/flyucity',
  //   name: 'flyucity',
  //   component: flyucity
  // },
  // {
  //   path: 'buildhome',
  //   name: 'buildhome',
  //   component: buildhome
  // },
  // {
  //   path: 'a-lot-of-first',
  //   name: 'a-lot-of-first',
  //   component: aLotOfFirst
  // },
  // {
  //   path: 'jojo-come',
  //   name: 'jojo-come',
  //   component: jojoCome
  // },
  // {
  //   path: 'come2020',
  //   name: 'come2020',
  //   component: come2020
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
