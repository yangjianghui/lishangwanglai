import React,{Component} from 'react'
import './two.css'
import {NavLink} from 'react-router-dom'

export default class two extends Component{
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
                    <div className="content">反馈</div>
                    <div className="right">确定</div>
                </div>
                <div className="kuang">
                    感谢您对礼尚往来的支持，点击输入反馈信息...
                </div>
                <div className="footer">
                    <div className="left1">邮箱</div>
                    <div className="right2">@qq.com</div>
                </div>
            </div>
        )
    }
}