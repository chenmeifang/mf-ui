import Vue from 'vue'
import App from './App.vue'
import MfUI from '../packages/index'
Vue.config.productionTip = false
Vue.use(MfUI)
// 安装插件的原理：当调用Vue.use()的时候，会自动找到对象里面的install方法去执行

new Vue({
  render: h => h(App),
}).$mount('#app')
