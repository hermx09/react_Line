import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAGq8FP4fiswgmv7Qy7eGhxOiiN7AhfVw",
  authDomain: "react-line-a1551.firebaseapp.com",
  projectId: "react-line-a1551",
  storageBucket: "react-line-a1551.appspot.com",
  messagingSenderId: "667666841713",
  appId: "1:667666841713:web:f12e10c02b76ebe23f9bd0"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{ db , auth };
