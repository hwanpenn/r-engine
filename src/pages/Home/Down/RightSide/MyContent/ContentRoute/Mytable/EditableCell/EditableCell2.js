import React, {Component} from 'react';
import { Table } from 'antd';
import { Row, Col,Icon } from 'antd';
import { Modal, Button } from 'antd';
import {connect} from 'react-redux';
import {getGradeDataTemp,addVariable,deleteVariable,deleteCondition,addCondition} from "actions/grade";
import {setDataSource1,setDataSource2} from "actions/grade";
import {setKeyNum,setKeyNum1} from "actions/grade";
import { Input  } from 'antd';
import { Select } from 'antd';
import { Popconfirm } from 'antd';

const Search = Input.Search;




class EditableCell2 extends Component {
    constructor(props) {
        super(props);
        let temp = this.props.value;
        let valueTemp = '';
        let valueTemp1 = '';
        let valueTemp2 = '';
        let valueTemp3 = '';
        let valueTemp4 = '';
        temp.map((item,index) =>{
            if(index===0){
                valueTemp = item.sign;
                valueTemp1 = item.value;
            }else if(index===1){
                valueTemp2 = item.logic;
                valueTemp3 = item.sign;
                valueTemp4 = item.value;
            }
        })

        this.state = {
            value: valueTemp,
            value1: valueTemp1,
            value2: valueTemp2,
            value3:valueTemp3,
            value4:valueTemp4,
            editable: false,
            index: this.props.index,
        };
    }
    handleChange = (value) => {
        this.setState({ value: value});
    }
    handleChange1 = (e) => {
        const value = e.target.value;
        this.setState({ value1: value});
    }
    handleChange2 = (value) => {
        this.setState({ value2: value});
        // console.log(value)
    }
    handleChange3 = (value) => {
        this.setState({ value3: value});
    }
    handleChange4 = (e) => {
        const value = e.target.value;
        this.setState({ value4: value});
    }
    changeData3(testTemp){
        let i=0;
        const end = testTemp.length;
        let result = [];
        let keyTemp =testTemp[0].key1;
        let startIndex = 0;
        testTemp.map((item,index)=>{
            if(index===0){
                result.push({"variable":item.variable,"variableName":item.variableName,"weight":item.weight,
                    "conditions":[{"score":item.score,"condition":item.conditions}]}) ;

            }else {
                if(item.key1===keyTemp){
                    result[startIndex].conditions.push({"score":item.score,"condition":item.conditions})
                }else{
                    result.push({"variable":item.variable,"variableName":item.variableName,"weight":item.weight,"conditions":[{"score":item.score,"condition":item.conditions}]}) ;
                    keyTemp=item.key1;
                    startIndex++;
                }

            }
        })
        return result;
    }
    check = () => {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
        const dataSource1 = this.props.grade.dataSource1;
        const indexTemp = this.state.index;
        let conditionsTemp =[];
        let condition1 ={sign:'',value:''};
        let condition2 ={logic:'',sign:'',value:''};
        if(this.state.value!==''&&this.state.value!==undefined){
            condition1.sign = this.state.value;
        }
        if(this.state.value1!==''&&this.state.value1!==undefined){
            condition1.value = this.state.value1;
        }
        if(this.state.value2!==''&&this.state.value2!==undefined){
            condition2.logic = this.state.value2;
        }
        if(this.state.value3!==''&&this.state.value3!==undefined){
            condition2.sign = this.state.value3;
        }
        if(this.state.value4!==''&&this.state.value4!==undefined){
            condition2.value = this.state.value4;
        }
        conditionsTemp.push(condition1)
        conditionsTemp.push(condition2)
        dataSource1[indexTemp].conditions = conditionsTemp ;
        let dataSource211=this.changeData3(dataSource1);
        this.props.setDataSource1(dataSource1);
        this.props.setDataSource2(dataSource211);
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value,value1,value2,value3,value4, editable } = this.state;
        let valueCN = '';
        if(value===">"){
            valueCN = "大于"
        }else if(value==="<"){
            valueCN = "小于"
        }else if(value==="=="){
            valueCN = "等于"
        }else if(value===">="){
            valueCN = "大于等于"
        }else if(value==="<="){
            valueCN = "小于等于"
        }else if(value===""){
            valueCN = ""
        }
        let valueCN2 = '';
        if(value2==="&&"){
            valueCN2 = "并且"
        }else if(value2==="||"){
            valueCN2 = "或者"
        }
        let valueCN3 = '';
        if(value3===">"){
            valueCN3 = "大于"
        }else if(value3==="<"){
            valueCN3 = "小于"
        }else if(value3==="=="){
            valueCN3 = "等于"
        }else if(value3===">="){
            valueCN3 = "大于等于"
        }else if(value3==="<="){
            valueCN3 = "小于等于"
        }else if(value3===""){
            valueCN3 = ""
        }
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <Row>
                            <Col span={5}><div className="editable-cell-input-wrapper">
                                <Select defaultValue={value} style={{ width: 90,border: 0 }} onChange={this.handleChange}>
                                    <Select.Option value=">"> 大于 </Select.Option>
                                    <Select.Option value="<"> 小于 </Select.Option>
                                    <Select.Option value="=="> 等于 </Select.Option>
                                    <Select.Option value=">="> 大于等于 </Select.Option>
                                    <Select.Option value="<="> 小于等于 </Select.Option>
                                </Select>
                            </div></Col>
                            <Col span={4}>
                                <Input   defaultValue={value1} style={{ width: 60}} onChange={this.handleChange1}/>
                            </Col>
                            <Col span={5}>
                                <Select allowClear={true} defaultValue={value2}  style={{ width: 90,border: 0 }} onChange={this.handleChange2}>
                                    <Select.Option value="&&"> 并且 </Select.Option>
                                    <Select.Option value="||"> 或者 </Select.Option>
                                    {/*<Select.Option value=""> 空 </Select.Option>*/}
                                </Select>
                            </Col>
                            <Col span={5}>
                                <Select allowClear={true}  defaultValue={value3} style={{ width: 90,border: 0 }} onChange={this.handleChange3}>
                                    <Select.Option value=">"> 大于 </Select.Option>
                                    <Select.Option value="<"> 小于 </Select.Option>
                                    <Select.Option value="=="> 等于 </Select.Option>
                                    <Select.Option value=">="> 大于等于 </Select.Option>
                                    <Select.Option value="<="> 小于等于 </Select.Option>
                                    {/*<Select.Option value=""> 空 </Select.Option>*/}
                                </Select>
                            </Col>
                            <Col span={5}>
                                <Input  style={{ width: 60}} defaultValue={value4} onChange={this.handleChange4} />
                                <Icon
                                    type="check"
                                    className="editable-cell-icon-check"
                                    onClick={this.check}
                                /></Col>
                        </Row>

                        :
                        <Row>
                            <Col span={5}><div className="editable-cell-text-wrapper">
                                {valueCN}
                            </div></Col>
                            <Col span={5}><div className="editable-cell-text-wrapper">
                                {value1 || ' '}
                            </div></Col>
                            <Col span={4}><div className="editable-cell-text-wrapper">
                                {valueCN2}
                            </div></Col>
                            <Col span={5}><div className="editable-cell-text-wrapper">
                                {valueCN3}
                            </div></Col>
                            <Col span={5}><div className="editable-cell-text-wrapper">
                                {value4 || ' '}
                                <Icon
                                    type="edit"
                                    className="editable-cell-icon"
                                    onClick={this.edit}
                                />
                            </div></Col>
                        </Row>
                }
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        grade: state.grade
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGradeDataTemp: () => {
            dispatch(getGradeDataTemp())
        },
        addVariable: () => {
            dispatch(addVariable())
        },
        deleteVariable: (indexTemp) => {
            dispatch(deleteVariable(indexTemp))
        },
        addCondition: (indexTemp) => {
            dispatch(addCondition(indexTemp))
        },
        deleteCondition: (indexTemp) => {
            dispatch(deleteCondition(indexTemp))
        },
        setDataSource1: (indexTemp) => {
            dispatch(setDataSource1(indexTemp))
        },
        setDataSource2: (indexTemp) => {
            dispatch(setDataSource2(indexTemp))
        },
        setKeyNum: (indexTemp) => {
            dispatch(setKeyNum(indexTemp))
        },
        setKeyNum1: (indexTemp) => {
            dispatch(setKeyNum1(indexTemp))
        }
    }
};
const EditableCellTemp = connect(mapStateToProps, mapDispatchToProps)(EditableCell2);
export default EditableCellTemp;


