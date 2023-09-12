import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "./components/Routes/Routing" // Change this line



function App() {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>
  );
}

export default App;
