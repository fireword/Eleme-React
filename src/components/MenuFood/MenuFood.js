import React, {Component} from 'react';
import './MenuFood.css';
import MenuFoodOpt from '../MenuFoodOpt/MenuFoodOpt';

import {getImg} from '../../util/util';

class MenuFood extends Component {
    render() {
        const food = this.props.food;
        return (
            <li>
                <div className="food-avatar" onClick={this.props.handleShowPanel.bind(this,food)}>
                    {food.attributes.length>0&&<span className="attr-tag" content={food.attributes[0].icon_name}>{food.attributes[0].icon_name}</span>}
                    {food.image_path && <img src={getImg(food.image_path)} alt=""/>}
                </div>
                <div className="food-detail">
                    <div className="food-title">{food.name}</div>
                    {food.description&&<div className="food-description">{food.description}</div>}
                    <div className="food-intro">{food.tips.split(' ')[1]} 好评率{food.satisfy_rate}%</div>
                    {food.activity &&
                    <div className="food-discount">
                        <span className="num" content={((food.specfoods[0].price/food.specfoods[0].original_price)*10).toFixed(1)+'折'}>{((food.specfoods[0].price/food.specfoods[0].original_price)*10).toFixed(1)}折</span>
                        <span className="txt" content={food.activity.applicable_quantity_text}>{food.activity.applicable_quantity_text}</span>
                    </div>
                    }
                    <div className="food-price">
                        <span className="new-price">{food.specfoods[0].price}</span>
                        {food.specfoods[0].original_price &&
                        <span className="old-price">￥{food.specfoods[0].original_price}</span>}
                    </div>
                    <div className="food-opt-wrapper">
                        <MenuFoodOpt
                            handleAddCart={this.props.handleAddCart}
                            handleDeleteCart={this.props.handleDeleteCart}
                            food={food}
                            foodNum={this.props.foodsInCart.findIndex(f=>f.item_id===food.item_id)===-1?0:this.props.foodsInCart[this.props.foodsInCart.findIndex(f=>f.item_id===food.item_id)].food_num}
                        />
                    </div>
                </div>
            </li>
        );
    }
}

export default MenuFood;

