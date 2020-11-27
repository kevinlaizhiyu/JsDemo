import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入样式重置文件
import './style/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
