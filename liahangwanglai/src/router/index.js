import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import Home from '../component/home/home'
import CourtesyS from '../component/one/one'
import CourtesyZ from '../component/lishi/lishi'
import About from '../component/about/about'
import Onee from '../component/onee/onee'
import Two from '../component/two/two'
import Three from '../component/three/three'
import Four from '../component/four/four'
import Five from '../component/five/five'
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
                <Route path='/onee' component={Onee}/>
                <Route path='/two' component={Two}/>
                <Route path='/three' component={Three}/>
                <Route path='/four' component={Four}/>
                <Route path='/five' component={Five}/>
            </Switch>
        </div>
    )
}

export default router