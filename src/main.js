import Vue from 'vue'
import App from './App.vue'

import router from './router'
import {store} from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('a-chart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        this.$store.commit('INIT_STORE');
    }
}).$mount('#app')
