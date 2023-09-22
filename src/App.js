import React from 'react';
import BurguerMenu from './components/Buguer_Menu';
import './assets/fonts.css';
import './assets/default.css';
import Header from './layout/Header'
import Body from './layout/BodyAll';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
