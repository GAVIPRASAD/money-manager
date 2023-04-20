import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm48DS5f1z1WgsKBpJjMPCzZ8M7kgUcVA",
  authDomain: "money-97f99.firebaseapp.com",
  projectId: "money-97f99",
  storageBucket: "money-97f99.appspot.com",
  messagingSenderId: "155799912831",
  appId: "1:155799912831:web:a04c8a9e8af2e285035a4a",
  measurementId: "G-XKQEC4SL1X"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export {fireDb, app};