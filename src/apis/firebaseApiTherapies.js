import db from '../../db/firebaseInit'

export default {
  async fetchTherapies() {
    const result = []
    await db.therapiesCollection.orderBy('position', 'asc').get()
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
          'image': doc.data().image,
          'position': doc.data().position
        }
        result.push(data)
      })
    })
    return result
  },
   createTherapy(therapy, imageURL, position) {
    db.therapiesCollection.add({
      name: therapy.name,
      description: therapy.description,
      method: therapy.method,
      indications: therapy.indications,
      availability: therapy.availability,
      price: therapy.price,
      image: imageURL,
      position: position
    })
      .then(ref => {
        console.log('Added document with ID: ', ref.id);
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
  editTherapy(therapy, imageURL) {
    const therapyRef = db.therapiesCollection.doc(therapy.id)
    // if image changed during edit
    if(imageURL) {
      therapyRef.update({
        image: imageURL
      })
    }

    therapyRef.update({
      name: therapy.name,
      description: therapy.description,
      method: therapy.method,
      indications: therapy.indications,
      availability: therapy.availability,
      price: therapy.price
    })
  },
  sortUpTherapy(therapy) {
    const therapyRef = db.therapiesCollection.doc(therapy.id)
    // increase position
    const newPosition = therapy.position + 1
    therapyRef.update({
      position: newPosition
    })
  },
  sortDownTherapy(therapy) {
    const therapyRef = db.therapiesCollection.doc(therapy.id)
    // decrease position
    const newPosition = therapy.position - 1
    therapyRef.update({
      position: newPosition
    })
  }
}
