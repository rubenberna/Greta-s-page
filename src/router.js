import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Manage from './views/Manage.vue'
import NewTherapy from './views/NewTherapy.vue'
import EditTherapy from './views/EditTherapy.vue'
import ShowTherapy from './views/ShowTherapy.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

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
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/new',
      name: 'newTherapy',
      component: NewTherapy
    },
    {
      path: '/edit/:therapy_id',
      name: 'editTherapy',
      component: EditTherapy
    },
    {
      path: '/management',
      name: 'manage',
      component: Manage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:therapy_id',
      name: 'showTherapy',
      component: ShowTherapy
    },
  ]
})
