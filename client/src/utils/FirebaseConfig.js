import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9Iy8UZrWuTbvDGVee2SPRo4rOuIe-BIQ",
    authDomain: "watsapp-clone-22fa8.firebaseapp.com",
    projectId: "watsapp-clone-22fa8",
    storageBucket: "watsapp-clone-22fa8.appspot.com",
    messagingSenderId: "654564312680",
    appId: "1:654564312680:web:dc39329ae28132226c1ddd",
    measurementId: "G-NZ3VZDHKTJ"
  };

  const app = initializeApp(firebaseConfig);
  
  export const firebaseAuth = getAuth(app);