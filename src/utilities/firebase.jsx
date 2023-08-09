// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref as refST } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCeYFJ2S4T4JqnSVz0a3oeRqugaxmK1iyA",
  authDomain: "multipage-job-form.firebaseapp.com",
  databaseURL:
    "https://multipage-job-form-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "multipage-job-form",
  storageBucket: "multipage-job-form.appspot.com",
  messagingSenderId: "181151291461",
  appId: "1:181151291461:web:e4b76fbe07f29ab464ab2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database
export const db = getDatabase(app);
// Inicializar Authenticacion firebase
export const auth = getAuth(app);
// Inicializar Storage firebase
export const storage = getStorage(app);
export const refStorage = refST(storage);
