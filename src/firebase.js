// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsPbHHs4PsW83XMFd_LH18WKljije5yqk",
  authDomain: "clone-56324.firebaseapp.com",
  projectId: "clone-56324",
  storageBucket: "clone-56324.appspot.com",
  messagingSenderId: "1092729917901",
  appId: "1:1092729917901:web:4c4a408294370d2031b484",
  measurementId: "G-NCMYBKKMKJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
