import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import React, {Component} from 'react';
import { Alert } from 'antd';
import { message } from 'antd';
import {connect} from 'react-redux';
import {setProjectModifyName,setProjectAddName,setProjectAddName2,setProjectAddName3,getVariableLibInfoDecision1,setProjectAddNameDecision1,setProjectAddNameDecision4} from "actions/beforeDecision";


class RegistrationForm extends Component {

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
        this.props.getVariableLibInfoDecision1(params);
    }
    handleChangeDecision(value){
        this.props.setProjectAddNameDecision1(value.key)
        this.props.setProjectAddNameDecision4(value.label[1])
    }

    render() {


        let temp = null;
        if (this.props.beforeDecision.modalViewGrade==='add') {
            temp =<div>
                <Row>
                    <Col span={8} style={{textAlign:'right'}}>新决策集名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Input type="" placeholder={this.props.beforeDecision.projectAddName}  onChange={(e)=>this.props.setProjectAddName(e.target.value)}/>
                    </Col>
                </Row>
                <Row style={{paddingTop: 25,marginTop:10}}>
                    <Col span={8} style={{textAlign:'right'}}>新KEY：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Input id={"4"} type="" placeholder={this.props.beforeDecision.projectAddName2} onChange={(e)=>this.props.setProjectAddName2(e.target.value)}/>
                    </Col>
                </Row>
                <Row style={{paddingTop: 25,marginTop:10}}>
                    <Col span={8} style={{textAlign:'right'}}>描述：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Input id={"4"} type="" placeholder={this.props.beforeDecision.projectAddName3} onChange={(e)=>this.props.setProjectAddName3(e.target.value)}/>
                    </Col>
                </Row>
                <Row style={{paddingTop: 25,marginTop:10}}>
                    <Col span={8} style={{textAlign:'right'}}>绑定库名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Select  labelInValue  style={{ width: 210,border: 0 }} onChange={(value)=>this.handleChangeDecision(value)}>
                            {this.props.beforeDecision.childrenDecision}
                        </Select>
                    </Col>
                </Row>
            </div>
            ;
        }else if(this.props.beforeDecision.modalViewGrade==='modify'){
            temp = <div>
                <Row style={{paddingTop: 25}}>
                    <Col span={8} style={{textAlign:'right'}}>修改决策集名：</Col>
                    <Col span={10} style={{    marginTop: -5,marginLeft: 15}}>
                        <Input type="" placeholder={this.props.beforeDecision.selectRowDecisionSelect.name} onChange={(e)=>this.props.setProjectModifyName(e.target.value)}/>
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



const mapStateToProps = (state) => {
    return {
        beforeDecision: state.beforeDecision

    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setProjectModifyName: (temp) => {
            dispatch(setProjectModifyName(temp))
        },
        setProjectAddName2: (temp) => {
            dispatch(setProjectAddName2(temp))
        },
        setProjectAddName3: (temp) => {
            dispatch(setProjectAddName3(temp))
        },
        setProjectAddName: (temp) => {
            dispatch(setProjectAddName(temp))
        },
        getVariableLibInfoDecision1: (temp) => {
            dispatch(getVariableLibInfoDecision1(temp))
        },
        setProjectAddNameDecision1: (temp) => {
            dispatch(setProjectAddNameDecision1(temp))
        },
        setProjectAddNameDecision4: (temp) => {
            dispatch(setProjectAddNameDecision4(temp))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);