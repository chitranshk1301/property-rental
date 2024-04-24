import firebase from 'firebase/app';
import 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  // Replace with your Firebase project configuration
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const auth = firebase.auth();

export default firebase;