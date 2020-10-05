import React,{Component, createRef, Fragment} from 'react'
import actionCreater from './Store/actionCreater'
import store from './Store/store'

class Input extends Component{
    
    constructor(){
        super()
        this.myref = createRef()
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
             
        })
    }
    render(){
        return(
            <Fragment>
                <input type='text' ref={this.myref}></input>
                <button onClick={()=>{
                    //console.log(this.myref.current.value)
                    let msg = this.myref.current.value
                    actionCreater.addList(msg)
                }}>添加</button>
            </Fragment>
        )
    }
}
export default Input