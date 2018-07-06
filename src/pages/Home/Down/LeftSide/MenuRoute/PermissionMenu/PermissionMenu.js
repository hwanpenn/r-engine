import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import SearchNew from "./Search/Search";
const { SubMenu } = Menu;
import { Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setMenuFirst,setMenuSecond,setMenuThird} from "actions/menuState";


class PermissionMenu extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
                onSelect={(key) => {
                    if(key.key==="permission11"){
                        this.props.setMenuFirst("权限");
                        this.props.setMenuThird("用户管理");
                        this.props.setMenuSecond("管理");
                    }else if(key.key==="permission22"){
                        this.props.setMenuFirst("权限");
                        this.props.setMenuThird("角色管理");
                        this.props.setMenuSecond("管理");
                    }
                }}
            >
                <SearchNew/>
                <SubMenu key="permission1" title={<span><Icon type="user" />管理</span>}>
                    <Menu.Item key="permission11"><Link to="/rule/home/permission/userSetting">用户管理</Link></Menu.Item>
                    <Menu.Item key="permission22"><Link to="/rule/home/permission/roleSetting">角色管理</Link></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        menuState: state.menuState,
        permissionUserInfo: state.permissionUserInfo
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

export default connect(mapStateToProps, mapDispatchToProps)(PermissionMenu);