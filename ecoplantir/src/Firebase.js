import {useState, useEffect} from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8JTOwk9L5Yx-lazfaE3m9C47w-j3a07s",
  authDomain: "ecoplantir.firebaseapp.com",
  projectId: "ecoplantir",
  storageBucket: "ecoplantir.appspot.com",
  messagingSenderId: "403833949890",
  appId: "1:403833949890:web:be816faa6636094338755b",
  measurementId: "G-DLQXF8GK06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  console.log("here");
  return createUserWithEmailAndPassword(auth, email, password);
}
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
  return currentUser;
}
export function logout() {
  return signOut(auth);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}