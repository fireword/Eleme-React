import React, {Component} from 'react';
import Star from '../Star/Star';
import './RatingsHeader.css';

class RatingsHeader extends Component {
    render() {
        return (
            <div className="ratings-header">
                <div className="rating-score">
                    <h2 className="score-num">{this.props.scores.overall_score.toFixed(1)}</h2>
                    <div className="score-txt">综合评价</div>
                    <div className="score-extra">高于周边商家{(this.props.scores.compare_rating*100).toFixed(1)}%</div>
                </div>
                <div className="rating-info">
                    <section>
                        <div className="info-txt">服务态度</div>
                        <div className="info-star">
                            <Star rating={this.props.scores.service_score}/>
                        </div>
                        <div className="info-num">{this.props.scores.service_score.toFixed(1)}</div>
                    </section>
                    <section>
                        <div className="info-txt">菜品价格</div>
                        <div className="info-star">
                            <Star rating={this.props.scores.food_score}/>
                        </div>
                        <div className="info-num">{this.props.scores.food_score.toFixed(1)}</div>
                    </section>
                    <section>
                        <div className="info-txt">送达时间</div>
                        <div className="info-delivery">
                            <span>{this.props.scores.deliver_time}分钟</span>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default RatingsHeader;

