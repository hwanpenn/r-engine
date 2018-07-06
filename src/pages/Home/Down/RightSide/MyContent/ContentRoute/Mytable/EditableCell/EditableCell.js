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




class EditableCell extends Component {
    state = {
        value: this.props.value,
        index: this.props.index,
        editable: false,
    }
    changeData = (testTemp)=> {
        const columnsTemp = [];
        let keyTemp = 0;
        let keyTemp1 = 0;
        testTemp.map((variable) =>{
            let variableName = variable.variable;
            let weightNum = variable.weight;
            let conditions = variable.conditions;
            conditions.map((condition) =>{

                let conditionTexts = condition.condition;
                let conditionValue = [];
                let scoreText = condition.score;
                conditionTexts.map((item) =>{
                    if(item.logic===''||item.logic===null||item.logic===undefined){
                        conditionValue.push({
                            sign: item.sign,
                            value: item.value,
                        })
                    }else {
                        conditionValue.push({
                            sign: item.sign,
                            value: item.value,
                            logic: item.logic,
                        })
                    }
                });
                columnsTemp.push({
                    key:keyTemp1,
                    key1:keyTemp,
                    variable: variableName,
                    weight: weightNum,
                    score: scoreText,
                    conditions: conditionValue,
                })
                keyTemp1++
            });
            keyTemp++
        });
        return columnsTemp;
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
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value:value });
    }
    check = () => {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
        const dataSource1 = this.props.grade.dataSource1;
        const indexTemp = this.state.index;
        dataSource1[indexTemp].score = this.state.value;
        let dataSource211=this.changeData3(dataSource1);
        this.props.setDataSource1(dataSource1);
        this.props.setDataSource2(dataSource211);

    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                defaultValue={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                                style={{ width: 60}}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper" style={{ width: 90}}>
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
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
const EditableCellTemp = connect(mapStateToProps, mapDispatchToProps)(EditableCell);
export default EditableCellTemp;


