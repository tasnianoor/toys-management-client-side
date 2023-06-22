// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoYTHjzw_qoQvu6-jJ_En49WnaAkvsX30",
  authDomain: "toys-management-client-side.firebaseapp.com",
  projectId: "toys-management-client-side",
  storageBucket: "toys-management-client-side.appspot.com",
  messagingSenderId: "885929993907",
  appId: "1:885929993907:web:f907d1273e3577b69c72c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);