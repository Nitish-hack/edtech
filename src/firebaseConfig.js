import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMHeAg_OngCIiIyHZWIKa_4f5OfOL-YdE",
  authDomain: "nexuslearn-v2.firebaseapp.com",
  projectId: "nexuslearn-v2",
  storageBucket: "nexuslearn-v2.appspot.com",
  messagingSenderId: "692852801378",
  appId: "1:692852801378:web:6055d6cff5da022652763b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB=getStorage(app);
const courseDB=getFirestore(app);

export {imgDB,courseDB};