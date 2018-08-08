import React, { Component } from 'react';
import Search from './Search.js';
import logo from './sol_bild.jpg';

class Home extends Component {
    render() {
    return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Solify</h1>
    </header>
    <p className="App-intro">
        Välkommen till Solify! </p>
    <p> 
        Här kan du i ett steg få fram din brf:s potential till och förtjänst på att installera solceller. 
    </p>
        <Search />
    </div>
    );  
}
}
export default Home;