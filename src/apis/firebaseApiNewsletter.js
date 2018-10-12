import db from '../../db/firebaseInit'

export default {
  async fetchNewsletter() {
    const result = []
    await db.newsletterCollection.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'email': doc.data().email
        }
        result.push(data)
      })
    })
    return result
  },
  register(newsletterData) {
   db.newsletterCollection.add({
     email: newsletterData.email
   })
     .then(ref => {
       console.log('Added document with ID: ', ref.id);
     })
   }
}
