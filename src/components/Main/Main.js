import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import Ratings from '../Ratings/Ratings';
import Extras from '../Extras/Extras';

class Main extends Component {

    render() {
        return (
            <div className="shop-tab-main">
                <Menu
                    menu={this.props.menu}
                    currentTabIndex={this.props.currentTabIndex}
                    extras={this.props.extras}
                />
                <Ratings
                    scores={this.props.scores}
                    ratings={this.props.ratings}
                    currentTabIndex={this.props.currentTabIndex}
                />
                <Extras
                    extras={this.props.extras}
                    currentTabIndex={this.props.currentTabIndex}
                />
            </div>
        );
    }
}

export default Main;

