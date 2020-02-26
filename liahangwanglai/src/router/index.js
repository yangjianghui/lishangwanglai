import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import Home from '../component/home/home'
import CourtesyS from '../component/one/one'
import CourtesyZ from '../component/two/two'
import About from '../component/about/about'
import Index from './index.css'

function router(){
    return (
        <div id="box">
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/courtesyS' component={CourtesyS} />
                <Route path='/courtesyZ' component={CourtesyZ} />
                <Route path='/about' component={About} />
                <Route component={Home} />
            </Switch>
        </div>
    )
}

export default router