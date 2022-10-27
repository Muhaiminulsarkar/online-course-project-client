// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdABLJJgJFpIEiXGss1scg7oR5sP1BegU",
    authDomain: "course-network.firebaseapp.com",
    projectId: "course-network",
    storageBucket: "course-network.appspot.com",
    messagingSenderId: "819829472017",
    appId: "1:819829472017:web:326cba69c9042f036deab0",
    measurementId: "G-XX2TB0CH49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;