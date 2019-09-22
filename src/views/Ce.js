/**
 * Created by Administrator on 2019/9/19 0019.
 */
import React from 'react'
export default class Ce extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <input type = "button" value = {"点击"} />
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
}

// constructor(){
//     super();
// }
// render(){
//     return (
//         <div>
//             <input type = "button" onClick = {this.getInfo.bind(this)} value = {"xixi"} />
//         </div>
//     )
// }
// getInfo(){
//     console.log(this.props.match);
// }
