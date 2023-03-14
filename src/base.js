import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJyw_vKwIqExIJOco2rRUUxQLUVbUdYh0",
  authDomain: "catch-of-the-day-ivanj.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ivanj-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "catch-of-the-day-ivanj",
  // storageBucket: "catch-of-the-day-ivanj.appspot.com",
  // messagingSenderId: "302300661205",
  // appId: "1:302300661205:web:4c963579bb7400389fe95c",
  // measurementId: "G-5CTVXV121V"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;