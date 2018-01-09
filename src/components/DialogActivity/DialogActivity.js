import React, {Component} from 'react';
import './DialogActivity.css';

class DialogActivity extends Component {
    render() {
        const activities=this.props.activities;
        return (
            <div className="dialog-activity">
                <div className="dialog-activity-mask" onClick={this.props.onHandleClick}>
                </div>
                <div className="dialog-activity-content">
                    <div className="activity-title">优惠活动</div>
                    <div className="activity-main">
                        <ul>
                            {
                                activities.map((act)=>{
                                    return(
                                        <li key={act.id}>
                                            <span style={{backgroundColor:'#'+act.icon_color}}>{act.icon_name}</span>
                                            <p>{act.description}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="dialog-activity-close" onClick={this.props.onHandleClick}>
                        <svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#gray-close"></use></svg>
                    </div>
                </div>

            </div>
        );
    }
}

export default DialogActivity;

