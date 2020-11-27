import React, { Component, Fragment } from "react";
import Store from '../Store/Store'

export default (TempComponent)=>{

    class NewComponent extends Component{
        componentDidMount(){
            Store.subscribe(()=>{
                this.setState({})
            })
        }
        render(){
            let {name,age} = Store.getState()
            return (
                <Fragment>
                    <TempComponent name={name} age={age}></TempComponent>
                </Fragment>
            )
        }
    }

    return NewComponent
}