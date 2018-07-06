import React, {Component} from 'react';
import {getUserInfo} from "actions/userInfo";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import LogoutDropdown from './Logout/Logout';
import Mymenu from './Mymenu/Mymenu';
// import { Component, OnInit } from '@angular/core';

class Head extends Component {
    constructor(props) {
        super(props);
        // this.props=getUserInfo();
        // console.log("内容"+this.props.userInfo.isLoading);
    }
    componentDidMount() {
        // this.props.getUserInfo()
        // sessionStorage.setItem('userName',values.userName);
        // const userName = sessionStorage.getItem('userName');
    }
    render() {
        // () => this.props.getUserInfo();
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        // console.log("内容"+this.props.userInfo.userInfo);
        // this.props.userInfo=this.props.getUserInfo();
        // const {userInfo, isLoading, errorMsg} = this.state;
        // const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
        <Layout style={{ height: '50px',background: '#585E6B'}}>
            <Header className="header" style={{ height: '50px',background: '#585E6B'}}>
                <div className="logo" />
                <LogoutDropdown curName={sessionStorage.getItem('userName')}/>
                <Mymenu/>
            </Header>
        </Layout>
        );
    }
}

// export default Head;
const mapStateToProps = (state) => {

    return {
        resInfo: state.resInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (url,getOrPost,params,route) => {
            dispatch(getInfo(url,getOrPost,params,route))
        }
    }
};

const LoginHead = connect(mapStateToProps, mapDispatchToProps)(Head);

export default withRouter(LoginHead);
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(Head);