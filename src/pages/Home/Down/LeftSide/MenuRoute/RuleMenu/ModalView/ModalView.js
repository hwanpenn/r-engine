import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, {Component} from 'react';
import { Alert } from 'antd';
import { message } from 'antd';
import {connect} from 'react-redux';
import {setProjectModifyName,setProjectAddName} from "actions/projectInfo";

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一样!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        };

        let temp = null;
        if (this.props.projectInfo.modalView==='add') {
            temp =<div>
                <Row>
                    <Col span={8} style={{textAlign:'right'}}>新增项目名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Input type="" defaultValue={''} onChange={(e)=>this.props.setProjectAddName(e.target.value)}/>
                    </Col>
                </Row>
                </div>
            ;
        }else if(this.props.projectInfo.modalView==='modify'){
            temp = <div>
                <Row style={{paddingTop: 25}}>
                    <Col span={8} style={{textAlign:'right'}}>修改项目名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Input type="" placeholder={this.props.projectInfo.selectProjectName} onChange={(e)=>this.props.setProjectModifyName(e.target.value)}/>
                    </Col>
                </Row></div>;
        }
        return (
            <div>
                {temp}
            </div>
        );
    }
}

const ModalView = Form.create()(RegistrationForm);


const mapStateToProps = (state) => {
    return {
        menuState: state.menuState,
        projectInfo: state.projectInfo

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProjectModifyName: (temp) => {
            dispatch(setProjectModifyName(temp))
        },
        setProjectAddName: (temp) => {
            dispatch(setProjectAddName(temp))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalView);