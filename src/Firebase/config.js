import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHJYK_vvvU8VX-4jD4pPZgCi1vZ3V2or8",
  authDomain: "react-photo-app-27829.firebaseapp.com",
  projectId: "react-photo-app-27829",
  storageBucket: "react-photo-app-27829.appspot.com",
  messagingSenderId: "393464269693",
  appId: "1:393464269693:web:021282ecb9525920d9da14",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
