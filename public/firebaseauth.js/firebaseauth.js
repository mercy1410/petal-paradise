// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth,createuserWithEmailAndPassword,signinwithEmailandPassword} from "firebase/app"
import{getFirestore,setDoc,doc} from "firebase/app"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBImBtto9xNkvs3MgpYzj9lbiee8JcMvg",
  authDomain: "petal-paradise-0123.firebaseapp.com",
  projectId: "petal-paradise-0123",
  storageBucket: "petal-paradise-0123.firebasestorage.app",
  messagingSenderId: "114726849904",
  appId: "1:114726849904:web:6fc10b33fa3ca9a9bd13b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);