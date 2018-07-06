import React, {Component} from 'react';
import {getUserInfo} from "actions/userInfo";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
import SearchNew from "components/temp/Search/Search";
import MyTree from "components/temp/MyTree/MyTree";
import Clk from "components/temp/Clk/Clk";
import Jiaoben from "components/temp/Jiaoben/Jiaoben";
import Jueceji from "components/temp/Jueceji/Jueceji";
// import Grade from "components/Grade/Grade";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Input } from 'antd';
import MyTable from "components/temp/Mytable/MyTable";
import Pfk from "components/temp/Pfk/Pfk";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// const Search = Input.Search;

class GuiZheMenu1 extends Component {
    render() {

        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SearchNew/>
                <SubMenu key="sub1" title={<span><Icon type="user" />权限</span>}>
                    <Menu.Item key="2"><Link to="/home/quanx/setqx">权限管理1</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/home/quanx/setqx">权限管理2</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/home/quanx/setqx">权限管理3</Link></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default GuiZheMenu1;
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(LeftSide);