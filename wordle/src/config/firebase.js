// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDakAOatrAaaJT_oiAwOIMSupERKK6uQSI",
  authDomain: "wordle-9c1b9.firebaseapp.com",
  projectId: "wordle-9c1b9",
  storageBucket: "wordle-9c1b9.appspot.com",
  messagingSenderId: "884815773751",
  appId: "1:884815773751:web:78e7d1c9729565ccccffb2",
  measurementId: "G-1TC7VLJ6N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);