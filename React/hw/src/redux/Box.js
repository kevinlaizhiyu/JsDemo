import React , {Component, Fragment } from 'react'
import Store from './Store/Store'
import actionCreater from './Store/ActionCreater'
import connect from './Hoc/Hoc'

class Box extends Component{

    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }

    render(){
        let {name,age} = Store.getState();
        return (
            <Fragment>
                this is box component
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

export default connect(Box)