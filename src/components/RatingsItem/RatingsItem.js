import React, {Component} from 'react';
import Star from '../Star/Star';

import {getImg} from '../../util/util';
import './RatingsItem.css';

class RatingsItem extends Component {

    render() {
        const item =this.props.rating;
        return (
            <li className="ratings-list-item">
                <div className="rat-avatar">
                    <img src={item.avatar?'':'/img/rating-avatar.webp'} alt=""/>
                </div>
                <div className="rat-detail">
                    <div className="rat-name">
                        {item.username}<span>{item.rated_at}</span>
                    </div>
                    <div className="rat-star">
                        <div className="rat-star-wrapper">
                            <Star rating={item.rating}/>
                        </div>
                        <span>{item.time_spent_desc}</span>
                    </div>
                    <div className="rat-msg">{item.rating_text}</div>
                    <div className="rat-pic">
                        {
                            item.order_images&&item.order_images.length>0&&
                            item.order_images.map((img,index)=>{
                                return(
                                    <div className="rat-pic-item"
                                         key={index}
                                         onClick={this.props.handleClick.bind(this,img.image_hash,img.food_names)}>
                                        <img src={getImg(img.image_hash)} alt={img.image_hash}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="rat-tags">
                        {
                            item.food_ratings.length>0&&
                            item.food_ratings.map((food)=>{
                                return(
                                    <div className="rat-tag" key={food.food_id}>{food.rate_name}</div>
                                )
                            })
                        }

                    </div>
                </div>
            </li>
        );
    }
}

export default RatingsItem;

