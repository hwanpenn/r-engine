import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, {Component} from 'react';
import { Alert } from 'antd';
import { message } from 'antd';
import {connect} from 'react-redux';
import {setPermissionUserType,setPermissionUserUsername,setPermissionUserPassword,setPermissionUserPasswordComfirm,setPermissionUserCaption} from "actions/permissionUserInfoRole";
import {setOldPasswordModify,setNewPasswordModify,setNewPasswordComfirmModify,setCaptionModify} from "actions/permissionUserInfoRole";


class RegistrationForm extends React.Component {


    render() {


        let temp = null;
        if (this.props.permission.addOrModify==='add') {
            temp =<div>
                <Row>
                    <Col span={8} style={{textAlign:'right'}}>角色名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}><Input type="" placeholder={this.props.permissionUserInfo.username} onChange={(e)=>this.props.setPermissionUserUsername(e.target.value)}/></Col>
                </Row>
                </div>
            ;
        }else if(this.props.permission.addOrModify==='modify'){
            temp = <div>
                <Row style={{paddingTop: 25}}>
                    <Col span={8} style={{textAlign:'right'}}>新角色名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}><Input type="" placeholder={this.props.permissionUserInfo.captionModify} onChange={(e)=>this.props.setCaptionModify(e.target.value)}/></Col>
                </Row></div>;
        }
        return (
            <div>
                {temp}
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        permissionUserInfo: state.permissionUserInfo,
        permission: state.permission,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setPermissionUserType: (temp) => {
            dispatch(setPermissionUserType(temp))
        },
        setPermissionUserUsername: (temp) => {
            dispatch(setPermissionUserUsername(temp))
        },
        setPermissionUserPassword: (temp) => {
            dispatch(setPermissionUserPassword(temp))
        },
        setPermissionUserPasswordComfirm: (temp) => {
            dispatch(setPermissionUserPasswordComfirm(temp))
        },
        setPermissionUserCaption: (temp) => {
            dispatch(setPermissionUserCaption(temp))
        },
        setOldPasswordModify: (temp) => {
            dispatch(setOldPasswordModify(temp))
        },
        setNewPasswordModify: (temp) => {
            dispatch(setNewPasswordModify(temp))
        },
        setNewPasswordComfirmModify: (temp) => {
            dispatch(setNewPasswordComfirmModify(temp))
        },
        setCaptionModify: (temp) => {
            dispatch(setCaptionModify(temp))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);