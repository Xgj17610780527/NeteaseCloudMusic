import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Find from './Components/Find'
import Video from './Components/Video'
import Identify from './Components/Identify'
import Cloud from './Components/Cloud'
import My from './Components/My'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = {"/find"} component = {Find}></Route>
          <Route path = {"/Video"} component = {Video}></Route>
          <Route path = {"/Identify"} component = {Identify}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
