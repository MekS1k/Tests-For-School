import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import AddAcount from './components/AddAcount.vue'
import AddAndViewTest from './components/AddAndViewTest.vue'

import Index from './components/SingIn.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  {
    name: 'AddAcount',
    path: '/AddAcount',
    component: AddAcount
  },
  {
    name: 'AddAndViewTest',
    path: '/AddAndViewTest',
    component: AddAndViewTest
  },
  {
    name: 'SingIn',
    path: '/',
    component: Index
  },
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')