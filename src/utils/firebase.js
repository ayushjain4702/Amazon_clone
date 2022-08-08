import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfySfIy4sMMf5hrcqL75iXHwszwmoOaUo",
    authDomain: "clone-909f7.firebaseapp.com",
    projectId: "clone-909f7",
    storageBucket: "clone-909f7.appspot.com",
    messagingSenderId: "539885345297",
    appId: "1:539885345297:web:b9372405b9b67a08f4afb0",
    measurementId: "G-3FG3YZN3TD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
  
