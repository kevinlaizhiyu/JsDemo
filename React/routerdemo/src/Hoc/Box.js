import React, { Component, Fragment } from 'react'
import SayBye from './sayBye'
import SayHello from './sayHello'


class Box extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <Fragment>
                高阶组件{this.state.name}
                <hr></hr>
                <SayHello></SayHello>
                <hr />
                <SayBye></SayBye>

            </Fragment>
        )
    }

}

export default Box