import Vue from 'vue'
import App from './App'
import store from "./store"
import ProgressBar from '@/components/Progress-Bar/Progress-Bar.vue';
import headTop from '@/components/page-head/page-head.vue'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
/* import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll) */
Vue.component('ProgressBar', ProgressBar);
Vue.component('headTop',headTop);
Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'


const app = new Vue({
	store,
    ...App
})
app.$mount()
