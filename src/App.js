import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import SavedMonsters from './components/SavedMonsters'
import KilledMonsters from './components/KilledMonsters'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route  path="/savedmonsters" component={SavedMonsters}/>
          <Route path="/killedmonsters" component={KilledMonsters}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
