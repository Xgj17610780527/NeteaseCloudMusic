/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import axios from 'axios'
export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            userInfo:[]
        }
    }
    async getInfo(){
        const list = await {
            userName:this.refs.username.value,
            password:this.refs.password.value
        }
        console.log(list)
    }
// ?phone=17610780527&password=520iphone
    async sendInfo(){
        // const {data} = await axios.get("http://127.0.0.1/login/cellphone?phone=17610780527&password=520iphone")
        // console.log(data)
        const {data} = await axios.post("http://127.0.0.1/login/cellphone" , {
            phone:this.refs.phone.value,
            password:this.refs.password.value
        })
        console.log(data)
        // await axios.get("http://127.0.0.1/login/cellphone" , {
        //     phone:this.refs.phone.value,
        //     password:this.refs.password.value
        // })
        // const {data} =
        // this.setState({
        //     userInfo:data
        // })
    }

    render(){
        return (
            <div>
                手机号<input ref="phone"  type = "text" /><br/>
                密码<input ref="password" type = "password" /><br/>
                <input type = "button" onClick = {this.sendInfo.bind(this)} value = {"下一步"} />
                
            </div>
        )
    }
}