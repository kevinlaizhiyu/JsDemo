import React, {Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import './modal.css'

class Modal extends Component{
    render(){
        return (
            <Fragment>
                <div className='model'>
                    <div className='content'>
                        <p>登录状态丢失请重新登录</p>
                        {/* 这里是编程式导航 */}
                        <button onClick={()=>{
                            this.props.history.push('/login')
                        }}>登录</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Modal)
