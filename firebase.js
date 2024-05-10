// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX5Tentg_co4mk5Cwzvogk3hla1pkK5MA",
  authDomain: "uzchess-309c0.firebaseapp.com",
  projectId: "uzchess-309c0",
  storageBucket: "uzchess-309c0.appspot.com",
  messagingSenderId: "525336634960",
  appId: "1:525336634960:web:fe782f5a856a1e15b9d355",
  measurementId: "G-LFW9XD1XS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);