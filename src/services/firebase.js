import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdS9-_6MPcfz2PhHdTadahIapyp63b-44",
  authDomain: "consciouscart-64f58.firebaseapp.com",
  projectId: "consciouscart-64f58",
  storageBucket: "consciouscart-64f58.firebasestorage.app",
  messagingSenderId: "784508437898",
  appId: "1:784508437898:web:dac424ea0a4d7174753473"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();