import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'

firebase.initializeApp({
  apiKey: "AIzaSyBT2gj8fdE-6w6qURexzIZiQI_7tVlSwY4",
  authDomain: "getpet-785f5.firebaseapp.com",
  projectId: "getpet-785f5",
  storageBucket: "getpet-785f5.appspot.com",
  messagingSenderId: "561388360295",
  appId: "1:561388360295:web:b7d05269af01c350b5fac2",
  measurementId: "G-7B6X2V45N6"
});
const storage = firebase.storage()

export {storage}
