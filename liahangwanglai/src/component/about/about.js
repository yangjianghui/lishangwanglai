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
                    <div className='clock'>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=9dd78e0cf0b3ba9a5ac61f62f4a353a88a4f2799918927ec76f9f8b159e8c330" />
                    </div>
                </div>
                <div className='denglu'>
                    <a>
                        <div className='touxiang'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=92545f2bf88d742363c33bb06eda8650950f2b5346f74726e10defecd495e990" />
                        </div>
                        <div className='WX_name'>
                            <div className='WX_text'>
                                <span>调用QQ、微信昵称</span>
                            </div>
                        </div>
                        <div className='you'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u891.png?token=8c6df50e1c80bd312254b593bab5f904db6e897f4a385091eeaee207ef26b267" />
                        </div>
                    </a>
                </div>
                <div className='setup'>
                    <NavLink to='./onee'>
                        <div className='leftq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" />
                        </div>
                        <div className='she'>设置</div>
                        <div className='youq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                        </div>
                    </NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./two'>
                        <div className='leftq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" />
                        </div>
                        <div className='she'>反馈</div>
                        <div className='youq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                        </div>
                    </NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./three'>
                        <div className='leftq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" />
                        </div>
                        <div className='she'>帮助</div>
                        <div className='youq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                        </div>
                    </NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./four'>
                        <div className='leftq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" />
                        </div>
                        <div className='she'>关于</div>
                        <div className='youq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                        </div>
                    </NavLink>
                </div>
                <div className='setup'>
                    <NavLink to='./five'>
                        <div className='leftq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u102.png?token=7f7cdce1e2f4ca317304f308ddef4157cac9028152e4ff8d5f6b0fddf0d2679b" />
                        </div>
                        <div className='she'>分享</div>
                        <div className='youq'>
                            <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u905.png?token=469009e1e0868eea8e53dcfd60b0cd8de7775523d9f84d2177b1276655878d3b" />
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}