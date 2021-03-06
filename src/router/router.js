import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/showComponent',
      name: 'ShowComponent',
      component: ()=>import('../views/demo/ShowComponent')
    },
    {
      path: '/searchTest',
      name: 'searchTest',
      component: ()=>import('../views/demo/SearchItemTest')
    }

  ]
})
