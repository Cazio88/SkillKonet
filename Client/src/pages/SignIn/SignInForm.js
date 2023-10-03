import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <>
      <div className="SignIn">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="enter your email password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSignIn}>
            Login
          </button>
          <span>Wrong email or password!</span>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
