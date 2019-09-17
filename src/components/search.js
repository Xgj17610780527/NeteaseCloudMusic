/**
 * Created by Administrator on 2019/9/17 0017.
 */
import React from 'react'
import axios from 'axios'
export default class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            result:{}
        }
    }
    async sendInfo(){
        const {data} = await axios.post("http://127.0.0.1/search" , {
            keywords:this.refs.keywords.value
        })
        if(data.code === 200){
            this.setState({
                result:data.result
            })
        }else{
            alert("错误")
        }
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
                </div>
                <div>
                    {
                        this.state.result.songs.map(v => (
                            <div key = {v.id}>
                                <p>{v.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}