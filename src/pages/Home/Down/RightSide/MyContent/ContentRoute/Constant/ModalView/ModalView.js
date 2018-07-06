import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, {Component} from 'react';
import { Alert } from 'antd';
import { message } from 'antd';
import {connect} from 'react-redux';
import {setProjectModifyName,setProjectAddName} from "actions/variableLib";
import {setProjectModifyName1,setProjectAddName2,setProjectAddName1,setProjectModifyNameType1,setProjectAddNameType1} from "actions/variableLib";
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 6 },
};

class RegistrationForm extends Component {

    render() {

// console.log("选择变量")
// console.log(this.props.variableItem.selectRowItem)
        let temp = null;
        if(this.props.variableLib.libOrItem==='lib'){
            if (this.props.variableLib.modalView==='add') {
                temp =<div>
                    <Row>
                        <Col span={8} style={{textAlign:'right'}}>新库名：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"1"} type="" placeholder={this.props.variableLib.projectAddName} onChange={(e)=>this.props.setProjectAddName(e.target.value)}/>
                        </Col>
                    </Row>
                </div>
                ;
            }else if(this.props.variableLib.modalView==='modify'){
                temp = <div>
                    <Row style={{paddingTop: 25}}>
                        <Col span={8} style={{textAlign:'right'}}>修改库名：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"2"} type=""  placeholder={this.props.variableLib.selectRow.mc} onChange={(e)=>this.props.setProjectModifyName(e.target.value)}/>
                            {/*<Input id={"2"} type=""  placeholder={this.props.variableLib.selectRow.mc} onChange={(e)=>this.props.setProjectModifyName(e.target.value)}/>*/}
                        </Col>
                    </Row></div>;
            }
        }else if(this.props.variableLib.libOrItem==='item'){
            if (this.props.variableLib.modalView==='add') {
                temp =<div>
                    <Row>
                        <Col span={8} style={{textAlign:'right'}}>新增变量名：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"3"} type="" placeholder={this.props.variableLib.projectAddName1} onChange={(e)=>this.props.setProjectAddName1(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 25,marginTop:10}}>
                        <Col span={8} style={{textAlign:'right'}}>新编码：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"4"} type="" placeholder={this.props.variableLib.projectAddName2} onChange={(e)=>this.props.setProjectAddName2(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 25,marginTop:10}}>
                        <Col span={8} style={{textAlign:'right'}}>变量类型：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            {/*<Input type="" placeholder={''} onChange={(e)=>this.props.setProjectAddNameType1(e.target.value)}/>*/}
                            <Select style={{width: 220}}    onChange={(value)=>this.props.setProjectAddNameType1(value)}>
                                <Select.Option value="String"> 字符串 </Select.Option>
                                <Select.Option value="Long"> 长整数 </Select.Option>
                                <Select.Option value="Integer"> 整数 </Select.Option>
                                <Select.Option value="Double"> 小数 </Select.Option>
                                <Select.Option value="Date"> 时间 </Select.Option>
                                <Select.Option value="Boolean"> 布尔值 </Select.Option>
                            </Select>
                        </Col>
                    </Row>
                </div>
                ;
            }else if(this.props.variableLib.modalView==='modify'){
                temp = <div>
                    <Row style={{paddingTop: 25}}>
                        <Col span={8} style={{textAlign:'right'}}>修改变量名：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Input id={"5"} type="" placeholder={this.props.variableItem.selectRowItem.mc} onChange={(e)=>this.props.setProjectModifyName1(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 25,marginTop:10}}>
                        <Col span={8} style={{textAlign:'right'}}>变量类型：</Col>
                        <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                            <Select style={{width: 220}} placeholder={this.props.variableItem.selectRowItem.type}  onChange={(value)=>this.props.setProjectModifyNameType1(value)}>
                                    <Select.Option value="String"> 字符串 </Select.Option>
                                    <Select.Option value="Long"> 长整数 </Select.Option>
                                    <Select.Option value="Integer"> 整数 </Select.Option>
                                    <Select.Option value="Double"> 小数 </Select.Option>
                                    <Select.Option value="Date"> 时间 </Select.Option>
                                    <Select.Option value="Boolean"> 布尔值 </Select.Option>
                            </Select>
                        </Col>
                    </Row>
                </div>;
            }
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
        variableLib: state.variableLib,
        variableItem: state.variableItem,

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
        setProjectModifyName1: (temp) => {
            dispatch(setProjectModifyName1(temp))
        },
        setProjectAddName1: (temp) => {
            dispatch(setProjectAddName1(temp))
        },
        setProjectAddName2: (temp) => {
            dispatch(setProjectAddName2(temp))
        },
        setProjectModifyNameType1: (temp) => {
            dispatch(setProjectModifyNameType1(temp))
        },
        setProjectAddNameType1: (temp) => {
            dispatch(setProjectAddNameType1(temp))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);