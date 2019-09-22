/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import axios from 'axios'
import {
    withRouter
} from "react-router-dom"
class Resign extends React.Component {
    constructor(){
        super();
        this.state = {
            isShow:false
        }
    }
    async sendCode(){
        const {data} = await axios.get("http://47.97.9.42/captcha/sent?phone=" + this.refs.phone.value)
        if(data.code != 200){
            alert("获取验证码失败")
        }
        console.log(data)
    }
    async checkCode(){
        const {data} = await axios.get("http://47.97.9.42/captcha/verify?phone=" + this.refs.phone.value+"&captcha=" + this.refs.captcha.value)
        //返回验证码的数据
        console.log(data)
        if(data.code === 200){//如果验证码返回的code为200，说明返回成功
            //验证验证码
            //验证码正确 发送昵称等数据
            const {result} = await axios.get("http://47.97.9.42/register/cellphone?phone=" + this.refs.phone.value + "&password=" + this.refs.password.value + "&captcha=" + this.refs.captcha.value + "&nickname=" + this.refs.nickname.value)
            if(result){
                this.props.history.push({
                    pathname:"/phonelogin",
                    state:{
                        goUrl:this.props.location.pathname
                    }
                })
            }
            console.log(result)
        }else{
            alert("data.message")
        }

    }
    async existence(){
        //exist = -1未注册 1 已注册
        const {data} = await axios.get("http://47.97.9.42/cellphone/existence/check?phone=" + this.refs.phone.value)
        console.log(data)
        if(data.exist >= 1){
            this.setState({
                isShow:true
            })
        }
    }
    // async send(){
    //     const {data} = await axios.get("http://47.97.9.42/register/cellphone?phone=" + this.refs.phone.value + "&password=" + this.refs.password.value + "&captcha=" + this.refs.captcha.value + "&nickname=" + this.refs.nickname.value)
    //     console.log(data)
    // }
    render(){
        return (
            <div>
                <div>
                    手机号<input onBlur = {this.existence.bind(this)} ref="phone"  type = "text" />
                    <span style = {{display:(this.state.isShow?"none":"block")}}>未注册</span>
                    <span style = {{display:(this.state.isShow?"block":"none")}}>已注册</span>
                    <br/>
                    验证码<input ref="captcha"  type = "text" /><br/>
                    密码<input ref="password"  type = "text" /><br/>
                    昵称<input ref="nickname"  type = "text" /><br/>
                    <input type = "button" onClick = {this.sendCode.bind(this)} value = {"获取验证码"} />
                    <input type = "button" onClick = {this.checkCode.bind(this)} value = {"注册"} />
                </div>
            </div>
        )
    }
}
export default withRouter(Resign);