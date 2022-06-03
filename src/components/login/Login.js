import React from "react";
import "../App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export default function Login(props) {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.authentication.signInWithPopup(provider);
  }

  return (
    <div className="login">
      <h1>Breen Chat</h1>
      <button onClick={signInWithGoogle}>Login with Google</button>
    </div>
  );
}
