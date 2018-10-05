import firebase from 'firebase'
import db from '../../db/firebaseInit'

let imageURL = ''

export default {
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
          'image': doc.data().image,
        }
        result.push(data)
      })
    })
    return result.sort(this.compare);
  },
  // sort by date
  compare(a, b) {
    const dateA = a.date
    const dateB = b.date

    let comparison = 0;
    if (dateA > dateB) {
      comparison = 1;
    } else if (dateA < dateB) {
      comparison = -1;
    }
    return comparison
  },
  createEvent(newEvent) {
   db.eventsCollection.add({
     name: newEvent.name,
     description: newEvent.description,
     date: newEvent.date,
     address: newEvent.address,
     image: imageURL
   })
     .then(ref => {
       console.log('Added document with ID: ', ref.id);
     })
 },
 uploadImage(image) {
   const storageRef = firebase.storage().ref()
   const imageRef = storageRef.child(`events/${image.name}`)

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
}
