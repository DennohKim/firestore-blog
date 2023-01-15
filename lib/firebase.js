import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCrasS0lo3Jh8kL06SLyTLFNMR_WIjmYEI",
    authDomain: "nextblog-fireship.firebaseapp.com",
    projectId: "nextblog-fireship",
    storageBucket: "nextblog-fireship.appspot.com",
    messagingSenderId: "1089895751308",
    appId: "1:1089895751308:web:7d3e6563a56d45050da5a9"
  };

  //Firebase app can only be initialized once. It will only initiliaze if app length is 0
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();