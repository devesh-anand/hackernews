import { useState, useContext } from "react";
import "firebase/compat/auth";
import authContext from "./authContext";
import firebaseInit from "./../firebase/firestore";

export default function Authform() {
  const { auth, setAuth } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    firebaseInit
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        setAuth(true);
        console.log(auth);
        console.log("successful login", userCredential);
      })
      .catch((error) => {
        // Handle login error
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "0 0 32px 0" }}>
      <h5>Login</h5>
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
      <button type="submit">Log in</button>
    </form>
  );
}
