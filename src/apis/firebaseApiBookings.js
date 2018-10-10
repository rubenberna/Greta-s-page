import firebase from 'firebase'
import db from '../../db/firebaseInit'

export default {
  async fetchBookings() {
    const result = []
    await db.bookingsCollection.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = {
          'id': doc.id,
          'createdOn': doc.data().createdOn,
          'userID': doc.data().userID,
          'clientName': doc.data().clientName,
          'date': doc.data().date,
          'phone': doc.data().phone,
          'therapyId': doc.data().therapyId,
          'therapyName': doc.data().therapyName,
        }
        result.push(data)
      })
    })
    return result
  },
  async createBooking(booking) {
    let bookingId = null

    await db.bookingsCollection.add({
      createdOn: booking.createdOn,
      userId: booking.userId,
      clientName: booking.clientName,
      date: booking.date,
      phone: booking.phone,
      therapyId: booking.therapyId,
      therapyName: booking.therapyName,
     })
      .then(ref => {
        console.log('Added document with ID: ', ref.id);
        bookingId = ref.id
       })
       return bookingId;
    }
}