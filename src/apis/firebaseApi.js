import db from '../../db/firebaseInit'
import firebase from 'firebase'

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
          'imageture': doc.data().picture_url,
          'availability': doc.data().availability,
          'picture': doc.data().picture,
          'price': doc.data().price,
          'therapist': doc.data().therapist,
        }
        result.push(data)
      })
    })
    return result;
  },
  createTherapy(doc) {
    console.log(doc);
    db.collection('therapies').add({
      name: doc.name,
      teaser: doc.teaser,
      description: doc.description,
      method: doc.method,
      indications: doc.indications,
      availability: doc.availability,
      price: doc.price,
      therapist: doc.therapist
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
      function (snapshot) {
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
      }, function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
        });
      });
  }
}
