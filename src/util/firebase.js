import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAmCB1_iNagp11zBPzaouZTMKnh0jjLvzY",
    authDomain: "hodierno-app.firebaseapp.com",
    databaseURL: "https://hodierno-app.firebaseio.com",
    projectId: "hodierno-app",
    storageBucket: "hodierno-app.appspot.com",
    messagingSenderId: "863478400706",
    appId: "1:863478400706:web:89e5c7a2f51e5bff"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
