import firebase from "firebase"
import { initializeApp } from 'firebase/app';

// import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDJ1Ozn5VsYIC-F1vNgIrIIa6LpXHK-b9w",
    authDomain: "clone-d08f3.firebaseapp.com",
    projectId: "clone-d08f3",
    storageBucket: "clone-d08f3.appspot.com",
    messagingSenderId: "1076666392176",
    appId: "1:1076666392176:web:11a05798debc1ee2135eb5"
};
const app = initializeApp(firebaseConfig);
const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth };