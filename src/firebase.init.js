// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVAQX0JnIFd49ywFh7N2c06LXX8RGm8zA",
  authDomain: "bogura-central-mashjid.firebaseapp.com",
  projectId: "bogura-central-mashjid",
  storageBucket: "bogura-central-mashjid.appspot.com",
  messagingSenderId: "864039804624",
  appId: "1:864039804624:web:b24c2b3ee84ffa2b3348d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;