import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAjn5_b7gNngKa4quFjT-DOffnwPywmvnc",
  authDomain: "facebook-messenger-clone-76343.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-76343.firebaseio.com",
  projectId: "facebook-messenger-clone-76343",
  storageBucket: "facebook-messenger-clone-76343.appspot.com",
  messagingSenderId: "236208285772",
  appId: "1:236208285772:web:3868a2d20867147afbece9",
  measurementId: "G-M7CDR05GGF"
});

const db = firebaseApp.firestore();

export default db;