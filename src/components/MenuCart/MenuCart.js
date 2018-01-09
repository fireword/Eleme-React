import React, {Component} from 'react';
import './MenuCart.css';

class MenuCart extends Component {

    handleToggleCartList(){
        if(this.props.totalNum>0){
            this.props.handleToggleCartList();
        }
    }

    render() {
        const rule=this.props.extras.piecewise_agent_fee.rules[0].price;
        const totalNewPrice=this.props.totalNewPrice;
        let button=null;
        if(rule>totalNewPrice){
            button=(
                <div className="cart-opt">
                    <span>还差￥{(rule-totalNewPrice).toFixed(1)}起送</span>
                </div>
            )
        }else{
            button=(
                <div className="cart-opt active">
                    <span>去结算</span>
                </div>
            )
        }
        let className='basket-container';
        if(this.props.cartShake) className+=' basket-shake';
        if(this.props.totalNum===0) className+=' basket-empty';
        return (
            <div className="menu-cart">
                <div className="menu-cart-inner">
                    <div className={className} onClick={this.props.handleToggleCartList}>
                        {this.props.totalNum>0&&<div className="basket-num">{this.props.totalNum}</div>}
                    </div>
                    <div className="cart-info" onClick={this.handleToggleCartList.bind(this)}>
                        <h2>￥{this.props.totalNewPrice.toFixed(1)}
                            {this.props.totalNewPrice!==this.props.totalOldPrice&&
                            <span>￥{this.props.totalOldPrice.toFixed(1)}</span>
                            }
                        </h2>
                        <p>{this.props.extras.piecewise_agent_fee.tips}</p>
                    </div>
                    {button}
                </div>
            </div>
        );
    }
}

export default MenuCart;

