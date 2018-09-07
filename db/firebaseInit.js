import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default firebaseApp.firestore()


// import firebase from 'firebase'
// import 'firebase/firestore'
// import firebaseConfig from './firebaseConfig'
//
// const firestore = firebase.firestore()
//
// const firebaseApp = firestore.initializeApp(firebaseConfig)
//
// export default firebaseApp
//
//
// /////
// import firebase from 'firebase'
// import 'firebase/firestore'
// import firebaseConfig from './firebaseConfig'
//
// const firebaseApp = firebase.initializeApp(firebaseConfig)
//
// export default firebaseApp.firestore()
