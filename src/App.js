import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import SearchResult from './SearchResult.js'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'

const About = () => (<div><h1>Denna sidan hjälper dig att räkna ut din föreningens förtjänst på att installera solceller</h1><Link to='/'>Gå tillbaka</Link></div>)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="/result" component={SearchResult} />
            <Redirect to='/home' />
        </Switch>
      </Router>
    );
  }
}

export default App;
