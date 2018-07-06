import React, {Component} from 'react';
import {getUserInfo} from "actions/userInfo";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class RightSide extends Component {
    render() {

        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    Content
                </Content>
            </Layout>
        );
    }
}

export default RightSide;
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(LeftSide);