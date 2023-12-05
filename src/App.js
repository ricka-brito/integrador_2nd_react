import React from 'react';
import BurguerMenu from './components/Buguer_Menu';
import './assets/fonts.css';
import './assets/default.css';
import Header from './layout/Header'
import Body from './layout/BodyAll';
import Footer from './layout/Footer'
import Home from "./pages/home";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Signup/>
      {/* <Home */}
    </div>
  );
}

export default App;
