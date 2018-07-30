import React, { Component } from 'react';
import Search from './Search.js';
import logo from './sol_bild.jpg';

class Home extends Component {
    render() {
    return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Solceller</h1>
    </header>
    <p className="App-intro">
        Välkommen till SolSidan!
    </p>
        <Search />
    </div>
    );  
}
}
export default Home;