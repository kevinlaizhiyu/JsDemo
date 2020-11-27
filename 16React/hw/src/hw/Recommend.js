import React, {Component,Fragment} from 'react'
import Hoc from './Hoc'

class Recommend extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         isLogin:false
    //     }
    // }
    // componentDidMount(){
    //     let isLogin = localStorage.getItem('isLogin')==='false'?false:true
    //     this.setState({isLogin})
    // }
    render(){
        return (
            <Fragment>
                这里是推荐页面
            </Fragment>
        )
    }
}

export default Hoc(Recommend)