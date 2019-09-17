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
        const result = data.result.songs

        console.log(result)
        result.map(v => (
            console.log(v)
        ))

        this.setState({
            result:data.result.songs
        })
        console.log(this.state.result)
    }
    render(){
        // /search?keywords= 海阔天空
        return (
            <div>
                <input type = "text" ref = "keywords" />
                <input type = "button" onClick = {this.sendInfo.bind(this)} value = {"搜索"} />
            {console.log(this.state.result)}

            </div>
        )
    }
}