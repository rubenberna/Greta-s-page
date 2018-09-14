import db from '../../db/firebaseInit'
import firebase from 'firebase'
import store from '../modules/therapies'

let imageURL = ''

export default {
  fetchTherapies() {
    const result = []
    db.collection('therapies').get()
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
    db.collection('therapies').add({
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
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
  }
}
