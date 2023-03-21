import React from 'react';
import "./style.scss";
import logo from  "./Pokédex_3D_logo.png";
import Navbar from '../components/Navebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="title-img"></img>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
