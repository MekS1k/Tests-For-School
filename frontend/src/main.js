import Vue from 'vue'
import VueRouter from 'vue-router'
 
import App from './App.vue'
import AddAndViewTest from './components/AddAndViewTest.vue'
import ViewQuestions from './components/ViewQuestions.vue'
import CreateQuestionsForTests from './components/CreateQuestionsForTests.vue'
import CreateDataTests from './components/CreateDataTests'

import SingIn from './components/SingIn.vue'
 
Vue.use(VueRouter)
 
Vue.config.productionTip = false
 
const routes = [
  
  {
    name: 'AddAndViewTest',
    path: '/AddAndViewTest',
    component: AddAndViewTest
  },
  {
    name: 'SingIn',
    path: '/',
    component: SingIn
  },
  {
    name: 'ViewQuestions',
    path: '/ViewQuestions',
    component: ViewQuestions
  },
  {
    name: 'CreateQuestionsForTests',
    path: '/CreateQuestionsForTests',
    component: CreateQuestionsForTests
  },
  {
    name: 'CreateDataTests',
    path: '/CreateDataTests',
    component: CreateDataTests
  },
];
 
const router = new VueRouter({ mode: 'history', routes: routes })
 
new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')