import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getApps, initializeApp, FirebaseApp, getApp } from 'firebase/app';
import { initializeAuth, Auth, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import firebaseConfig from '../../firebase.json';

let firebaseApp: FirebaseApp;
let auth: Auth;

if (getApps().length < 1) {
  firebaseApp = initializeApp(firebaseConfig);
  auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebaseApp = getApp();
  auth = getAuth();
}
const firestore = getFirestore(firebaseApp);

export { auth, firestore };
