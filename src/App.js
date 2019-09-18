import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './views/Home'
import Login from './views/Login'
import Detail from './views/Detail'
//id为歌曲id

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = {"/login"} component = {Login}></Route>
          <Route path = {"/detail/:id"} component = {Detail}></Route>
          <Route path = {"/"} component = {Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
