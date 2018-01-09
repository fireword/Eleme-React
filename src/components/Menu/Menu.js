import React, {Component} from 'react';
import update from 'immutability-helper';
import Transition from 'react-transition-group/Transition';
import './Menu.css';
import MenuCategory from '../MenuCategory/MenuCategory';
import MenuFoodBlock from '../MenuFoodBlock/MenuFoodBlock';
import MenuCart from '../MenuCart/MenuCart';
import DialogCart from '../DialogCart/DialogCart';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //初始化时给每个分类添加一个category_num=0
            menu: this.props.menu.map((m) => update(m, {$merge: {category_num: 0}})),
            foodsInCart: [],
            totalNum: 0,
            totalOldPrice: 0,
            totalNewPrice: 0,
            bounce: false,
            cartShake: false,
            showCartList: false,
        };
        this.balls=[{show: false}, {show: false}, {show: false}, {show: false}, {show: false}];
        this.handleAddCart = this.handleAddCart.bind(this);
        this.handleDeleteCart = this.handleDeleteCart.bind(this);
        this.handleClearCart = this.handleClearCart.bind(this);
        this.handleBounceBall = this.handleBounceBall.bind(this);
        this.handleToggleCartList = this.handleToggleCartList.bind(this);
    }

    componentDidMount(){
        this.optDomWidth=document.querySelector('.opt-add svg').clientWidth;
        let count=this.balls.length;
        let ballEl=document.querySelectorAll('.bounce-ball');
        while(count--){
            let ball=this.balls[count];
            ball.el=ballEl[count];
            ball.inner=ball.el.firstChild;
        }
    }

    handleBounceBall(addBtn) {
        let rect=addBtn.getBoundingClientRect();
        let count=this.balls.length;
        while(count--){
            let ball=this.balls[count];
            if(!ball.show){
                ball.offsetLeft=rect.left-this.optDomWidth-(this.optDomWidth-addBtn.clientWidth)/2;
                ball.offsetTop=-(window.innerHeight-rect.top-this.optDomWidth*2);
                ball.show=true;
                return;
            }
        }
    }

    handleToggleCartList() {
        this.setState((prevState) => ({
            showCartList: !prevState.showCartList
        }))
    }

    handleClearCart() {
        this.setState((prevState) => ({
            foodsInCart: [],
            totalNum: 0,
            totalOldPrice: 0,
            totalNewPrice: 0,
            menu: prevState.menu.map((m) => update(m, {$merge: {category_num: 0}}))
        }))
    }

    handleAddCart(food, addBtn) {
        this.handleBounceBall(addBtn);
        let categoryIndex = this.state.menu.findIndex(category => food.category_id === category.id);
        let foodIndex = this.state.foodsInCart.findIndex(f => food.item_id === f.item_id);
        food = update(food, {$merge: {food_num: 1}});//给food添加food_num=1
        this.setState((prevState) => ({
            foodsInCart: foodIndex === -1 ?
                prevState.foodsInCart.concat(food) :
                update(prevState.foodsInCart, {[foodIndex]: {food_num: {$set: prevState.foodsInCart[foodIndex].food_num + 1}}}),
            menu: update(prevState.menu, {[categoryIndex]: {category_num: {$set: prevState.menu[categoryIndex].category_num + 1}}}),
            totalNum: prevState.totalNum + 1,
            totalOldPrice: prevState.totalOldPrice + (food.specfoods[0].original_price || food.specfoods[0].price),
            totalNewPrice: prevState.totalNewPrice + food.specfoods[0].price,
            cartShake: true
        }));
        setTimeout(() => {
            this.setState({
                cartShake: false
            })
        }, 500)
    }

    handleDeleteCart(food) {
        let categoryIndex = this.state.menu.findIndex(category => food.category_id === category.id);
        let foodIndex = this.state.foodsInCart.findIndex(f => food.item_id === f.item_id);
        //如果当前food的数量是1 则删除该food
        if (this.state.foodsInCart[foodIndex].food_num === 1) {
            this.setState((prevState) => ({
                foodsInCart: update(prevState.foodsInCart, {$splice: [[foodIndex, 1]]}),//删除该food
                menu: update(prevState.menu, {[categoryIndex]: {category_num: {$set: prevState.menu[categoryIndex].category_num - 1}}}),
                totalNum: prevState.totalNum - 1,
                totalOldPrice: prevState.totalOldPrice - (food.specfoods[0].original_price || food.specfoods[0].price),
                totalNewPrice: prevState.totalNewPrice - food.specfoods[0].price,
            }), () => {//setState 之后的回调  如果foodsInCart的length为0，则隐藏CartList
                if (this.state.foodsInCart.length === 0 && this.state.showCartList === true) {
                    this.handleToggleCartList();
                }
            })
        } else {
            this.setState((prevState) => ({
                foodsInCart: update(prevState.foodsInCart, {[foodIndex]: {food_num: {$set: prevState.foodsInCart[foodIndex].food_num - 1}}}),
                menu: update(prevState.menu, {[categoryIndex]: {category_num: {$set: prevState.menu[categoryIndex].category_num - 1}}}),
                totalNum: prevState.totalNum - 1,
                totalOldPrice: prevState.totalOldPrice - (food.specfoods[0].original_price || food.specfoods[0].price),
                totalNewPrice: prevState.totalNewPrice - food.specfoods[0].price,
            }))
        }

    }

    render() {
        return (
            <div className="shop-detail-menu" style={{display: this.props.currentTabIndex === 0 ? '' : 'none'}}>
                <div className="menu-inner">
                    <MenuCategory
                        menuCategory={this.state.menu}
                    />
                    <MenuFoodBlock
                        menuFoodBlock={this.state.menu}
                        handleAddCart={this.handleAddCart}
                        handleDeleteCart={this.handleDeleteCart}
                        foodsInCart={this.state.foodsInCart}
                    />
                </div>
                <MenuCart
                    totalNum={this.state.totalNum}
                    totalOldPrice={this.state.totalOldPrice}
                    totalNewPrice={this.state.totalNewPrice}
                    cartShake={this.state.cartShake}
                    handleToggleCartList={this.handleToggleCartList}
                    extras={this.props.extras}
                />
                <Transition timeout={100} in={this.state.showCartList}>
                    {
                        (state) => (
                            <DialogCart
                                foods={this.state.foodsInCart}
                                extras={this.props.extras}
                                totalNewPrice={this.state.totalNewPrice}
                                handleToggleCartList={this.handleToggleCartList}
                                handleClearCart={this.handleClearCart}
                                handleAddCart={this.handleAddCart}
                                handleDeleteCart={this.handleDeleteCart}
                                foodsInCart={this.state.foodsInCart}
                                showCartList={this.state.showCartList}
                                className={`fade-${state}`}
                            />
                        )
                    }
                </Transition>
                {
                    this.balls.map((ball, index) => {
                        return (
                            <Transition
                                timeout={20}
                                in={ball.show}
                                key={index}
                                onEntering={()=>{
                                    ball.el.style.opacity=1;
                                    ball.el.style.transform='translate3d(0,'+ball.offsetTop+'px,0)';
                                    ball.inner.style.transform='translate3d('+ball.offsetLeft+'px,0,0)'
                                }}
                                onEntered={()=>{
                                    ball.el.style.opacity=0;
                                    ball.el.style.transform='translate3d(0,0,0)';
                                    ball.inner.style.transform='translate3d(0,0,0)';
                                    ball.show=false;
                                }}
                            >
                                { (state) => (
                                <div
                                    className={`bounce-ball bounce-${state}`}
                                >
                                    <div className="ball-inner"
                                    >
                                    </div>
                                </div>
                                )}
                            </Transition>
                        )
                    })
                }
            </div>
        );
    }
}

export default Menu;

