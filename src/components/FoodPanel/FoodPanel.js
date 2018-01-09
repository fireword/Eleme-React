import React, {Component} from 'react';
import MenuFoodOpt from '../MenuFoodOpt/MenuFoodOpt';
import {getBigImg} from '../../util/util';
import './FoodPanel.css';

class FoodPanel extends Component {
    constructor() {
        super();
        this.state = {
            tip: '下拉关闭',
        };
        this.touchStart = this.touchStart.bind(this);
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this);
        this.handleHidePanel = this.handleHidePanel.bind(this);
    }

    handleHidePanel() {
        this.props.handleHidePanel();
    }

    touchStart(e) {
        this.startTouchPos = e.touches[0].clientY
    }

    touchMove(e) {
        let moveDistance = (e.touches[0].clientY - this.startTouchPos) / 4;
        this.panel.style.transform = 'translate3d(0,' + moveDistance + 'px,0';
        if(moveDistance>0){
            this.tip.style.opacity = 1;
        }
        if (moveDistance >= 20 && moveDistance < 30) {
            this.setState({
                tip: '下拉关闭'
            })
        } else if (moveDistance >= 30) {
            this.setState({
                tip: '释放关闭'
            })
        }
    }

    touchEnd(e) {
        this.tip.style.opacity=0;
        let moveDistance = (e.changedTouches[0].clientY - this.startTouchPos) / 4;
        if (moveDistance > 30) {
            this.handleHidePanel();
        } else {
            this.panel.style.transition = '-webkit-transform 150ms ease-in-out';
            this.panel.style.transform = 'translate3d(0,0,0)';
            setTimeout(
                () => this.panel.style.transition = ''
                , 150)
        }
    }

    render() {
        const food = this.props.food;
        return (
            <div className="food-panel">
                <div className="panel-body"
                     onTouchStart={this.touchStart}
                     onTouchMove={this.touchMove}
                     onTouchEnd={this.touchEnd}
                     ref={panel => this.panel = panel}
                >
                    <div className="panel-tip" ref={tip => this.tip = tip}>{this.state.tip}</div>
                    <div className="img-body">
                        <img src={getBigImg(food.image_path)} alt=""/>
                        <div className="food-desc">{food.description}</div>
                    </div>
                    <div className="intro-body">
                        <div className="food-title">{food.name}</div>
                        <div className="food-desc">{food.tips.split(' ')[1]} 好评率{food.satisfy_rate}%</div>
                        <div className="food-price">¥{food.specfoods[0].price}</div>
                        <div className="intro-opt">
                            <MenuFoodOpt
                                handleAddCart={this.props.handleAddCart}
                                handleDeleteCart={this.props.handleDeleteCart}
                                food={food}
                                foodNum={this.props.foodsInCart.findIndex(f=>f.item_id===food.item_id)===-1?0:this.props.foodsInCart[this.props.foodsInCart.findIndex(f=>f.item_id===food.item_id)].food_num}
                            />
                        </div>
                    </div>
                </div>
                <div className="food-panel-mask" onClick={this.handleHidePanel}></div>
            </div>
        );
    }
}

export default FoodPanel;

