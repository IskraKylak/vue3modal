import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue';


// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue); 

// Vue.config.productionTip = false

// new Vue({
// 	render: h => h(App)
// }).$mount('#app')
// App.use(Vuelidate)
// createApp().use(Vuelidate)
// createApp(App).mount('#app')
const app = createApp(App);
// app.use(useVuelidate);
app.mount('#app');