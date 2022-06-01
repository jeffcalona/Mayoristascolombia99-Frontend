import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCWfMDThlu66RS7_hfkXlpLRmnviexJ_mY",
    authDomain: "webbodega-1e010.firebaseapp.com",
    projectId: "webbodega-1e010",
    storageBucket: "webbodega-1e010.appspot.com",
    messagingSenderId: "112421471818",
    appId: "1:112421471818:web:766a9ae501c60e2410c8b3",
    measurementId: "G-77T7YZPFPE"
  };

  firebase.initializeApp(firebaseConfig)