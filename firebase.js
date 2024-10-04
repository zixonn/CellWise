import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//For ID purposes (not sensitive)
const firebaseConfig = {
  apiKey: "AIzaSyAkxcfKOMx52-xxdSierKJxq8pmYiXu9WE",
  authDomain: "cellwise-f1afa.firebaseapp.com",
  projectId: "cellwise-f1afa",
  storageBucket: "cellwise-f1afa.appspot.com",
  messagingSenderId: "260690435387",
  appId: "1:260690435387:web:7f0592ec00c6c55a66ab1e",
  measurementId: "G-59NS7HFRMM"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app)

export {auth,db}