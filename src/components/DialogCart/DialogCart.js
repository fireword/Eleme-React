import React, {Component} from 'react';
import MenuFoodOpt from '../MenuFoodOpt/MenuFoodOpt';
import './DialogCart.css';

class DialogActivity extends Component {

    handleClearCart(){
        this.props.handleClearCart();
        this.props.handleToggleCartList();
    }

    render() {
        const foods = this.props.foods;
        // 这里处理优惠问题 满30减18  满50减30
        const attribute=JSON.parse(this.props.extras.activities[0].attribute);
        const rules = Object.keys(attribute);
        const totalNewPrice = this.props.totalNewPrice;
        let tip=null;
        let index=-1;
        // 计算当前总价在优惠里的区间
        for(let i=0,length=rules.length;i<length;i++){
            if(totalNewPrice>=rules[i]) index=i;
        }
        // 再根据区间 显示对应的优惠信息
        if(index===-1){
            tip=(
                <div className="discount-tip">
                    {this.props.extras.activities[0].description}
                </div>
            )
        }else{
            tip=(
                <div className="discount-tip">
                    已满{rules[index]},结算减<span>{attribute[rules[index]][1]}</span>元
                </div>
            )
        }
        return (
            <div className="dialog-cart">
                <div
                    className={'dialog-cart-mask '+this.props.className}
                    onClick={this.props.handleToggleCartList}>
                </div>
                <div
                    className={'dialog-cart-content '+this.props.className}
                >
                    {tip}
                    <div
                        className={'cart-title '+this.props.className}
                    >
                        <p>已选商品</p>
                        <div className="cart-clear" onClick={this.handleClearCart.bind(this)}>
                            <svg>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-remove"></use>
                            </svg>
                            <span>清空</span>
                        </div>
                    </div>
                    <div className="cart-main">
                        <ul>
                            {
                                foods.map((food, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="cart-item-name"><em>{food.name}</em></div>
                                            <div className="cart-item-price">
                                                <span className="item-oldPrice">{food.specfoods[0].original_price&&'¥'+food.specfoods[0].original_price}</span>
                                                <span className="item-newPrice">¥{food.specfoods[0].price}</span>
                                            </div>
                                            <div className="cart-item-opt">
                                                <MenuFoodOpt
                                                    handleAddCart={this.props.handleAddCart}
                                                    handleDeleteCart={this.props.handleDeleteCart}
                                                    food={food}
                                                    foodNum={this.props.foodsInCart.findIndex(f=>f.item_id===food.item_id)===-1?0:this.props.foodsInCart[this.props.foodsInCart.findIndex(f=>f.item_id===food.item_id)].food_num}
                                                />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DialogActivity;

