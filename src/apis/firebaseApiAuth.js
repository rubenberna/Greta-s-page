import firebase from 'firebase'
import db from '../../db/firebaseInit'
import router from '../router'
import store from '../store';

export default {
  login(user) {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(
        user => {
          console.log(`You are logged in as ${user.user.email}`);
          router.push('/');
        },
        err => {
          store.dispatch('recordError', err.message)
        });
  },
  signUp(doc) {
     firebase
      .auth()
      .createUserWithEmailAndPassword(doc.email, doc.password)
      .then(
        user => {
          // set object in usersCollection with capitalised name

          let array = doc.name.split(' ')
          let capitalised = []

          for (let n in array) {
            let cap = array[n].replace(/^\w/, c => c.toUpperCase());
            capitalised.push(cap)
          }
          const fullName = capitalised.join(' ')

          db.usersCollection.doc(user.user.uid).set({
            name: fullName,
            email: doc.email,
            isAdmin: false
          }).then(() => {
            setTimeout(() => router.push('/'), 1500)
          }).catch(err => {
            store.dispatch('recordError', err.message)
          })
        },
        err => {
        store.dispatch('recordError', err.message)
    })
  },
  logout() {
    firebase
      .auth()
      .signOut()
  },
  resetPassword(email) {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        store.dispatch('recordSuccess', `Email sent to ${email}`);
      }).catch(error => {
        store.dispatch('recordError', error.message)
      })
  },
  loggedIn() {
    return firebase.auth().currentUser
  },
  getProfile(user) {
    db.usersCollection.doc(user.uid).get()
    .then((res) => {
      store.commit('setProfile', res.data())
    }).catch((err) => {
      store.dispatch('recordError', err.message)
    })
  },
  async fetchUsers() {
    const result = []
    await db.usersCollection.orderBy('name', 'asc').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'name': doc.data().name,
          'email': doc.data().email,
          'isAdmin': doc.data().isAdmin
        }
        result.push(data)
      })
    })
    return result
  }
}
