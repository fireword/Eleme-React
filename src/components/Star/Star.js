import React, {Component} from 'react';
import './Star.css';

class Star extends Component {
    render() {
        return (
            <div className="star">
                <div className="star-gray">
                    <img src="/img/star-gray.svg" className="star-img" alt=""/>
                </div>
                <div className="star-color" style={{width: this.props.rating / 5 * 100 + '%'}}>
                    <img src="/img/star-color.svg" className="star-img" alt=""/>
                </div>
            </div>

        );
    }
}

export default Star;

