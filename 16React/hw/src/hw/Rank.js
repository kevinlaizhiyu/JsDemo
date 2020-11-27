import React, {Component,Fragment} from 'react'
import Hoc from './Hoc'

class Rank extends Component{
    render(){
        return (
            <Fragment>
                排行组件
            </Fragment>
        )
    }
}

export default Hoc(Rank)