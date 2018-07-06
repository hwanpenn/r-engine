import React, {Component} from 'react';
import { Route, Switch, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                <div>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/userinfo">UserInfo</Link></li>
                </div>
        );
    }
}

export default Header;