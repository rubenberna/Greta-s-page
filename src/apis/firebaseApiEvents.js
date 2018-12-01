import db from '../../db/firebaseInit'

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
    createEvent(newEvent, imageURL) {
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
   deleteEvent(eventId) {
     if(confirm('Are you sure?')) {
       db.eventsCollection.doc(eventId).delete()
       .then(() => {
         console.log(eventId + 'was deleted');
       })
       .catch(err => {
         console.log("Error removing document: ", err);
       })
     }
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
