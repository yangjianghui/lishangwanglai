import React,{Component} from 'react'
import './five.css'
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
                    <div className="content">分享</div>
                </div>
                <div className="fen">
                    <div></div>
                    <div className="xiang">微信好友</div>
                    <div>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=565293574,1932156552&fm=26&gp=0.jpg"></img>
                    </div>
                </div>
                <div className="fen">
                    <div></div>
                    <div className="xiang">QQ好友</div>
                    <div>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=565293574,1932156552&fm=26&gp=0.jpg"></img>
                    </div>
                </div>
                <div className="fen">
                    <div></div>
                    <div className="xiang">微信朋友圈</div>
                    <div>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=565293574,1932156552&fm=26&gp=0.jpg"></img>
                    </div>
                </div>
                <div className="fen">
                    <div></div>
                    <div className="xiang">通讯录好友</div>
                    <div>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=565293574,1932156552&fm=26&gp=0.jpg"></img>
                    </div>
                </div>
            </div>
        )
    }
}