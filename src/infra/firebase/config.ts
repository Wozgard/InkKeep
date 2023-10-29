import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKER,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseInitialisedApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseInitialisedApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(firebaseInitialisedApp);
export const functions = getFunctions(firebaseInitialisedApp);
import.meta.env.DEV && connectFunctionsEmulator(functions, 'localhost', 5001);
