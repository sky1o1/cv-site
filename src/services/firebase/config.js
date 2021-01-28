 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyAEDBkcAXqM_uW7D2mW4OvBk4ewGNHIxWU",
    authDomain: "ev-tae.firebaseapp.com",
    projectId: "ev-tae",
    storageBucket: "ev-tae.appspot.com",
    messagingSenderId: "216126918760",
    appId: "1:216126918760:web:835b31797b543d2a41ebdd",
    measurementId: "G-L5194NZC4P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  const auth = firebase.auth()

  export {firebase, auth};