// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQGl7Ua5FC_Yd8vr2P_BUdkFcwu6SbqNM",
  authDomain: "recycle-app-e24b7.firebaseapp.com",
  databaseURL: "https://recycle-app-e24b7-default-rtdb.firebaseio.com",
  projectId: "recycle-app-e24b7",
  storageBucket: "recycle-app-e24b7.appspot.com",
  messagingSenderId: "207810096390",
  appId: "1:207810096390:web:b5f9b54d5cd81fd5fbc287",
  measurementId: "G-VX16RND0C2"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );