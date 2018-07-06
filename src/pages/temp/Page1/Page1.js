import React, {Component} from 'react';
import Header from 'components/temp/Header/Header';

import './Page1.css';

import image from './images/chrome.png';
// import image1 from './images/logo.svg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                <Header/>
                this is page1~
                <img src={image}/>
                {/*<img src={image1}/>*/}
            </div>
        )
    }
}