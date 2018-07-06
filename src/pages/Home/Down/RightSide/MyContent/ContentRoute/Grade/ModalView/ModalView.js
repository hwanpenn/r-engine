import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, {Component} from 'react';
import { Alert } from 'antd';
import { message } from 'antd';
import {connect} from 'react-redux';
import {setProjectModifyName,setProjectAddName,setProjectAddName2,setProjectAddName3} from "actions/beforeGrade";
import {setProjectModifyName1,setProjectAddName1,setProjectAddName4} from "actions/beforeGrade";
import {getVariableLibInfo1,deleteVariableLib,modifyVariableLib,addVariableLib,setSelectRow,setShowModal1,setLibOrItem,setModalView} from "actions/beforeGrade";

// const FormItem = Form.Item;
// const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            children:[]
        };
    }
    componentWillMount(){
        this.getDataTemp('',1,50)
    }
    getDataTemp = (username,start,size) => {
        const params = {
            name:username,
            projectId:sessionStorage.getItem('projectId'),
            start:start,
            size:size,
        };
        this.props.getVariableLibInfo1(params);
    }


    // handleConfirmBlur = (e) => {
    //     const value = e.target.value;
    //     this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    // }
    // checkPassword = (rule, value, callback) => {
    //     const form = this.props.form;
    //     if (value && value !== form.getFieldValue('password')) {
    //         callback('两次密码不一样!');
    //     } else {
    //         callback();
    //     }
    // }
    // checkConfirm = (rule, value, callback) => {
    //     const form = this.props.form;
    //     if (value && this.state.confirmDirty) {
    //         form.validateFields(['confirm'], { force: true });
    //     }
    //     callback();
    // }
    // componentWillReceiveProps(nextProps){
    // }
    handleChange(value){
    this.props.setProjectAddName1(value.key)
    this.props.setProjectAddName4(value.label[1])
    }

    render() {
        // const { getFieldDecorator } = this.props.form;
        // const { autoCompleteResult } = this.state;

        // const formItemLayout = {
        //     labelCol: {
        //         xs: { span: 24 },
        //         sm: { span: 8 },
        //     },
        //     wrapperCol: {
        //         xs: { span: 24 },
        //         sm: { span: 10 },
        //     },
        // };

        let temp = null;
            if (this.props.beforeGrade.modalViewGrade==='add') {
                temp =<div>
                    <Row>
                        <Col span={8} style={{textAlign:'right'}}>新评分卡名：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input type=""  placeholder={this.props.beforeGrade.projectAddName}  onChange={(e)=>this.props.setProjectAddName(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 25,marginTop:10}}>
                        <Col span={8} style={{textAlign:'right'}}>新KEY：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"4"} type="" placeholder={this.props.beforeGrade.projectAddName2} onChange={(e)=>this.props.setProjectAddName2(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 25,marginTop:10}}>
                        <Col span={8} style={{textAlign:'right'}}>描述：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"4"} type="" placeholder={this.props.beforeGrade.projectAddName3} onChange={(e)=>this.props.setProjectAddName3(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} style={{marginTop: 15,textAlign:'right'}}>绑定库名：</Col>
                        <Col span={10} style={{    marginTop: 15,marginLeft: 15}}>
                            <Select  labelInValue  style={{ width: 210,border: 0 }} onChange={(value)=>this.handleChange(value)}>
                                {this.props.beforeGrade.children}
                            </Select>
                        </Col>
                    </Row>
                </div>
                ;
            }else if(this.props.beforeGrade.modalViewGrade==='modify'){
                temp = <div>
                    <Row style={{paddingTop: 25}}>
                        <Col span={8} style={{textAlign:'right'}}>修改评分卡名：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input type="" placeholder={this.props.beforeGrade.selectRowGradeSelect.name} onChange={(e)=>this.props.setProjectModifyName(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} style={{marginTop: 15,textAlign:'right'}}>修改绑定库名：</Col>
                        <Col span={10} style={{    marginTop: 15,marginLeft: 15}}>
                            <Select    placeholder={this.props.beforeGrade.selectRowGradeSelect.variableProjectName } style={{ width: 210,border: 0 }} onChange={(value)=>this.props.setProjectModifyName1(value)}>
                            {/*<Select    placeholder="981470934252650496" style={{ width: 210,border: 0 }} onChange={(value)=>this.props.setProjectModifyName1(value)}>*/}
                                {this.props.beforeGrade.children}
                            </Select>
                        </Col>
                    </Row>
                </div>;
            }

        return (
            <div>
                {temp}
            </div>
        );
    }
}

// const ModalView = Form.create()(RegistrationForm);


const mapStateToProps = (state) => {
    return {
        beforeGrade: state.beforeGrade,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProjectModifyName1: (temp) => {
            dispatch(setProjectModifyName1(temp))
        },
        setProjectAddName4: (temp) => {
            dispatch(setProjectAddName4(temp))
        },
        setProjectAddName1: (temp) => {
            dispatch(setProjectAddName1(temp))
        },
        setProjectModifyName: (temp) => {
            dispatch(setProjectModifyName(temp))
        },
        setProjectAddName3: (temp) => {
            dispatch(setProjectAddName3(temp))
        },
        setProjectAddName2: (temp) => {
            dispatch(setProjectAddName2(temp))
        },
        setProjectAddName: (temp) => {
            dispatch(setProjectAddName(temp))
        },
        getVariableLibInfo1: (params) => {
            dispatch(getVariableLibInfo1(params))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);