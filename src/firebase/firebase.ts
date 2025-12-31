// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBY80TRbpyWnuqiY7Uz6A1jIE6M9BcmlLM",
  authDomain: "waleedstagram.firebaseapp.com",
  projectId: "waleedstagram",
  storageBucket: "waleedstagram.firebasestorage.app",
  messagingSenderId: "131176721580",
  appId: "1:131176721580:web:694ecffd111655345f8309",
  measurementId: "G-L4ECMXYRMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);