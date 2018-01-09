import React, {Component} from 'react';
import MenuFood from '../MenuFood/MenuFood';


class MenuFoodList extends Component {
    render() {
        return (
            <ul className="food-list">
                {
                    this.props.foods.map((food)=>{
                        return <MenuFood
                            key={food.item_id}
                            food={food}
                            handleShowPanel={this.props.handleShowPanel}
                            handleAddCart={this.props.handleAddCart}
                            handleDeleteCart={this.props.handleDeleteCart}
                            foodsInCart={this.props.foodsInCart}
                        />
                    })
                }
            </ul>
        );
    }
}

export default MenuFoodList;

