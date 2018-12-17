// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './routers'
import element from './elementUi'
import './assets/font_957151_stpgjfwpswe/iconfont.css'
import Axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(element)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
