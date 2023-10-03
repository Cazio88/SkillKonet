import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from "./firebase/Auth"
import NavBar from "./components/Layout/Navbar/NavBar"
import Routing from "./components/Routes/Routing" 
import Footer from "./components/Layout/Footer/Footer"



function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />
        <Routing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
