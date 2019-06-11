import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$jQuery = $
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
