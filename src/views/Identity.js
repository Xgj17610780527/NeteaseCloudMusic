/**
 * Created by Administrator on 2019/9/16 0016.
 */
import React from 'react'
import '../assets/style/identity.css'
import axios from 'axios'
export default class Identity extends React.Component {
    constructor(){
        super();
        this.state = {
            userInfo:JSON.parse(localStorage.userInfo)
        }
    }
    render() {
        return (
            <div class="identity-body">
                <header>
                    <p>我的音乐</p>
                </header>
                <section>
                    <div className="identity-login">
                        <div className="identity-login-info" style = {{display:(localStorage.userInfo?"block":"none")}}>
                            <h4>{this.state.userInfo.profile.nickname}</h4>
                            <i>{`lv ${this.state.userInfo.profile.vipType}`}</i>
                            <div className="identity-login-avatar">
                                <img src={this.state.userInfo.profile.avatarUrl}/>
                            </div>
                        </div>
                        <div class="identity-login-runinfo" style = {{display:(localStorage.userInfo?"block":"none")}}>
                            <ul>
                                <li>动态:{this.state.userInfo.profile.eventCount}</li>
                                <li>关注:{this.state.userInfo.profile.follows}</li>
                                <li>粉丝:{this.state.userInfo.profile.followeds}</li>
                                <li class="identity-login-runinfo-bottom">编辑资料</li>
                            </ul>
                        </div>
                        <div className="identity-login-none" style = {{display:(localStorage.userInfo?"none":"block")}}>
                            <p>登录网易云音乐</p>
                            <p>手机电脑多端同步,尽享海量高品质音乐</p>
                            <input type="button" value={"立即登录"} onClick={()=>{
                                this.props.history.push("/login")
                            }}/>
                        </div>
                    </div>
                    <div class="identity-message">
                        <ul>
                            <li>
                                消息
                            </li>
                            <li>商城</li>
                            <li>演出</li>
                            <li>个性换肤</li>
                        </ul>
                    </div>
                    <div class="identity-list">
                        <ul class="identity-list-one">
                            <li>口袋铃声</li>
                            <li>我的订单</li>
                        </ul>
                        <ul class="identity-list-two">
                            <li>设置</li>
                            <li>夜间模式</li>
                            <li>定时关闭</li>
                            <li>音乐闹钟</li>
                        </ul>
                        <ul class="identity-list-three">
                            <li>在线听歌免流量</li>
                            <li>优惠券</li>
                        </ul>
                        <ul class="identity-list-four">
                            <li>分享网易云音乐</li>
                            <li>关于</li>
                        </ul>
                    </div>
                    <div className = "login">
                        <input className = "outLogin" type="button" value={"退出登录"} onClick = {this.outLogin.bind(this)} />
                    </div>

                    <input type = "button" value = {"测试"} onClick = {this.xixi.bind(this)} />
                </section>
                <footer></footer>
            </div>
        )
    }
    xixi(){
        console.log(this.state.userInfo)
    }
    async outLogin(){
        const {data} = await axios.get("http://47.97.9.42/logout")
        if(data.code === 200){
            localStorage.clear()
            if(localStorage.userInfo){
                this.setState({
                    userInfo:null
                })
            }else{
                this.props.history.push({
                    pathname:"/identity",
                    state:{
                        goUrl:this.props.location.pathname
                    }
                })
            }
        }
    }
}