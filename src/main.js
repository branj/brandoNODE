import Vue from 'vue'
import App from './App.vue'
import './assets/bootstrap.min.css'
import VueRouter from 'vue-router'
import About from './components/pages/About.vue'
import Resume from './components/pages/Resume.vue'
import Services from './components/pages/Services.vue'
import Contact from './components/pages/Contact.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

