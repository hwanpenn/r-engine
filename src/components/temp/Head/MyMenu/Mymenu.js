// import { Menu, Dropdown, Icon } from 'antd';
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {URL} from 'config/config';
import axios from 'axios';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';




class Mymenu extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '50px',background: '#585E6B',border: 0 }}
            >
                <Menu.Item key="1"><Link to="/rule/home/guiz/ku/clk">规则</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/rule/home/quanx/setqx">权限</Link></Menu.Item>
            </Menu>
        )
    }
}

export default Mymenu;