import React,{Component} from 'react'
import './one.css'
import {NavLink} from 'react-router-dom'

export default class one extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[
                {tabName:"待参加",id:1},
                {tabName:"已参加",id:2},
            ],
            currentIndex:1,
        };
    }
    componentDidMount() {
        
    }
    tabChoiced=(id)=>{
        // tab切换的方法
        this.setState({
            currentIndex:id
        });
    }
    render(){
        var _this=this;
        var tabList= this.state.tabs.map(function(res,index) {
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
            return    
                <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>
        }.bind(_this));
        return (
            <div style={{background:'#f2f2f2',height:'546px'}}>
                <div className="hea">
                    <NavLink to="/" className="lll">
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u84.png?token=ff14f5b935ac8f26062b70423e3cb04b0b48431c30ba266bdf3e352e1993d7e2" />
                    </NavLink>
                    <div className="ss">
                        {tabList}
                    </div>
                    <div>
                        <img src="http://www.axshare.cn/gsc/9B0J2A/6b/b2/f3/6bb2f30d8aa742729e588769883d60fd/images/礼账列表/u90.svg?token=fe9fb97c4e04137da23a4c642d6e6761a2b86dc595a3e4cd1dbd530da68be456" />
                    </div>
                </div>
                <div className="leiq">
                    <div>类别</div>
                    <div>时间</div>
                </div>
                <div className="mu">
                    <div className="mu_left">
                        <div className="mu_left_top">
                            王大锤搬家请客
                        </div>
                        <div className="mu_left_bottom">
                            地点名称地点名称
                        </div>
                    </div>
                    <div className="mu_right">
                        <div className="mu_right_topp">
                            待参加
                        </div>
                        <div className="mu_right_bottom">
                            2016.5.21
                        </div>
                    </div>
                </div>
                <div className="mu">
                    <div className="mu_left">
                        <div className="mu_left_top">
                            王大锤搬家请客
                        </div>
                        <div className="mu_left_bottom">
                            地点名称地点名称
                        </div>
                    </div>
                    <div className="mu_right">
                        <div className="mu_right_topp">
                            已参加
                        </div>
                        <div className="mu_right_bottom">
                            2016.5.21
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}