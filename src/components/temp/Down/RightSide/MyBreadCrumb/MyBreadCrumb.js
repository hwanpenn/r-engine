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
import MyTable1 from "components/temp/Mytable1/MyTable1";
import GuiZheMenu from "components/temp/GuiZheMenu/GuiZheMenu";
import GuiZheMenu1 from "components/temp/GuiZheMenu1/GuiZheMenu1";
import Pfk from "components/temp/Pfk/Pfk";
import Quanxian from "components/temp/Quanxian/Quanxian";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';




class MyBreadCrumb extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/rule/home/guiz/ku/clk">项目一</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/rule/home/guiz/ku/clk">项目资源</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/rule/home/guiz/xmzy/pfk">评分卡</Link></Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default MyBreadCrumb;