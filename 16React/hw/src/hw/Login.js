import React, {Component,Fragment} from 'react'

class Login extends Component{
    login(){
        localStorage.setItem('isLogin',true)
    }
    logout(){
        localStorage.setItem('isLogin',false)
    }
    render(){
        return (
            <Fragment>
                这里是登录
                <button onClick={this.login}>登录</button>
                <button onClick={this.logout}>注销</button>
            </Fragment>
        )
    }
}

export default Login