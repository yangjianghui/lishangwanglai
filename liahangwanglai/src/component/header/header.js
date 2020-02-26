import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'

export default class Header extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="header">
                <div id='head'></div>
                <div id="footer">
                    <li><NavLink to='/'>首页</NavLink></li>
                    <li><NavLink to='/courtesyZ'>礼帐</NavLink></li>
                    <li><NavLink to='/courtesyS'>礼事</NavLink></li>
                    <li><NavLink to='/about'>我的</NavLink></li>
                </div>
            </div>
        )
    }
}