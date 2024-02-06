import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    appId: ""
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// Helper functions to avoid exposing the auth object

export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
    return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (use: User | null) => void) {
    return onAuthStateChanged(auth, callback)
}