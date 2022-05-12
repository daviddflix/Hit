// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvTYlJEqE9Fq5FI39x9YwK0y0yUdI2NwU",
  authDomain: "hit-pasta.firebaseapp.com",
  projectId: "hit-pasta",
  storageBucket: "hit-pasta.appspot.com",
  messagingSenderId: "590242305823",
  appId: "1:590242305823:web:1699772c42ca63eb0d422a",
  measurementId: "G-L0BGM61S65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth()
export default app