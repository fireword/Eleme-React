import React, {Component} from 'react';
import './Tab.css';

class Tab extends Component {

    componentDidMount(){
        //保证窗口滚动高度 等于窗口可视高度减去tab的高度
        //这样能保证tab固定在顶部
        let wrapper=document.querySelector('.shop-tab-main');
        let tab=document.querySelector('.shop-tab');
        wrapper.style.height=document.body.clientHeight-tab.clientHeight+'px';
    }

    render() {
        return (
            <div className="shop-tab">
                <ul>
                    <li className={this.props.currentTabIndex===0?'on':''} onClick={this.props.handleChangeTab.bind(this,0)}><span>点餐</span></li>
                    <li className={this.props.currentTabIndex===1?'on':''} onClick={this.props.handleChangeTab.bind(this,1)}><span>评价</span></li>
                    <li className={this.props.currentTabIndex===2?'on':''} onClick={this.props.handleChangeTab.bind(this,2)}><span>商家</span></li>
                </ul>
            </div>
        );
    }
}

export default Tab;

