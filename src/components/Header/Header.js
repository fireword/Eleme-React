import React, {Component} from 'react';
import './Header.css';
import {getImg} from '../../util/util';

class Header extends Component {
    render() {
        const extras = this.props.extras;
        return (
            <header className="shop-detail-header">
                <div className="shop-detail-back">
                    <a href="javascript:;">
                        <svg>
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-left"></use>
                        </svg>
                    </a>
                </div>
                <div className="detail-main">
                    <div className="shop-avatar">
                        <img src={getImg(extras.image_path)} alt=""/>
                    </div>
                    <div onClick={this.props.handleShowBrief}>
                        <div className="shop-name">
                            {extras.is_premium && <span>品牌</span>}
                            <h1>{extras.name}</h1>
                            <i></i>
                        </div>
                        <div className="shop-info">
                            <span>{extras.rating}</span>
                            <span>月售{extras.recent_order_num}单</span>
                            <span>{extras.delivery_mode.text}</span>
                            <span>约{extras.order_lead_time}分钟</span>
                            <span>距离{extras.distance}米</span>
                        </div>
                        <div className="shop-notice">
                            {extras.promotion_info}
                        </div>
                    </div>
                    <div className="shop-activity" onClick={this.props.handleShowActivity}>
                                <span className="act-icon"
                                      style={{backgroundColor: '#' + extras.activities[0].icon_color}}>{extras.activities[0].icon_name}</span>
                        <span className="act-txt">{extras.activities[0].description}</span>
                        <span className="act-total">
                                {extras.activities.length}个优惠
                            </span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

