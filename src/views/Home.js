/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import '../font/iconfont.css'
import {
    NavLink,
    Route
} from 'react-router-dom'

import '../public.css'
import '../font/iconfont.css'

import Find from './Find'
import Video from './Video'
import Identity from './Identity'
import Cloud from './Cloud'
import My from './My'


export default class Home extends React.Component {
    render(){
        return (
            <div className = "home-body">
                <nav className = "bottom-style">
                    <NavLink activeStyle = {{color:"red"}} exact to = {"/"}>
                        <span class="iconfont" className = "iconfont">&#xe62f;</span>
                        <p className = "bottom-style-size">发现</p>
                    </NavLink>
                    <NavLink activeStyle = {{color:"red"}} to = {"/video"}>
                        <span class="iconfont" className = "iconfont">&#xe62f;</span>
                        <p className = "bottom-style-size">视频</p>
                    </NavLink>
                    <NavLink activeStyle = {{color:"red"}} to = {"/my"}>
                        <span class="iconfont" className = "iconfont">&#xe62f;</span>
                        <p className = "bottom-style-size">我的</p>
                    </NavLink>
                    <NavLink activeStyle = {{color:"red"}} to = {"/cloud"}>
                        <span class="iconfont" className = "iconfont">&#xe62f;</span>
                        <p className = "bottom-style-size">云村</p>
                    </NavLink>
                    <NavLink activeStyle = {{color:"red"}} to = {"/identity"}>
                        <span class="iconfont" className = "iconfont">&#xe62f;</span>
                        <p className = "bottom-style-size">账号</p>
                    </NavLink>
                </nav>
                <Route exact path = {"/"} component = {Find}></Route>
                <Route path = {"/video"} component = {Video}></Route>
                <Route path = {"/my"} component = {My}></Route>
                <Route path = {"/cloud"} component = {Cloud}></Route>
                <Route path = {"/identity"} component = {Identity}></Route>
            </div>
        )
    }
}