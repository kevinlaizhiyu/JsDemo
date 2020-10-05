import React , {Component, Fragment } from 'react'
import Store from './Store/Store'
import actionCreater from './Store/ActionCreater'
import connect from 'react-redux'
//connec的本质是一个方法，返回一个高阶组件 
//connec()(处理的组件)

class Son2 extends Component{

    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }

    render(){
        let {name,age} = Store.getState();
        return (
            <Fragment>
                this is Son2 component
                <hr></hr>
                {name}
                <button onClick={actionCreater.changeName}>点击改名字</button>
                <hr></hr>
                {age}
                <button onClick={actionCreater.changeAge}>grow</button>
            </Fragment>
        )
    }
}

export default Son2