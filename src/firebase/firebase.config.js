import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0akxWKqcbkP6j7yzaJn-l1jf-ndXYLXw",
  authDomain: "hoteln26-6da1a.firebaseapp.com",
  projectId: "hoteln26-6da1a",
  storageBucket: "hoteln26-6da1a.appspot.com",
  messagingSenderId: "198731603991",
  appId: "1:198731603991:web:029a9492d827d9c9283c52",
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = getStorage(app);
const auth = getAuth();

export { db, firebase, auth, storage };
