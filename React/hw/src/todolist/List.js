import React,{Component, Fragment} from 'react'
import store from './Store/store'
import './index.css'
class List extends Component{
    render(){
        let {list } = store.getState()
        return(
            <Fragment>
                <ul>
                   {list.map((item,index)=>{
                       return (
                       <li className={item.finish?"skyblue":'yellow'} key={index}>{item.msg}</li>
                       )
                   })}
                </ul>
            </Fragment>
        )
    }
}

export default List 