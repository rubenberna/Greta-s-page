import db from '../../db/firebaseInit'

export default {
  async fetchBookings() {
    const result = []
    await db.bookingsCollection.orderBy('date', 'asc').get()
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
        bookingId = ref.id
       })
       return bookingId;
    },
    async countBookings(therapyId) {
      let bookings = []

      await db.bookingsCollection.where('therapyId', '==', therapyId).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            bookings.push(doc.data())
          })
        })
        return bookings
    }
}
