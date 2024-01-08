// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsXm3dYxnds5GfHpMxMyAk_K8qZEyoMDs",
  authDomain: "ecommerce-app-3e89a.firebaseapp.com",
  projectId: "ecommerce-app-3e89a",
  storageBucket: "ecommerce-app-3e89a.appspot.com",
  messagingSenderId: "281980149528",
  appId: "1:281980149528:web:61d9efd63da06eedddc86d",
  measurementId: "G-BQDRRYD4WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);