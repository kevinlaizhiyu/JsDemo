import React ,{Component, Fragment} from 'react'
import Store from './Store/Store'
import Son1 from './Son1'
import actionCreater from './Store/actonCreater'

class Box extends Component{
    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }


    render(){

        let {name,age} = Store.getState()

        return (
            <Fragment>
                这里是 redux 组件
                 <p>{name}</p>
                 <p>{age}</p>
                <button onClick={
                    actionCreater.changeAge()
                }>grow</button>
                 <hr></hr>
                <Son1>{name}{age}</Son1>
            </Fragment>
        )
    }
}
export default Box