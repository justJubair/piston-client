// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi1Mj2DZGBMFwl__GvZH3vZmy1iX9dzCI",
  authDomain: "piston-client.firebaseapp.com",
  projectId: "piston-client",
  storageBucket: "piston-client.appspot.com",
  messagingSenderId: "707071212487",
  appId: "1:707071212487:web:3ba76145710fcded1137e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;