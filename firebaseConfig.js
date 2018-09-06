import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCAt6lTrrjUIEyhIUXxsu4ecg90TaMTWhw",
    authDomain: "greta-f481d.firebaseapp.com",
    databaseURL: "https://greta-f481d.firebaseio.com",
    projectId: "greta-f481d",
    storageBucket: "greta-f481d.appspot.com",
    messagingSenderId: "867700034017"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const therapyCollection = db.collection('therapy')
const therapistCollection = db.collection('therapist')
const clientCollection = db.collection('client')

export {
    db,
    auth,
    currentUser,
    therapyCollection,
    therapistCollection,
    clientCollection
}
