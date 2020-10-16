import React , {Component, Fragment} from 'react';
import Link from './Link';
import Route from './Route';
import Singer from './Singer'
import Recommend from './Recommend'

class Box extends Component{
    render(){
        return (
            <Fragment>
                <h5>手写路由</h5>
                <Link to ='/singer'>歌手</Link>
                <Link to ='/recommend'>推荐</Link>
                {/* 控制组件的熏染 */}
                <Route path='/singer' component={Singer}></Route>
                <Route path='/recommend' component={Recommend}></Route>
            </Fragment>
        )
    }
}
export default Box