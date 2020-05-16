import Vue from 'vue'
import App from './App'
import store from "./store"
/* import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll) */
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'


const app = new Vue({
	store,
    ...App
})
app.$mount()
