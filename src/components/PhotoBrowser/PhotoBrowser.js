import React, {Component} from 'react';
import './PhotoBrowser.css';

class PhotoBrowser extends Component {

    render() {
        return (
            <div
                className="photo-browser"
                onClick={this.props.handleClick}
                style={{display:this.props.showPhoto?'block':'none'}}
            >
                <div
                    className={'photo-browser-mask '+this.props.className}
                >
                </div>
                <div className={"photo-content "+this.props.className}
                style={{top:this.props.clientY+'px',left:this.props.clientX+'px'}}
                >
                    <img src={this.props.imgUrl} alt=""/>
                </div>
                <p className={"photo-browser-title "+this.props.className}>{this.props.title}</p>
            </div>
        );
    }
}

export default PhotoBrowser;
