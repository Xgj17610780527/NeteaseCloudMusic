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
    }
    async sendCode(){
        const {data} = await axios.get("http://47.97.9.42/captcha/sent?phone=" + this.refs.phone.value)
        console.log(data)
    }
    render(){
        return (
            <div>
                <div>
                    手机号<input ref="phone"  type = "text" /><br/>
                    <input type = "button" onClick = {this.sendCode.bind(this)} value = {"获取验证码"} />
                </div>
            </div>
        )
    }
}
export default withRouter(ClickLogin);