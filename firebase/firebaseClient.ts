import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBjj3K9MIJdJxenl506yLaQZ4HFWiMCJb0",
  authDomain: "totality-assignment-4d02d.firebaseapp.com",
  projectId: "totality-assignment-4d02d",
  storageBucket: "totality-assignment-4d02d.appspot.com",
  messagingSenderId: "845291559453",
  appId: "1:845291559453:web:874fb6a2c5f4c697c784f4",
  measurementId: "G-2WMYXKDC28"
};

// ----------------  Below is with environmental variables  ------------------------------

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);