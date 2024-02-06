import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZbW5KNuhspem1dB51-MRZoKDQD9xz1Gk",
  authDomain: "yt-backend-a1d04.firebaseapp.com",
  projectId: "yt-backend-a1d04",
  appId: "1:113091128844:web:f489ed446655a1fb6a8829"
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