import React, {Component} from 'react';
import './DialogBrief.css';

class DialogBrief extends Component {
    render() {
        const brief=this.props.brief;
        return (
            <div className="dialog-brief">
                <div className="dialog-brief-mask" onClick={this.props.onHandleClick}>
                </div>
                    <div className="dialog-brief-content">
                        <div className="brief-title">{brief.name}</div>
                        <ul className="brief-info">
                            <li>
                                <span>{brief.rating}</span>
                                <span>评分</span>
                            </li>
                            <li>
                                <span>{brief.recent_order_num}单</span>
                                <span>月售</span>
                            </li>
                            <li>
                                <span>约{brief.order_lead_time}分钟</span>
                                <span>{brief.delivery_mode.text}</span>
                            </li>
                            <li>
                                <span>{brief.float_delivery_fee}元</span>
                                <span>配送费</span>
                            </li>
                            <li>
                                <span>{brief.distance}m</span>
                                <span>距离</span>
                            </li>
                        </ul>
                        <div className="brief-notice-title"><span>公告</span></div>
                        <div className="brief-notice-content">
                            {brief.promotion_info}
                        </div>
                    </div>
                    <div className="dialog-brief-close" onClick={this.props.onHandleClick}>
                    </div>
            </div>
        );
    }
}

export default DialogBrief;

