import db from '../../db/firebaseInit'

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
          'picture': doc.data().picture_url,
          'availability': doc.data().availability,
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
  }
}
