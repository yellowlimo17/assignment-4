import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCHmJRnJlEaf_dTWN2ltiDFrDPyGoK_Hrs",
    authDomain: "firstfirebase-4097f.firebaseapp.com",
    databaseURL: "https://firstfirebase-4097f.firebaseio.com",
    projectId: "firstfirebase-4097f",
    storageBucket: "firstfirebase-4097f.appspot.com",
    messagingSenderId: "89756648760",
    appId: "1:89756648760:web:17417a3cd9df87ab92adcd",
    measurementId: "G-SDMCQLT6TQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const AppDB = firebase.database();
export { AppDB }; // Make this name available to other modules