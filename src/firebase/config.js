import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhbykKOODqZknlb_EZPKAyHiOOkBvIcgE",
  authDomain: "vue-my-playlists.firebaseapp.com",
  projectId: "vue-my-playlists",
  storageBucket: "vue-my-playlists.appspot.com",
  messagingSenderId: "640121774370",
  appId: "1:640121774370:web:d0ef9d79c3358422b5057b",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
