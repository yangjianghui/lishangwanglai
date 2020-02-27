import React,{Component} from 'react'
import './four.css'
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
                    <div className="content">关于</div>
                </div>
                <div className="box">
                    <div className="he">
                        Icon
                    </div>
                </div>
                <div className="ping">
                    <p style={{color:'#169bd5'}}>礼尚往来</p>
                    <p>V1.0.0</p>
                </div>
                <div className="wei">
                    您身边的家庭礼尚往来记账管理专家，礼数清晰，礼事提醒，从此不再担忧送礼收礼问题！
                </div>
            </div>
        )
    }
}