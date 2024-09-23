// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCs8BCIBCA9MpuuY4IXewFCv_7DYp3Uc",
  authDomain: "fir-first-c1c55.firebaseapp.com",
  projectId: "fir-first-c1c55",
  storageBucket: "fir-first-c1c55.appspot.com",
  messagingSenderId: "547296657352",
  appId: "1:547296657352:web:dec72f3f53cc14c8898afd",
  databaseURL:"https://fir-first-c1c55-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);