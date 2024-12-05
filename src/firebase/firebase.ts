import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCYskikricNuUpjOol0kLrJBZk8f4xJQbc',
  authDomain: 'kpm-to-do-app.firebaseapp.com',
  projectId: 'kpm-to-do-app',
  storageBucket: 'kpm-to-do-app.firebasestorage.app',
  messagingSenderId: '852388772705',
  appId: '1:852388772705:web:9aca044820f386e7e4a320',
  measurementId: 'G-1VWWM7M4N4',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider()

export { app, auth, googleAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut};
