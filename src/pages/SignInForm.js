import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SingIn.css'; // Make sure to import the CSS file correctly

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here, you can implement your sign-in logic.
    // For simplicity, let's just log the form data for now.
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <Link to="/admin">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
