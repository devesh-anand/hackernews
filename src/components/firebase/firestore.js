import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ2LWvLlx_YSRuuwDGERyGwKRe5KVlPV8",
  authDomain: "hackernews-b586a.firebaseapp.com",
  projectId: "hackernews-b586a",
  storageBucket: "hackernews-b586a.appspot.com",
  messagingSenderId: "483942638125",
  appId: "1:483942638125:web:2d961f165e983d2cc9cea4",
  measurementId: "G-VZ7YC5Q4FW",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
