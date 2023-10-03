import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase auth functions
import SignIn from "../pages/SignIn/SignInForm"; // Import your SignIn component
import SignUp from "../pages/SignIn/SignUp"; // Import your SignUp component

const auth = getAuth(); // Initialize Firebase auth

function Auth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="Auth">
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>You are not signed in.</p>
      )}
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
