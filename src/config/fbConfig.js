import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBemiwzYatNpX0kp3-Q8x5G_zaOP0hSHU4",
  authDomain: "minimal-lists.firebaseapp.com",
  databaseURL: "https://minimal-lists.firebaseio.com",
  projectId: "minimal-lists",
  storageBucket: "",
  messagingSenderId: "9145458632",
  appId: "1:9145458632:web:a88c2dd5020ee6e1c3aafd"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;