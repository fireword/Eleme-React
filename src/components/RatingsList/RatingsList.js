import React, {Component} from 'react';
import RatingsItem from '../RatingsItem/RatingsItem';
import PhotoBrowser from '../PhotoBrowser/PhotoBrowser';
import Transition from 'react-transition-group/Transition';
import {getBigImg} from '../../util/util';
import './RatingsList.css';

class RatingsList extends Component {
    constructor() {
        super();
        this.state = {
            showPhoto: false,
            imgUrl: '',
            title: '',
            clientX: 0,
            clientY: 0,
        };
        this.handleShowPhoto = this.handleShowPhoto.bind(this);
        this.handleHidePhoto = this.handleHidePhoto.bind(this);
    }

    handleShowPhoto(imgUrl, title, e) {
        let rect=e.target.getBoundingClientRect();
        this.setState({
            showPhoto: true,
            imgUrl: getBigImg(imgUrl),
            title: title.join(''),
            clientX: rect.left,
            clientY: rect.top,
        })
    }

    handleHidePhoto() {
        this.setState({
            showPhoto: false
        })
    }

    render() {
        return (
            <ul className="ratings-list">
                {
                    this.props.ratings.map(rating => <RatingsItem
                        key={rating.order_id}
                        rating={rating}
                        handleClick={this.handleShowPhoto}
                    />)
                }
                <Transition timeout={100} in={this.state.showPhoto}>
                    {
                        (state) => (
                            <PhotoBrowser
                                imgUrl={this.state.imgUrl}
                                title={this.state.title}
                                clientY={this.state.clientY}
                                clientX={this.state.clientX}
                                handleClick={this.handleHidePhoto}
                                showPhoto={this.state.showPhoto}
                                className={`fade-${state}`}
                            />
                        )
                    }

                </Transition>
            </ul>
        );
    }
}

export default RatingsList;

