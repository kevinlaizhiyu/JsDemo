import React, { Component, Fragment } from 'react';

class Route extends Component {
    constructor() {
        super()
        this.state = {
            hashPath: '/'
        }
    };
    render() {
        let { path, component } = this.props;
        console.log(this)
        return (
            <Fragment>
                {this.state.hashPath === path && component()}
            </Fragment>
        )
    };
    //监听地址栏的改变
    componentDidMount() {
        window.addEventListener('hashchange', this.listen)
    }
    listen = () => {
        let hash = window.location.hash.split('#')[1]
        this.setState({ hashPath: hash })
    }
    //
    componentWillUnmount(){
        window.removeEventListener('hashchange', this.listen)
    }

}
export default Route