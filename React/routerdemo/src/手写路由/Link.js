import React , {Component, Fragment} from 'react';

class Link extends Component{
    constructor(){
        super()
        this.state={
            name : 'kevin',
        }
    };
    render(){
        return (
            <Fragment>
                <span onClick={this.jump.bind(this)}>{this.props.children}</span>
            </Fragment>
        )
    };

    //实现点击跳转的功能
    jump(){
        console.log('地址栏的跳转')
        window.location.hash=this.props.to
    }

}
export default Link