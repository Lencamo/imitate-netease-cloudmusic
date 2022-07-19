import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入初始化样式
import '@/styles/normalize.css'
// 引入js适配库
import '@/mobile/flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
