import React ,{Component, Fragment} from 'react'
import Store from './Store/Store'
import actionCreater from './Store/actonCreater'

class Son1 extends Component{
    componentDidMount(){
        //监听全局状态值发生改变
        Store.subscribe(()=>{
            //在全局状态值发生改变的时候触发
            this.setState({})
        })
    }
     
    render(){

        let {name,age} = Store.getState()

        return (
            <Fragment>
                这里是 Son1 组件
                 <p>{name}</p>
                 <p>{age}</p>
                 <button onClick={()=>{
                     actionCreater.changeName()
                 }}> 改名</button>
            </Fragment>
        )
    }
}
export default Son1