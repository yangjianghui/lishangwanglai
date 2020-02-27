import React,{Component} from 'react'
import './about.css'
import {NavLink} from 'react-router-dom'

export default class about extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className='my_top'>
                    <div className='my_div'></div>
                    <div className='my_text'>
                        <p>
                            <span>我的</span>
                        </p>
                    </div>
                    <div className='clock'></div>
                </div>
                <div className='denglu'>
                    <div className='touxiang'></div>
                    <div className='WX_name'>
                        <div className='WX_div'></div>
                        <div className='WX_text'>
                            <p>
                                <span>调用QQ、微信昵称</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='setup'>
                    <NavLink to='./onee'>设置</NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./two'>反馈</NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./three'>帮助</NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./four'>关于</NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./five'>分享</NavLink>
                </div>
            </div>
        )
    }
}