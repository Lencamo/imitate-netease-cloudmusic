import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入初始化样式
import '@/styles/normalize.css'
// 引入js适配库
import '@/mobile/flexible'

// 全局注册vant组件（按需引入）
import { NavBar, Tabbar, TabbarItem, Col, Row, Image as VanImage } from 'vant'

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
