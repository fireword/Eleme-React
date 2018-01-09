import React, {Component} from 'react';

import Shell from './components/Shell/Shell';
import Header from './components/Header/Header';
import Tab from './components/Tab/Tab';
import Main from './components/Main/Main';


import extras from './data/extras.json';
import menu from './data/menu.json';
import scores from './data/scores.json';
import ratings from './data/ratings.json';

import './App.css';


import DialogBrief from './components/DialogBrief/DialogBrief';
import DialogActivity from './components/DialogActivity/DialogActivity';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            extras:extras,
            showBrief:false,
            showActivity:false,
            currentTabIndex:0,
            menu: menu,
            fetched: false
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleShowBrief = this.handleShowBrief.bind(this);
        this.handleShowActivity = this.handleShowActivity.bind(this);
        this.handleChangeTab = this.handleChangeTab.bind(this);
    }

    componentDidMount() {
        //模拟获取数据
        this.fetchData();
    }

    handleChangeTab(index){
        this.setState({
            currentTabIndex:index
        })
    }

    handleShowBrief(){
        this.setState((prevState) => ({
            showBrief: !prevState.showBrief
        }));
    }

    handleShowActivity(){
        this.setState((prevState) => ({
            showActivity: !prevState.showActivity
        }))
    }

    fetchData() {
        setTimeout(() => {
            this.setState(() => ({
                fetched: true,
            }))
        }, 300)
    }

    render() {
        return (
            <div className="shop-detail-wrapper" ref={wrapper=>this.wrapper=wrapper}>
                {!this.state.fetched && <Shell/>}
                {this.state.fetched &&
                // 这里不会生成多余的标签
                <React.Fragment>
                    <Header
                        extras={this.state.extras}
                        handleShowBrief={this.handleShowBrief}
                        handleShowActivity={this.handleShowActivity}
                    />
                    <Tab
                        currentTabIndex={this.state.currentTabIndex}
                        handleChangeTab={this.handleChangeTab}
                    />
                    <Main
                        menu={menu}
                        scores={scores}
                        ratings={ratings}
                        extras={this.state.extras}
                        currentTabIndex={this.state.currentTabIndex}
                    />
                    {this.state.showBrief&&
                    <DialogBrief
                        brief={this.state.extras}
                        onHandleClick={this.handleShowBrief}
                    />
                    }
                    {this.state.showActivity&&
                    <DialogActivity
                        activities={this.state.extras.activities}
                        onHandleClick={this.handleShowActivity}
                    />
                    }
                </React.Fragment>
                }
            </div>
        )
    }
}

export default App;