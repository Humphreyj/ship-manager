//src/firebase.js

import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB1e0tgJRp8vAjXps3_qGA_8O5QV-WO50A",
    authDomain: "pirates-c17bc.firebaseapp.com",
    databaseURL: "https://pirates-c17bc.firebaseio.com",
    projectId: "pirates-c17bc",
    storageBucket: "pirates-c17bc.appspot.com",
    messagingSenderId: "485505090417"
  };
  firebase.initializeApp(config);

  export default firebase