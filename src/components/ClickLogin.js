/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import axios from 'axios'
import {
    withRouter
} from "react-router-dom"
class ClickLogin extends React.Component {
    constructor(){
        super();
        this.state = {
            userInfo: []
        }
    }
    async sendInfo(){
        const {data} = await axios.get("http://47.97.9.42/login/cellphone?phone="+ this.refs.phone.value+"&password="+ this.refs.password.value)
        await this.setState({
            userInfo:data
        })
        if(data.code !== 200){
             alert("请重新登录")
        }else{
            localStorage.userInfo = JSON.stringify(data);
            this.props.history.push({
                pathname:"/",
                state:{
                    goUrl:this.props.location.pathname
                }
            })
        }
    }
    render(){
        return (
            <div>
                <div>
                    手机号<input ref="phone"  type = "text" /><br/>
                    密码<input ref="password" type = "password" /><br/>
                    <input type = "button" onClick = {this.sendInfo.bind(this)} value = {"下一步"} />
                </div>
            </div>
        )
    }
}
export default withRouter(ClickLogin);