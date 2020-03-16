import React,{Component} from 'react'
import './three.css'
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
                    <div className="content">帮助</div>
                </div>
                <div className="li">
                    <div className="shang">礼尚往来记事记账的好处</div>
                    <div className='youqq'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                    </div>
                </div>
                <div className="li">
                    <div className="shang">如何记账</div>
                    <div className='youqq'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                    </div>
                </div>
                <div className="li">
                    <div className="shang">如何记事</div>
                    <div className='youqq'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                    </div>
                </div>
                <div className="li">
                    <div className="shang">如何发请柬</div>
                    <div className='youqq'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                    </div>
                </div>
                <div className="li">
                    <div className="shang">如何看盈亏</div>
                    <div className='youqq'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                    </div>
                </div>
                <div className="li">
                    <div className="shang">如何计算婚宴预订桌数</div>
                    <div className='youqq'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                    </div>
                </div>
            </div>
        )
    }
}