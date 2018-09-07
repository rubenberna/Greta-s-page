import db from '../../db/firebaseInit'

export default {
  fetchTherapies() {
    const result = []
    db.collection("therapies").get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'therapy_id': doc.data().therapy_id,
          'name': doc.data().name,
          'teaser': doc.data().teaser,
          'description': doc.data().description,
          'method': doc.data().method,
          'indications': doc.data().indications,
          'picture': doc.data().picture_url,
          'availability': doc.data().availability,
          'price': doc.data().price,
          'therapist_id': doc.data().therapist_id,
        }
        result.push(data)
      })
    })
    return result;
  },

}



//
// return db.collection("therapies").get()



// return result
