import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS5Kulm9goE7cg3FULdXMe7sFQ0LJVyE4",
  authDomain: "react-apple-clone.firebaseapp.com",
  databaseURL: "https://react-apple-clone.firebaseio.com",
  projectId: "react-apple-clone",
  storageBucket: "react-apple-clone.appspot.com",
  messagingSenderId: "286912758474",
  appId: "1:286912758474:web:0e82d585ab417498cb2a33",
  measurementId: "G-CEF5HFQFC8",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
