import React, {Component} from 'react';
import './MenuFoodOpt.css';

class MenuFoodOpt extends Component {
    handleMinusNum(food){
        this.props.handleDeleteCart(food);
    }

    handleAddNum(food,e){
        let addBtn=e.target;
        this.props.handleAddCart(food,addBtn);
    }

    render() {
        return (
            <div className="food-opt">
                {this.props.foodNum > 0 &&
                <div className="opt-minus" onClick={this.handleMinusNum.bind(this,this.props.food)}>
                    <svg>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-add"></use>
                    </svg>
                </div>
                }
                {this.props.foodNum > 0 &&
                <div className="opt-num">{this.props.foodNum}</div>
                }
                <div className="opt-add" onClick={this.handleAddNum.bind(this,this.props.food)}>
                    <svg>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-minus"></use>
                    </svg>
                </div>
            </div>
        );
    }
}

export default MenuFoodOpt;

