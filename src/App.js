import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = {"/"} component = {Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
