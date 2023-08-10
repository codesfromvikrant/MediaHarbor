import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgyqGoHjERO3KjYlwVvHy8ntM8r1yao-8",
  authDomain: "mediaharbor-91716.firebaseapp.com",
  projectId: "mediaharbor-91716",
  storageBucket: "mediaharbor-91716.appspot.com",
  messagingSenderId: "313486613683",
  appId: "1:313486613683:web:bfc8ad65a383c91ea924c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication
const auth = getAuth(app);

export {
  auth,
}
