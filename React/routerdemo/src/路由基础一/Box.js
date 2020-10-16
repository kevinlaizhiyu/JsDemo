import React , {Component, Fragment} from 'react';

import {HashRouter,NavLink,Route} from 'react-router-dom'
// import {HashRouter,BrowserRouter,Link,Route} from 'react-router-dom'
import Recommend from './Recommend';
import Singer from './Singer';
import './nav.css'
class Box extends Component{
    render(){
        return (
            <Fragment>
                <h1>路由组建</h1>
              <HashRouter>
                {/* <Link to='/singer'>歌手</Link> */}
                <NavLink activeClassName='selected' className='nav' to={{pathname:"/singer"}}>歌手</NavLink>
                <NavLink activeClassName='selected' className='nav' to='/recommend'>推荐</NavLink>

                <Route path='/singer' component={Singer}></Route>
                <Route path='/recommend' component={Recommend}></Route>
              </HashRouter>
            </Fragment>
        )
    }
}
export default Box