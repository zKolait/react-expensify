import * as firebase from 'firebase'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Database
const database = firebase.database()


export { firebase, database as default }






// Exemples

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expense = []

//         snapshot.forEach((childSnapshot) => {
//             expense.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expense)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// database.ref('expenses').push({
//     description: "This is a description",
//     note: "This is a note",
//     amount: 155,
//     createdAt: 5151
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error.', e)
//     })

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data is removed')
// })
// .catch((e) => {
//     console.log('Error.', e)
// })

// database.ref().set({
//     name: 'Nicolas Chapeau',
//     age: 18,
//     location: {
//         city__code: 95125,
//     }
// }).then(() => {
//     console.log('data is saved.')
// }).catch((e) => {
//     console.log('Error', e)
// })

// database.ref().update({
//     name: 'Nicolas C.',
//     age: 19,
//     job: 'Yoloman'
// })

// database.ref('age').set(19)
// database.ref('location/city__code').set(95120)

// database.ref('attributes').set({
//     height: 1.8,
//     weight: 50,
// }).then(() => {
//     console.log('Data is updated.')
// }).catch((e) => {
//     console.log('Error', e)
// })