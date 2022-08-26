import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRvd3p8v7eYWr7rPV07D99i45IertdwVI",
  authDomain: "clone-cd83b.firebaseapp.com",
  projectId: "clone-cd83b",
  storageBucket: "clone-cd83b.appspot.com",
  messagingSenderId: "90782888742",
  appId: "1:90782888742:web:7ee91f5fa58f30dc1ec7e7",
  measurementId: "G-0D6Q64CCDR",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
