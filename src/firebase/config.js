import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAodhiVdPqmF3KWStUMgTn2VlJOhk8fFpc",
  authDomain: "tushargram-33038.firebaseapp.com",
  projectId: "tushargram-33038",
  storageBucket: "tushargram-33038.appspot.com",
  messagingSenderId: "631633621814",
  appId: "1:631633621814:web:c535c4a45a3dc67e7cf997",
  measurementId: "G-J1V3K2G3XY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
