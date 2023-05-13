// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5z9M7jM4gGRt9i-naseuvD15gO6HqGmc",
  authDomain: "hello-tech-as21.firebaseapp.com",
  projectId: "hello-tech-as21",
  storageBucket: "hello-tech-as21.appspot.com",
  messagingSenderId: "575532486499",
  appId: "1:575532486499:web:90980d4cca931f548ecd56",
  measurementId: "G-2HY5ZG3Q9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;