import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC2nFJyjTuoqRog4jp2z-PgGI3KVRv8Wrc",
    authDomain: "fb-test-bc111.firebaseapp.com",
    databaseURL: "https://fb-test-bc111.firebaseio.com",
    projectId: "fb-test-bc111",
    storageBucket: "fb-test-bc111.appspot.com",
    messagingSenderId: "924289714275",
    appId: "1:924289714275:web:1895ad507be193225c1056",
    measurementId: "G-8J0J5GSJ4F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;