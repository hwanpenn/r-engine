import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import { Menu } from 'antd';
import {Route, Switch, Link} from 'react-router-dom';
import {setChioce} from "actions/headMenuState";
import {connect} from 'react-redux';
import {setMenuFirst,setMenuSecond,setMenuThird} from "actions/menuState";
import { browserHistory } from 'react-router';


class Mymenu extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount(){

    }
    componentDidMount(){
        let hrefTemp = window.location.href;
        let tempName = '';
        if(hrefTemp.indexOf("permission")>=0){
            tempName = "权限"
        }else{
            tempName = "规则";
        }
        this.props.setMenuFirst(tempName);
    }
    componentWillReceiveProps(nextProps){
    }
    componentDidUpdate(){
    }
    render() {
        let temp = '';
        if(sessionStorage.getItem('role')==="管理员"){
            temp =
                <Menu.Item key="277" ><Link to="/rule/home/permission/userSetting">权限</Link></Menu.Item>
        }
        let hrefTemp = window.location.href;
        let tempIndex = '';
        if(hrefTemp.indexOf("permission")>=0){
            tempIndex = "277";
        }else{
            tempIndex = "177";
        }
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={tempIndex}
                style={{ lineHeight: '50px',background: '#585E6B',border: 0 }}
                onSelect={(key) => {
                    if(key.key==="177"){
                        this.props.setMenuFirst("规则");
                        sessionStorage.setItem('mainMenu',key.key);
                    }else if(key.key==="277"){
                        this.props.setMenuFirst("权限");
                        this.props.setMenuThird("管理");
                        this.props.setMenuSecond("用户");
                        sessionStorage.setItem('mainMenu',key.key);
                    }
                }}
            >
                <Menu.Item key="177" ><Link to="/rule/home/rule/library/constant">规则</Link></Menu.Item>
                {temp}
            </Menu>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menuState: state.menuState
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setMenuFirst: (firstTemp) => {
            dispatch(setMenuFirst(firstTemp))
        },
        setMenuSecond: (secondTemp) => {
            dispatch(setMenuSecond(secondTemp))
        },
        setMenuThird: (thirdTemp) => {
            dispatch(setMenuThird(thirdTemp))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Mymenu);