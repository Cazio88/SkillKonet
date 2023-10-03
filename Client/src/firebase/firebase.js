import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_maxBNTT3vg0E0wDQcJeEL5PY1fdr3cw",
  authDomain: "skillkonet-e194f.firebaseapp.com",
  projectId: "skillkonet-e194f",
  storageBucket: "skillkonet-e194f.appspot.com",
  messagingSenderId: "329606385947",
  appId: "1:329606385947:web:587be32bf2dd3a462e83be",
  measurementId: "G-ZNS7DJ56QP"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get the authentication service
const auth = getAuth(firebaseApp);

export { auth };