// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { watches } from "./setWatches";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmWpsKqnyOWjDbWY9wKiCsKEbr7YMOKBs",
  authDomain: "luxor-watch-store.firebaseapp.com",
  projectId: "luxor-watch-store",
  storageBucket: "luxor-watch-store.firebasestorage.app",
  messagingSenderId: "305902520236",
  appId: "1:305902520236:web:29df12432911e5a7275c09",
  measurementId: "G-GH0X1V8KYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadWatchData() {
    for (const watch of watches) {
        await addDoc(collection(db, "watches"), watch);
        console.log(`Added watch: ${watch.name}`);
    }
}

uploadWatchData()

export default { app, db, uploadWatchData };