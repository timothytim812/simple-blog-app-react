import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDbhS7g6ARJc4D5bVyuaNiMAdwS5Or6HYo",
  authDomain: "blog-data-d6d0b.firebaseapp.com",
  projectId: "blog-data-d6d0b",
  storageBucket: "blog-data-d6d0b.appspot.com",
  messagingSenderId: "306784615691",
  appId: "1:306784615691:web:fb607ac87051c273b0760e",
  measurementId: "G-WE5M449260"
};

const app = initializeApp(firebaseConfig);

// data

export const db = getFirestore(app);

