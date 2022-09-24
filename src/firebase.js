import { initializeApp } from "firebase/app";
import 'firebase/database';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC8xMUH6ct1WbwVwFO30rTPTq-GO-9aYGE",
    authDomain: "twitter-clone-5a750.firebaseapp.com",
    projectId: "twitter-clone-5a750",
    storageBucket: "twitter-clone-5a750.appspot.com",
    messagingSenderId: "158961700136",
    appId: "1:158961700136:web:856f69251c0f06d732d41d",
    measurementId: "G-13MBFFL3YT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;