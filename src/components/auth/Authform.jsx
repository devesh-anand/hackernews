import { useState, useContext } from "react";
import "firebase/compat/auth";
import authContext from "./authContext";
import firebaseInit from "./../firebase/firestore";
import { FcGoogle } from "react-icons/fc";

export default function Authform() {
  const { auth, setAuth } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [wrongPw, setWrongPw] = useState({
    data: "",
    isWrong: false,
  });

  // for errors in login
  const handleLoginIssues = (text) => {
    setWrongPw({
      data: text,
      isWrong: true,
    });
  };

  //for email and password
  const handleSubmit = (event) => {
    event.preventDefault();

    firebaseInit
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        setAuth(true);
      })
      .catch((error) => {
        // Handle login error
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/wrong-password).") {
          handleLoginIssues("wrong password.");
        } else if (error.message == "Firebase: Error (auth/user-not-found).") {
          handleLoginIssues("user not found.");
        }
      });
  };

  //for google login
  const provider = new firebaseInit.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const googleLogin = () => {
    firebaseInit
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // IdP data available in result.additionalUserInfo.profile.
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "0 0 32px 0" }}>
      <div>
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
      </div>
      <div style={{ width: "100px", margin: "16px auto 0 auto" }}>
        <button onClick={googleLogin}>
          <FcGoogle /> Google
        </button>
      </div>
      {wrongPw ? <div style={{ color: "red" }}>{wrongPw.data}</div> : ""}
    </form>
  );
}
