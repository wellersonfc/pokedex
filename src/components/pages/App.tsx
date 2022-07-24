import React from 'react';
import Card from '../Card';
import "./style.scss";
import logo from  "./Pokédex_3D_logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="title-img"></img>
        <div className='slider'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
