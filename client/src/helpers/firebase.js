// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: "AIzaSyBAtWk-iTpPt12sRN2z4nQ52Mix6R2HByk",
  authDomain: "ballet-42240.firebaseapp.com",
  projectId: "ballet-42240",
  storageBucket: "ballet-42240.appspot.com",
  messagingSenderId: "283427766312",
  appId: "1:283427766312:web:92902bd1eafd10959ef51d",
  measurementId: "G-PQS984G6VD",
};

let app;
let analytics;
let auth;
let provider;

if (typeof window !== "undefined") {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
}

export { app, analytics, auth, provider };
