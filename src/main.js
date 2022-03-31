import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from '@/router'
import i18n from '@/i18n'

import 'element-ui/lib/theme-chalk/display.css'

import '@/styles/style.scss'

Vue.use(ElementUI, { size: 'mini' })

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
