import React, {Component} from 'react';
import RatingsHeader from '../RatingsHeader/RatingsHeader';
import RatingsFilter from '../RatingsFilter/RatingsFilter';
import RatingsList from '../RatingsList/RatingsList';
import './Ratings.css';

class Ratings extends Component {
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e){
        let wrapper=document.querySelector('.shop-detail-wrapper');
        wrapper.scrollTop=e.target.scrollTop;
    }


    render() {
        return (
            <div className="ratings-wrapper"
                 onScroll={this.handleScroll}
                 style={{display:this.props.currentTabIndex===1?'':'none'}}
            >
                <RatingsHeader scores={this.props.scores}/>
                <RatingsFilter/>
                <RatingsList ratings={this.props.ratings}/>
            </div>
        );
    }
}

export default Ratings;

