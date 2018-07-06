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
import Quanxian from "components/temp/Quanxian/Quanxian";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// const Search = Input.Search;

class Down1 extends Component {
    render() {

        return (
            <Layout style={{ height: 624 }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SearchNew/>
                        <SubMenu key="sub1" title={<span><Icon type="user" />权限</span>}>
                            <Menu.Item key="2">权限管理1</Menu.Item>
                            <Menu.Item key="3">权限管理2</Menu.Item>
                            <Menu.Item key="4">权限管理3</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/home/ku/clk">权限</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/home/ku/clk">权限管理1</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {/*<MyTable/>*/}
                        <Switch>
                            <Route path="/home/quanx/setqx"  component={Quanxian}/>


                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Down1;
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(LeftSide);