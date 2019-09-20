/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import '../assets/style/login.css'
import timg from '../assets/img/timg.jpg'
class Login extends React.Component {
    checked(){//输出复选框选中状态
        if(this.refs.checkbox.checked){//当复选框选中时才可以跳转到其他页面
            this.props.history.push("/phonelogin")
        }else{
            alert("请先勾选协议")
        }
    }
    render(){
        return (
            <div class = "login-body">
                <header></header>
                <section>
                    <input className = "click" onClick = {this.checked.bind(this)} type = "button" value = {"手机号登录"} />
                    <p className = "checkbox"><input ref = "checkbox" type = "checkbox" />同意《服务条款》和《隐私政策》</p>
                </section>
            </div>
        )
    }
}
export default Login