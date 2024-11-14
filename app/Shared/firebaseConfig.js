// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClW3g_VPr6beB60bBe0d1UPGhLCmsLqJs",
  authDomain: "pinterest-clone-c4.firebaseapp.com",
  projectId: "pinterest-clone-c4",
  storageBucket: "pinterest-clone-c4.firebasestorage.app",
  messagingSenderId: "1032810132544",
  appId: "1:1032810132544:web:82481c9e1b5fac588fdba5",
  measurementId: "G-WE8CDBEQPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;