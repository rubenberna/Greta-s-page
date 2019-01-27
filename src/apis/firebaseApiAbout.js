import db from '../../db/firebaseInit'

export default {
   fetchAbout() {
    return db.aboutCollection.doc('vdpiRzj7nJHK9PNbF06S').get()
    .then(doc => doc.data())
  },
   editAbout(about, imageURL) {
     const aboutRef = db.aboutCollection.doc('vdpiRzj7nJHK9PNbF06S')

     if(imageURL) {
       aboutRef.update({
         image: imageURL
       })
     }

     aboutRef.update({
       text: about.text
     })
   }
}
