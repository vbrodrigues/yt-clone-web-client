import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User} from 'firebase/auth'
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDZbW5KNuhspem1dB51-MRZoKDQD9xz1Gk",
    authDomain: "yt-backend-a1d04.firebaseapp.com",
    projectId: "yt-backend-a1d04",
    appId: "1:113091128844:web:656c30c4e1c9b47a6a8829"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// This works only because we already initialized the Firebase app in the ./firebase.ts file
export const functions = getFunctions();


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