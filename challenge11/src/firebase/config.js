// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPjmnLI4UlTSmyx6Pbhw9-jvcOVIaboyM",
  authDomain: "challenge11-73cc3.firebaseapp.com",
  projectId: "challenge11-73cc3",
  storageBucket: "challenge11-73cc3.firebasestorage.app",
  messagingSenderId: "22542215175",
  appId: "1:22542215175:web:f0e53a2efec83e8bc662a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);