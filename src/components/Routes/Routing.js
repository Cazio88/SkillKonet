// Routing.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage'; // Correct path
import SignInForm from '../../pages/SignInForm'; // Correct path
import Admin from "../../pages/Admin"

function Routing() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
  );
}

export default Routing;
