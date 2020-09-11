import * as firebase from 'firebase';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBXqVOztI5N2sDNNCwjoOfOqydaf5qLv9A",
    authDomain: "konecta-98.firebaseapp.com",
    databaseURL: "https://konecta-98.firebaseio.com",
    projectId: "konecta-98",
    storageBucket: "konecta-98.appspot.com",
    messagingSenderId: "565262456697",
    appId: "1:565262456697:web:581fdd0cc3bf614c2b41a8"
  };

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
