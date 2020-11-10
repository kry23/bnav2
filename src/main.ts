import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

const datepickerOptions = {}

Vue.use(AirbnbStyleDatepicker,datepickerOptions)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
