import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4mCiFpQmQXFMjyGK8AUSGTdr82e6QEKA",
  authDomain: "moneypal-a5d2a.firebaseapp.com",
  projectId: "moneypal-a5d2a",
  storageBucket: "moneypal-a5d2a.appspot.com",
  messagingSenderId: "124258707298", 
  appId: "1:124258707298:android:e1b34387eb4d8c50fe2e3b" 
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const FIREBASE_PROVIDER = new GoogleAuthProvider();

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage, browserLocalPersistence)
});
