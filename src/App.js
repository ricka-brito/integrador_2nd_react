import React from 'react';
import BurguerMenu from './components/Buguer_Menu';
import './assets/fonts.css';
import './assets/default.css';
import Header from './layout/Header'
import Body from './layout/BodyAll';
import Footer from './layout/Footer'
import Home from "./pages/home";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from './util/Context'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Home */}
      </Routes>
    </BrowserRouter>
   </AppContext>
  );
}

export default App;
