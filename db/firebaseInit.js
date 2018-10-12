import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

db.settings({
  timestampsInSnapshots: true
})

const usersCollection = db.collection('users')
const therapiesCollection = db.collection('therapies')
const bookingsCollection = db.collection('bookings')
const therapistsCollection = db.collection('therapists')
const eventsCollection = db.collection('events')
const newsletterCollection = db.collection('newsletter')

export default {
  db,
  auth,
  currentUser,
  usersCollection,
  therapiesCollection,
  bookingsCollection,
  therapistsCollection,
  eventsCollection,
  newsletterCollection
}
