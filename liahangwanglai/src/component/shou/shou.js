import React,{Component} from 'react'
import './shou.css'
import {NavLink} from 'react-router-dom'

export default class shou extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className="head">
                    <NavLink to="/" className="imgg" >
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=ff14f5b935ac8f26062b70423e3cb04b0b48431c30ba266bdf3e352e1993d7e2" />    
                    </NavLink>  
                    <div className="pai">排行榜</div>  
                </div>  
                <ul className="an">
                    <NavLink to="ying">按盈亏</NavLink>
                    <NavLink to="shou">按收入</NavLink>
                    <NavLink to="zhi">按支出</NavLink>
                </ul>  
                <ul className="hang">
                    <li>排行</li>
                    <li>用户</li>
                    <li>历史盈亏</li>
                    <li>本月盈亏</li>
                </ul>
                <ul className="one">               
                    <li>1</li>
                    <li>JAMES 刘 </li>
                    <li>95685.00</li>
                    <li>4500.00</li>
                </ul>
                <ul className="one">               
                    <li>2</li>
                    <li>JAMES 刘 </li>
                    <li>95685.00</li>
                    <li>4500.00</li>
                </ul>
                <ul className="one">               
                    <li>3</li>
                    <li>JAMES 刘 </li>
                    <li>95685.00</li>
                    <li>4500.00</li>
                </ul>
            </div>
        )
    }
}