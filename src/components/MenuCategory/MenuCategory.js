import React, {Component} from 'react';
import {Link as LinkTo} from 'react-scroll';
import './MenuCategory.css';
import {getImg} from '../../util/util';

class MenuCategory extends Component {
    render() {
        return (
            <div className="shop-detail-menu-category">
                <ul className="menu-category">
                    {
                        this.props.menuCategory.map((category,index)=>{
                            return(
                                <li key={index} className={this.props.currentIdx===index?'on':''}>
                                    <LinkTo
                                        containerId="menu-food-block"
                                        to={'element'+index}
                                        spy={true}
                                        smooth={true}
                                        duration={300}
                                        activeClass="on"
                                    >
                                        {
                                            category.icon_url&&<img src={getImg(category.icon_url)} alt=""/>
                                        }
                                        <span>{category.name}</span>
                                        {category.category_num>0&&<i>{category.category_num}</i>}
                                    </LinkTo>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default MenuCategory;

