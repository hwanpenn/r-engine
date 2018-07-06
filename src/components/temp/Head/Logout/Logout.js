import { Menu, Dropdown, Icon } from 'antd';
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {URL} from 'config/config';
import axios from 'axios';



class LogoutDropdown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a onClick={() => {
                                    sessionStorage.setItem('token','');
                                    sessionStorage.setItem('userName','');
                                    this.props.history.push("/rule/login");
                    }}>退出</a>
                </Menu.Item>
                <Menu.Divider />
            </Menu>
        );
        return (
            <div className="nameCss">
            <Dropdown overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    {this.props.curName} <Icon type="down" />
                </a>
            </Dropdown>
            </div>
        )
    }
}

export default withRouter(LogoutDropdown);