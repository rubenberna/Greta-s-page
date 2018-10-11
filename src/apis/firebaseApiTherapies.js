import firebase from 'firebase'
import db from '../../db/firebaseInit'

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
      description: therapy.description,
      method: therapy.method,
      indications: therapy.indications,
      availability: therapy.availability,
      price: therapy.price,
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
  deleteTherapy(therapyId) {
    if(confirm('Are you sure?')) {
      db.therapiesCollection.doc(therapyId).delete()
      .then(() => {
        console.log(therapyId + 'was deleted');
      })
      .catch(err => {
        console.log("Error removing document: ", err);
      })
    }
  },
  editTherapy(therapy) {
    const therapyRef = db.therapiesCollection.doc(therapy.id)

    therapyRef.update({
      name: therapy.name,
      description: therapy.description,
      method: therapy.method,
      indications: therapy.indications,
      availability: therapy.availability,
      price: therapy.price,
      image: therapy.image
    })
  }
}
