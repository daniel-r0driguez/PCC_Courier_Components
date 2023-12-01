import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuX43L6eEMyFdnFwXdsWnWyf1qfyLy8Ws",
  authDomain: "courier-signin.firebaseapp.com",
  projectId: "courier-signin",
  storageBucket: "courier-signin.appspot.com",
  messagingSenderId: "28380440402",
  appId: "1:28380440402:web:7d0c7df915f411c19efc8b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// IOS : 565230808554-an0tsddpuhjqhsa565c9a6e2a6u1rvot.apps.googleusercontent.com
// Android : 565230808554-48g7stpt35ee6jl8blfvue359modc1c4.apps.googleusercontent.com