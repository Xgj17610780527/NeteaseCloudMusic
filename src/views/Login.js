/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import axios from 'axios'
export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            userInfo:{}
        }
    }
    async sendInfo(){
        const {data} = await axios.post("http://127.0.0.1/login/cellphone" , {
            phone:this.refs.phone.value,
            password:this.refs.password.value
        })
        this.setState({
            userInfo:data.profile
        })
        console.log(data.profile)
    }

    cnm(){
        console.log(this.state)
    }

    render(){
        return (
            <div>
            <div>
            手机号<input ref="phone"  type = "text" /><br/>
            密码<input ref="password" type = "password" /><br/>
            <input type = "button" onClick = {this.sendInfo.bind(this)} value = {"下一步"} />
            <input type = "button" value = {"？"} onClick = {this.cnm.bind(this)} />
    </div>
        <div>
        <h1>{this.state.userInfo.nickname}</h1>
        <img src = {this.state.userInfo.avatarUrl} />
    </div>
        </div>

    )
    }
}