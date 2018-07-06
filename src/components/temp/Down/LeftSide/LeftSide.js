import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import GuiZheMenu from "components/temp/GuiZheMenu/GuiZheMenu";
import GuiZheMenu1 from "components/temp/GuiZheMenu1/GuiZheMenu1";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';




class LeftSide extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }} >
                <Switch>
                    <Route path="/rule/home/guiz"   component={GuiZheMenu}/>
                    <Route path="/rule/home/quanx"  component={GuiZheMenu1}/>

                </Switch>
            </Sider>
        )
    }
}

export default LeftSide;