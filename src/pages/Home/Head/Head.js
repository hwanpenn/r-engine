import React, {Component} from 'react';
import { Layout, Menu} from 'antd';
import {connect} from 'react-redux';
import {getUserInfoLocal} from "actions/userInfo";
import {withRouter} from "react-router-dom";
const { Header } = Layout;
import {Route, Switch, Link} from 'react-router-dom';
import LogoutDropdown from './Logout/Logout';
import Mymenu from './Mymenu/Mymenu';

class Head extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <Header className="header" style={{ height: '50px',background: '#585E6B'}}>
                <img src={require('./img/logoRule.png')} alt=""  className="logo1"/>
                <LogoutDropdown curName={sessionStorage.getItem('name')}/>
                <Mymenu/>
            </Header>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        resInfo: state.resInfo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfoLocal: () => {
            dispatch(getUserInfoLocal())
        }
    }
};
const LoginHead = connect(mapStateToProps, mapDispatchToProps)(Head);
export default withRouter(LoginHead);