import React,{Component, Fragment} from 'react'
import store from './Store/store'
import './index.css'
import actionCreater from './Store/actionCreater'
class List extends Component{
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        let {list } = store.getState()
        return(
            <Fragment>
                <ul>
                   {list.map((item,index)=>{
                       return (
                       <li className={item.finish?"skyblue":'yellow'} key={index}>{item.msg}
                       <button onClick={()=>{
                           actionCreater.delList(index)
                       }}>删除</button>
                       </li>
                       )
                   })}
                </ul>
            </Fragment>
        )
    }
}

export default List 