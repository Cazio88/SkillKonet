import React, { useState } from "react";
import './SignIn.css';
import { auth } from "../../firebase/firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div className="SignIn">
        <form>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
       
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      </form>
    </div>
  
  );
}

export default SignUp;
