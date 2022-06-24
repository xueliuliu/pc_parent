import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

// 注册微应用
registerMicroApps([
  {
    name: 'pc_child',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/vueChild'
  }
])
start() // 启动qiankun

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
