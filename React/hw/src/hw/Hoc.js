import React, { Component, Fragment } from "react";
import Modal from "./Modal";

export default (TempComponent)=>{
    class NewComponent extends Component{
        constructor(){
            super()
            this.state={
                isLogin:false
            }
        }
        // 在挂载的时候从本地的locastorage中提取相应的数据
        componentDidMount(){
            let isLogin = localStorage.getItem('isLogin')==='false'?false:true
            this.setState({isLogin})
        }
        render(){
            let {isLogin}=this.state
            return(
                <Fragment>
                {/* 对用户的登录状态进行验证 */}
                {isLogin?<TempComponent></TempComponent>:<Modal></Modal>}

                </Fragment>
            )
        }
    }
    return NewComponent
}