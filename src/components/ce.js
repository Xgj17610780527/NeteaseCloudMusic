/**
 * Created by Administrator on 2019/9/19 0019.
 */
import React from 'react'
export default class Ce extends React.Component {
    render(){
        return (
            <div style = {{display:(localStorage.userInfo?"none":"block")}}>
                123
            </div>
        )
    }
}