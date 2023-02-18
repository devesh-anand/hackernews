import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function Authform() {
  let creds = {
    apiKey: "AIzaSyBJ2LWvLlx_YSRuuwDGERyGwKRe5KVlPV8",
    authDomain: "hackernews-b586a.firebaseapp.com",
    projectId: "hackernews-b586a",
    storageBucket: "hackernews-b586a.appspot.com",
    messagingSenderId: "483942638125",
    appId: "1:483942638125:web:2d961f165e983d2cc9cea4",
    measurementId: "G-VZ7YC5Q4FW",
  };
  firebase.initializeApp(creds);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        console.log("successful login", userCredential);
      })
      .catch((error) => {
        // Handle login error
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Log in</button>
    </form>
  );
}
