/**
 * Created by Administrator on 2019/9/17 0017.
 */
import React from 'react'
import axios from 'axios'
import Ce from './views/Ce.js'
export default class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            result: []
        }
    }
    async sendInfo(){
        const {data} = await axios.post("http://47.97.9.42/search/" , {
            keywords:this.refs.keywords.value
        })
        if(data.code === 200){
            this.setState({
                result:data.result.songs
            })
        }else{
            alert("失败")
        }
        console.log(data)
    }
    xixi(){
        console.log(this.state)
    }
    render(){
        // /search?keywords= 海阔天空
        return (
            <div>
                <div>
                    <input type = "text" ref = "keywords" />
                    <input type = "button" onClick = {this.sendInfo.bind(this)} value = {"搜索"} />
                    <input type = "button" value = {"数据"} onClick = {this.xixi.bind(this)} />
                </div>
                <div>
                    {
                        this.state.result.map(v => (
                            <div key = {v.id}>
                                <NavLink to = {"/ce/" + v.id}><p>{v.name}</p></NavLink>
                                <Route path={"/ce/"+v.id} component={Ce}></Route>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}