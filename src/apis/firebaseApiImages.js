import firebase from 'firebase'
import store from '../store';

export default {
  async uploadImage(image, location) {
    const storageRef = firebase.storage().ref()
    const imageRef = storageRef.child(`${location}/${image.name}`)

    const metadata = {
      contentType: 'image/jpeg'
    };

    const uploadTask = imageRef.put(image, metadata);
    await uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
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
              store.commit('setImageURL', downloadURL)
            })
      })
  }
}
