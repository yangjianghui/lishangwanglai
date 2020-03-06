import React,{Component} from 'react'
import './onee.css'
import {NavLink} from 'react-router-dom'

export default class onee extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'rgba(242, 242, 242, 1)'}}>
                <div className="my_text">
                    <NavLink to='./about' className="left">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582829621129&di=525cce37ba5ded33033419b65a9df0c3&imgtype=0&src=http%3A%2F%2Fwww.51yuansu.com%2Fpic2%2Fcover%2F00%2F43%2F08%2F58107382bb9b5_610.jpg"></img>
                    </NavLink>
                    <div className="content">设置</div>
                </div>
                <div className="jian">
                    <div></div>
                    <div className="cha">检查更新</div>
                </div>
                <div className="jian">
                    <div></div>
                    <div className="cha">初始化</div>
                </div>
                <div className="jian">
                    <div></div>
                    <div className="cha">密码锁</div>
                </div>
                <div className="jian">
                    <div></div>
                    <div className="cha">记账提醒</div>
                </div>
            </div>
        )
    }
}