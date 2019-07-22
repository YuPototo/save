import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddSaving from './views/AddSaving.vue'
import SaveCount from './views/SaveCount.vue'
import EditSaving from './views/EditSaving.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/add',
        name: 'addSaving',
        component: AddSaving
    },
    {
        path: '/count',
        name: 'saveCount',
        component: SaveCount
    },
    {
        path: '/edit/:time',
        name: 'editSaving',
        component: EditSaving
    }     
  ]
})
