import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBmCBAm3VHiDVW5fyTXzuGcFsHXE3lPxNA",
    authDomain: "facebook-clone-337de.firebaseapp.com",
    databaseURL: "https://facebook-clone-337de.firebaseio.com",
    projectId: "facebook-clone-337de",
    storageBucket: "facebook-clone-337de.appspot.com",
    messagingSenderId: "869007581612",
    appId: "1:869007581612:web:bd0315fca82149a2a5da09",
    measurementId: "G-CNV0VGYJVM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;