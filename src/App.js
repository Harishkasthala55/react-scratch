import React from "react"
import './App.css';
import Header from './Components/Header';
import Routing from './Components/Router';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routing/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

