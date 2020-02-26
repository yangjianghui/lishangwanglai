import React,{Component} from 'react'
import './home.css'

export default class home extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className='home_top'>
                    <div className="historical">
                        {/* <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u22.png?token=b58778d4cbbe4915eaca773d8040b7e154c1a9a3299618d1e3424206c1614192"/> */}
                        <div className="profitloss">
                            <p><span>历史盈亏</span></p>
                            <p><span>2948.00</span></p>
                        </div>
                    </div>
                    <div className="t_month">
                        {/* <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u27.png?token=4cdbd7a85d851eb5ba4596347c33c5f6217394d658f7147f63e23afeaafbdea4"/> */}
                        <div className="profitloss">
                            <p><span>本月盈亏</span></p>
                            <p><span>2948.00</span></p>
                        </div>
                    </div>
                    <div className="his_gifts">
                        <div className="his_div"></div>
                        <div className="his_text">
                            <p><span>历史收礼</span></p>
                            <p><span>5500.00</span></p>
                        </div>
                    </div>
                    <div className="his_gift">
                        <div className="his_div"></div>
                        <div className="his_text">
                            <p><span>历史送礼</span></p>
                            <p><span>2500.00</span></p>
                        </div>
                    </div>
                    <div className="june_gifts">
                        <div className="june_div"></div>
                        <div className="june_text">
                            <p><span>6月收礼</span></p>
                            <p><span>5500.00</span></p>
                        </div>
                    </div>
                    <div className="june_gift">
                        <div className="june_div"></div>
                        <div className="june_text">
                            <p><span>6月收礼</span></p>
                            <p><span>2500.00</span></p>
                        </div>
                    </div>
                    <div className="his_june">
                        {/* <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u28.png?token=e9404da988482ae48a7cd47167c1db98b1cfe2741113ad33927e748118d13a1d" /> */}
                    </div>
                    <div className="june_face">
                        {/* <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u29.png?token=08f4d674e4dec8b2f8b82cbbb441e589716452d08c4d91a9fd934742c8755119" /> */}
                    </div>
                    <div className="smilingface">
                        {/* <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/首页/u30.svg?token=f748c13f4d14939978f225e9d051ad126897ba7117ad2d9b22cff527ac1f5b58" /> */}
                    </div>
                </div>
                <div className='his_list'>
                    <ul className='ul1'>
                        <li>排行</li>
                        <li>用户</li>
                        <li>历史盈亏</li>
                        <li>本月盈亏</li>
                        <li>更多</li>
                    </ul>
                    <div className='list_content'>
                        <div className='list1'>
                            <div className='list1_div'></div>
                            <div className='list1_text'>
                                <li>1</li>
                                <li>JAMES 刘</li>
                                <li>95685.00</li>
                                <li>4500.00</li>
                                <li></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}