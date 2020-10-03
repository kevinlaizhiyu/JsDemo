import React,{Component, Fragment} from 'react'
import Input from './Input'
import List from './List'

class Box extends Component{
    render(){
        return(
            <Fragment>
              <Input></Input>
              <List></List>
            </Fragment>
        )
    }
}

export default Box