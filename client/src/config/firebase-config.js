import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyApwtpE4AQI66hkXsZ95lDX2Fi7TrCoj6Y",
    authDomain: "pratigya-nie.firebaseapp.com",
    projectId: "pratigya-nie",
    storageBucket: "pratigya-nie.appspot.com",
    messagingSenderId: "741505478600",
    appId: "1:741505478600:web:535e96a3cffb81a6ca5afd",
    measurementId: "G-SN0ED893X6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
