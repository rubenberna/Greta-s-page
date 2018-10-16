import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: loadView('SignUp'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
      props: true,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/newtherapy',
      name: 'newTherapy',
      component: loadView('NewTherapy'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:therapy_id',
      name: 'editTherapy',
      component: loadView('EditTherapy'),
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/newevent',
      name: 'newEvent',
      component: loadView('NewEvent'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit/:event_id',
      name: 'editEvent',
      component: loadView('EditEvent'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/management',
      name: 'manage',
      component: loadView('Manage'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    },
    {
      path: '/therapy/:name',
      name: 'showTherapy',
      component: loadView('ShowTherapy')
    },
    {
      path: '*',
      name: 'NotFound',
      component: loadView('NotFound')
    }
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
