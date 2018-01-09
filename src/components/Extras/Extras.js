import React, {Component} from 'react';
import './Extras.css';

class Extras extends Component {
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e){
        let wrapper=document.querySelector('.shop-detail-wrapper');
        wrapper.scrollTop=e.target.scrollTop;
    }

    render() {
        const extras=this.props.extras;
        return (
            <div className="extra-info"
                 onScroll={this.handleScroll}
                 style={{display:this.props.currentTabIndex===2?'':'none'}}
            >
                <div className="info-container">
                    <div className="info-title">配送信息</div>
                    <div className="info-delivery">
                        <p>由{extras.delivery_mode.text}提供配送，约{extras.order_lead_time}分钟送达，距离{(extras.distance/1000).toFixed(2)}km</p>
                        <p>配送费¥{extras.float_delivery_fee}</p>
                        </div>
                </div>
                <div className="info-container">
                    <div className="info-title">活动与服务</div>
                    <ul className="info-activity">
                        {
                            extras.activities.map((act)=>{
                                return(
                                    <li key={act.id}>
                                        <span className="act-icon" style={{backgroundColor:'#'+act.icon_color}}>{act.icon_name}</span>
                                        <span className="act-txt">{act.description}</span>
                                    </li>
                                )
                            })
                        }
                        {
                            extras.supports.map((support)=>{
                                return(
                                    <li key={support.id}>
                                        <span className="act-icon" style={{color:'#'+support.icon_color,border:'1px solid #'+support.icon_color}}>{support.icon_name}</span>
                                        <span className="act-txt">{support.description}</span>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="info-container">
                    <div className="info-title">商家信息</div>
                    <ul className="info-shop">
                        <li>{extras.description||'暂无简介'}</li>
                        <li>
                            <span className="info-shop-title">商家电话</span>
                            <span className="info-shop-content">
                                {extras.phone}
                                <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-right"></use></svg>
                            </span>
                        </li>
                        <li>
                            <span className="info-shop-title">地址</span>
                            <span className="info-shop-content">{extras.address}</span>
                        </li>
                        <li>
                            <span className="info-shop-title">营业时间</span>
                            <span className="info-shop-content">{extras.opening_hours.join(',')}</span>
                        </li>
                    </ul>
                </div>
                <div className="info-container">
                    <div className="info-title link">
                        营业资质
                        <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-right"></use></svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Extras;

