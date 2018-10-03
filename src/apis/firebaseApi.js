import firebase from 'firebase'
import db from '../../db/firebaseInit'
import router from '../router'
import store from '../store';

let imageURL = ''

export default {
  async fetchTherapies() {
    const result = []
    await db.therapiesCollection.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'name': doc.data().name,
          'teaser': doc.data().teaser,
          'description': doc.data().description,
          'method': doc.data().method,
          'indications': doc.data().indications,
          'availability': doc.data().availability,
          'price': doc.data().price,
          'therapist': doc.data().therapist,
          'image': doc.data().image
        }
        result.push(data)
      })
    })
    return result;
  },
   createTherapy(therapy) {
    db.therapiesCollection.add({
      name: therapy.name,
      teaser: therapy.teaser,
      description: therapy.description,
      method: therapy.method,
      indications: therapy.indications,
      availability: therapy.availability,
      price: therapy.price,
      therapist: therapy.therapist,
      image: imageURL
    })
      .then(ref => {
        console.log('Added document with ID: ', ref.id);
      })
  },
  uploadImage(image) {
    const storageRef = firebase.storage().ref()
    const imageRef = storageRef.child(`therapies/${image.name}`)

    const metadata = {
      contentType: 'image/jpeg'
    };
    const uploadTask = imageRef.put(image, metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + '% done');
        switch (snapshot.case) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      }, error => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log("You're not authorized to write in the database");
              break;
            case 'storage/canceled':
              console.log('Upload cancelled by the user');
              break;
            case 'storage/unknown':
              console.log('Unknown error occurred, inspect error.serverResponse');
              break;
          }
       }, () => {
          uploadTask.snapshot.ref.getDownloadURL()
            .then(function(downloadURL) {
              console.log('File available at', downloadURL);
              imageURL = downloadURL
            })
      })
  },
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
  async fetchEvents() {
    const result = []
    await db.eventsCollection.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'name': doc.data().name,
          'address': doc.data().address,
          'description': doc.data().description,
          'date': doc.data().date,
        }
        result.push(data)
      })
    })
    return result;
  },
  createEvent(newEvent) {
   db.eventsCollection.add({
     name: newEvent.name,
     description: newEvent.description,
     date: newEvent.date,
     address: newEvent.address
   })
     .then(ref => {
       console.log('Added document with ID: ', ref.id);
     })
 },
}
