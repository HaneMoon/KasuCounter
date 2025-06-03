// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE88xrPkJX75ZaXRAo8HhGRsb3DPoMrUA",
  authDomain: "kasucounter2.firebaseapp.com",
  projectId: "kasucounter2",
  storageBucket: "kasucounter2.firebasestorage.app",
  messagingSenderId: "636573088395",
  appId: "1:636573088395:web:2a3c72fcfca8413846f28e"
};

// Initialize Firebase]
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };


