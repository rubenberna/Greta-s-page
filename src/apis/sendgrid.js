import db from '../../db/firebaseInit'

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.VUE_APP_SENDGRID_KEY)

export default {
  emailAppointment(appointmentId) {

  return db.bookingsCollection.doc(appointmentId)
              .get()
              .then(doc => {
                const booking = doc.data()

                const msg = {
                  to: 'rubenmbernardes@gmail.com',
                  from: 'greta-lowel@vuefirebase.com',
                  subject: 'New appointment',
                  //custom template in SendGrid
                  template: 'd-65db61b950bd4a12b3d6587cb92499a1',
                  substitutionWrappers: ['{{', '}}'],
                  substitutions: {
                    therapy: booking.therapyName,
                    name: booking.clientName,
                    phone: booking.phone,
                    date: booking.date
                  }
                };
                return sgMail.send(msg)
              })
              .then(() => console.log('Email sent!'))
              .catch(err => console.log(err))

  }
}
