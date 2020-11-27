import React , {Component, Fragment} from 'react';

import {HashRouter,NavLink,Route,Switch} from 'react-router-dom'
// import {HashRouter,BrowserRouter,Link,Route} from 'react-router-dom'
import Recommend from './Recommend';
import Singer from './Singer';
import './nav.css'

function Notfound(){
    return(
        <div>你的页面打了样</div>
    )
}

class Box extends Component{
    render(){
        return (
            <Fragment>
                <h1>路由组建</h1>
              <HashRouter>
                {/* <Link to='/singer'>歌手</Link> */}
                <NavLink activeClassName='selected' className='nav' exact to={{pathname:"/singer"}}>歌手</NavLink>
                <NavLink activeClassName='selected' className='nav' exact to='/recommend'>推荐</NavLink>

                <Switch>

                    <Route path='/singer' component={Singer}></Route>
                    <Route path='/recommend' component={Recommend}></Route>
                    <Route component={Notfound}></Route>
                </Switch>
              </HashRouter>
            </Fragment>
        )
    }
}
export default Box