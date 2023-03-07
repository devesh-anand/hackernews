import React, { useState } from "react";
import "firebase/compat/auth";
import firebaseInit from "./../firebase/firestore";

const Signupform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
    <form onSubmit={handleSubmit} style={{ padding: "0 0 32px 0" }}>
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
