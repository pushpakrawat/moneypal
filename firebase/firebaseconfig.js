import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBB2xMPUPQk3cD6d2D-6_no9jx_4pnCiLQ",
  authDomain: "moneypal-20b2a.firebaseapp.com",
  projectId: "moneypal-20b2a",
  storageBucket: "moneypal-20b2a.appspot.com",
  messagingSenderId: "87159361615",
  appId: "1:87159361615:web:235b0c4301a8e850315a3a"
};


// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const FIREBASE_PROVIDER = new GoogleAuthProvider();

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage, browserLocalPersistence)
});
