// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfMRlwahrETOQQBZ3DWjh8jsqnhe3wRZo",
  authDomain: "the-news-dragon-1b56a.firebaseapp.com",
  projectId: "the-news-dragon-1b56a",
  storageBucket: "the-news-dragon-1b56a.appspot.com",
  messagingSenderId: "73266414122",
  appId: "1:73266414122:web:01c9a2e06d063d55e53953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;