import React , {Component,Fragment} from 'react'
import Hoc from './Hoc'


class Sayhello extends Component{
  
    render(){
        return (
            <Fragment>
               你好 , {this.props.name}
            </Fragment>
        )
    }

}

export default Hoc(Sayhello)