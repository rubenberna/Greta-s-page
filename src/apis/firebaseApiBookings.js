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
          'email': doc.data().email,
          'therapyId': doc.data().therapyId,
          'therapyName': doc.data().therapyName,
          'archived': doc.data().archived
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
      email: booking.email,
      clientName: booking.clientName,
      date: booking.date,
      phone: booking.phone,
      therapyId: booking.therapyId,
      therapyName: booking.therapyName,
      archived: false
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
    },
    archiveBooking(booking) {
      const eventRef = db.bookingsCollection.doc(booking.id)

      eventRef.update({
        archived: true
      })
    },
    restoreBooking(booking) {
      const eventRef = db.bookingsCollection.doc(booking.id)

      eventRef.update({
        archived: false
      })
    },
}
