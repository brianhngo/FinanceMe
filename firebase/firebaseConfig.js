import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8cJzaV6k0xiXOluh3kMmjNbQcTN6WhvU',
  authDomain: 'financeme-31ebe.firebaseapp.com',
  projectId: 'financeme-31ebe',
  storageBucket: 'financeme-31ebe.appspot.com',
  messagingSenderId: '98017063036',
  appId: '1:98017063036:web:56dcd3d28b67bc1fadd9f9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
