import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/homepage/HomePage'; 
import SignUp from "../../pages/SignIn/SignUp"
import SignInForm from '../../pages/SignIn/SignInForm'; 
import Contact from "../../pages/Contact/Contact"
import InternshipPositionList from "../../pages/InternshipList/InternshipPositionList"
import Admin from "../../pages/Admin/Admin"

function Routing() {


  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/InternshipPositionList" element ={<InternshipPositionList />} />
      </Routes>
    </div>
  );
}

export default Routing;
