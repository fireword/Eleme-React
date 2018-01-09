import React, {Component} from 'react';
import MenuFoodList from '../MenuFoodList/MenuFoodList';
import FoodPanel from '../FoodPanel/FoodPanel';
import {Element} from 'react-scroll';
import './MenuFoodBlock.css';
function stopDefault(e){
    e.preventDefault();
}
class MenuFoodBlock extends Component {
    constructor() {
        super();
        this.state={
            showPanel:false,
            panelFood:null
        };
        this.handleShowPanel = this.handleShowPanel.bind(this);
        this.handleHidePanel = this.handleHidePanel.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e){
        let wrapper=document.querySelector('.shop-detail-wrapper');
        wrapper.scrollTop=e.target.scrollTop;
    }

    handleShowPanel(food){
        this.setState({
            showPanel:true,
            panelFood:food
        });
        //禁止浏览器下拉刷新
        document.querySelector('body').addEventListener('touchmove', stopDefault);
    }

    handleHidePanel(){
        this.setState({
            showPanel:false,
            panelFood:null
        });
        document.querySelector('body').removeEventListener('touchmove', stopDefault);
    }

    render() {
        return (
            <Element id="menu-food-block" className="menu-food-block" onScroll={this.handleScroll}>
                {
                    this.props.menuFoodBlock.map((foodBlock,index) => {
                        return (
                        <Element name={'element'+index} key={foodBlock.id}>
                            <div className="food-block">
                                <div className="food-block-title">
                                    <h2>
                                        <strong>{foodBlock.name}</strong>
                                        <span>{foodBlock.description}</span>
                                    </h2>
                                </div>
                                <MenuFoodList
                                    foods={foodBlock.foods}
                                    handleShowPanel={this.handleShowPanel}
                                    handleAddCart={this.props.handleAddCart}
                                    handleDeleteCart={this.props.handleDeleteCart}
                                    foodsInCart={this.props.foodsInCart}
                                />
                            </div>
                        </Element>
                        )
                    })
                }
                {this.state.showPanel&&
                <FoodPanel
                    food={this.state.panelFood}
                    handleHidePanel={this.handleHidePanel}
                    handleAddCart={this.props.handleAddCart}
                    handleDeleteCart={this.props.handleDeleteCart}
                    foodsInCart={this.props.foodsInCart}
                />}
            </Element>
        );
    }
}

export default MenuFoodBlock;

