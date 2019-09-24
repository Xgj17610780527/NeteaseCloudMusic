import React from 'react';
import './App.css';
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './views/Home'
import Login from './views/Login'
import Detail from './views/Detail'
import PhoneLogin from './views/PhoneLogin'
import MusicPlay from './views/MusicPlay'
import Resign from './views/Resign'
//id为歌曲id

function App() {
  return (
      <Router>
            <Switch>
                <Route path = {"/login"} component = {Login}></Route>
                <Route path = {"/phonelogin"} component = {PhoneLogin}></Route>
                <Route path = {"/musicplay/:id"} component = {MusicPlay}></Route>
                <Route path = {"/detail/:id"} component = {Detail}></Route>
                <Route path = {"/resign"} component = {Resign}></Route>
                <Route path = {"/"} component = {Home}></Route>
            </Switch>
      </Router>
  );
}

export default App;
