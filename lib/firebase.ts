// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEzZFmFlHu1-C9ACI1UG02JXELqR1OgwY",
  authDomain: "estateease-341e7.firebaseapp.com",
  projectId: "estateease-341e7",
  storageBucket: "estateease-341e7.firebasestorage.app",
  messagingSenderId: "500643906911",
  appId: "1:500643906911:web:966802d8e9fb2acbfe22ea"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();