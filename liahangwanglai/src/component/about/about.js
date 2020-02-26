import React,{Component} from 'react'
import './about.css'

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
                        <p><span>我的</span></p>
                    </div>
                    <div className='clock'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u895.svg?token=a0a1199bcb70074d35b9fe37d8d3c3a21536caa6d65e93b11a3e9fce9865edc5' /></div>
                </div>
                <div className='denglu'>
                    <div className='touxiang'><img src='http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/个人中心首页/u889.svg?token=42b1d5bee629f98397523d75fd80f11a98307b75a77a0ca8126f1d92b0bc4ea8' /></div>
                    <div className='WX_name'>
                        <div className='WX_div'></div>
                        <div className='WX_text'>
                            <p><span>调用QQ、微信昵称</span></p>
                        </div>
                    </div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>设置</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>反馈</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>帮助</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>关于</div>
                </div>
                <div className='setup'>
                    <div className='setup_text'>分享</div>
                </div>
            </div>
        )
    }
}