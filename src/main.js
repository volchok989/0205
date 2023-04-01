import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'
import '@/assets/scss/app.scss'

Vue.use(VueApexCharts)

Vue.component('apex-chart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
