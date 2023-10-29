import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { firebaseAuth, googleAuthProvider } from './config';

export function logInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
}
export function signUpWithEmail(email: string, password: string) {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
}

export function signInWithGoogle() {
  return signInWithPopup(firebaseAuth, googleAuthProvider);
}

export function logOut() {
  firebaseAuth.signOut();
}
