import React, { useState } from "react";
import "firebase/compat/auth";
import firebaseInit from "./../firebase/firestore";

const Signupform = ({ setModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInEmailPassword = (event) => {
    event.preventDefault();

    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        //login the user immediately
        firebaseInit
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((creds) => {
            // console.log(creds);
          })
          .catch((e) => {
            console.log(e);
          });

        //close modal
        setModal(false);
      })
      .catch((error) => {
        // Handle login error
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={signInEmailPassword} style={{ padding: "0 0 32px 0" }}>
      <h5>Sign up</h5>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signupform;
