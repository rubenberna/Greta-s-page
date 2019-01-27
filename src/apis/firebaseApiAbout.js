import db from '../../db/firebaseInit'

export default {
  async fetchAbout() {
    const result = []
    await db.aboutCollection.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'text': doc.data().text,
          'address': doc.data().address,
          'image': doc.data().image,
        }
        result.push(data)
      })
    })
    return result
  },
   editEvent(updatedEvent, imageURL) {
     const eventRef = db.eventsCollection.doc(updatedEvent.id)

     eventRef.update({
       name: updatedEvent.name,
       description: updatedEvent.description,
       date: updatedEvent.date,
       address: updatedEvent.address,
       image: imageURL,
     })
   }
}
