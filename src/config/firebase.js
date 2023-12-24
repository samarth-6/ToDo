import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyARg9LDO2u6sIQoA7c8zNzsfBhuw3GwxrY",
    authDomain: "todo-171d0.firebaseapp.com",
    projectId: "todo-171d0",
    storageBucket: "todo-171d0.appspot.com",
    messagingSenderId: "387004056743",
    appId: "1:387004056743:web:ef8ad3a82f12ea73e68782"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };