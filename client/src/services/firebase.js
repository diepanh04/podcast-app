import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArpmXFNvAr6A7EeIVEZQTzFrpwDzAEtfI",
  authDomain: "podcasity-28ec0.firebaseapp.com",
  projectId: "podcasity-28ec0",
  storageBucket: "podcasity-28ec0.appspot.com",
  messagingSenderId: "678285656054",
  appId: "1:678285656054:web:d4bb6b88879a0af51c11d7",
  measurementId: "G-RVHFCYRLYB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
  auth
};
