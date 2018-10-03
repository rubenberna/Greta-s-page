import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Manage from './views/Manage.vue'
import NewTherapy from './views/NewTherapy.vue'
import EditTherapy from './views/EditTherapy.vue'
import ShowTherapy from './views/ShowTherapy.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

let router = new Router({
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
      component: SignUp,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new',
      name: 'newTherapy',
      component: NewTherapy,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:therapy_id',
      name: 'editTherapy',
      component: EditTherapy,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/management',
      name: 'manage',
      component: Manage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/therapy/:name',
      name: 'showTherapy',
      component: ShowTherapy
    },
  ]
})

// Nav guards

router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if(!firebase.auth().currentUser) {
      // Go to Login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged in
    if(firebase.auth().currentUser) {
      // Go to Home
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next();
    }
  }
  else {
    // Proceed to route
    next();
  }
});

export default router;
