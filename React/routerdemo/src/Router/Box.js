import React, { Component, Fragment } from 'react';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// import {HashRouter,BrowserRouter,Link,Route} from 'react-router-dom'
import Recommend from './Recommend';
import Singer from './Singer';
import './nav.css'

function Notfound() {
    return (
        <div>你的页面打了样</div>
    )
};

function Singers(props){
    console.log(props);
    return (
        <div onClick={()=>{
            props.history.push('/singer')
        }}> 歌手</div>
    )
}

function Recomendation(props){
    console.log(props);
    return (
        <div onClick={()=>{
            props.history.push('/recommend')
        }}> 推荐</div>
    )
}
class Box extends Component {
    render() {
        return (
            <Fragment>
                <h1>路由zujian</h1>
                <HashRouter>
                    <Route render={Singers.bind(this)}></Route>
                    <Route render={Recomendation.bind(this)}></Route>
                    <Switch>
                        <Redirect exact from='/' to='/singer' ></Redirect>
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