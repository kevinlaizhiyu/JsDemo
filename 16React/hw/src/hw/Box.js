import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Redirect, Switch, Route } from 'react-router-dom'
import Singer from './Singer'
import Recommend from './Recommend'
import Rank from './Rank'
import Login from './Login'
import './index.css'

class Box extends Component {
    render() {
        return (
            <Fragment>
                <HashRouter>
                    {/* tab */}
                    <NavLink className='nav' to='/singer' activeClassName='selected'>歌手</NavLink>
                    <NavLink className='nav' to='/recommend' activeClassName='selected'>推荐</NavLink>
                    <NavLink className='nav' to='/rank' activeClassName='selected'>排行</NavLink>
                    <NavLink className='nav' to='/login' activeClassName='selected'>我的</NavLink>

                    {/* router */}
                    <br></br>
                    <Switch>
                        <Redirect exact from='/' to='/singer'></Redirect>
                        <Route path='/singer' component={Singer} ></Route>
                        <Route path='/recommend' component={Recommend} ></Route>
                        <Route path='/rank' component={Rank} ></Route>
                        <Route path='/login' component={Login} ></Route>
                        <Route render={() => {
                            return (
                                <div>
                                    <h1>你的页面走丢了 404</h1>
                                </div>
                            )
                        }}></Route>
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    }
}
export default Box