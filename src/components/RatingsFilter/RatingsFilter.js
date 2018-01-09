import React, {Component} from 'react';
import './RatingsFilter.css';

class RatingsFilter extends Component {
    render() {
        return (
            <div className="ratings-filter">
                <ul className="filter-wrapper">
                    <li className="filter-item on">全部(1914)</li>
                    <li className="filter-item">满意(1832)</li>
                    <li className="filter-item off">不满意(82)</li>
                    <li className="filter-item">有图(22)</li>
                    <li className="filter-item">送货快(13)</li>
                </ul>
            </div>
        );
    }
}

export default RatingsFilter;

