import React , {Component,Fragment} from 'react'
import Hoc from './Hoc'

class SayBye extends Component{
    render(){
        return (
            <Fragment>
             再见, {this.props.name}
            </Fragment>
        )
    }

}

export default Hoc(SayBye)