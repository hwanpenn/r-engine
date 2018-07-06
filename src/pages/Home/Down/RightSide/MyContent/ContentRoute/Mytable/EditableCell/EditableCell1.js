import React, {Component} from 'react';
import { Table } from 'antd';
import { Row, Col,Icon } from 'antd';
import { Modal, Button } from 'antd';
import {connect} from 'react-redux';
import {getGradeDataTemp,addVariable,deleteVariable,deleteCondition,addCondition} from "actions/grade";
import {setDataSource1,setDataSource2} from "actions/grade";
import {getVariableItemInfoCell} from "actions/grade";
import {setKeyNum,setKeyNum1} from "actions/grade";
import { Input  } from 'antd';
import { Select } from 'antd';
import { Popconfirm } from 'antd';

const Search = Input.Search;





class EditableCell1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.variableName,
            value1: props.variableBm,
            index: props.index,
            editable: false,
            children:''
        }
    }

    getDataTemp = (id,start,size) => {
        const params = {
            key:id,
            start:start,
            size:size,
        };
        this.props.getVariableItemInfoCell(params);
    }
    componentWillMount(){
        let variableNames = this.props.grade.variableNames;
        let valueTemp = this.state.value;
        let valueTemp1 = '';
        if(valueTemp===''){
        }
        this.setState({
            value1:valueTemp1
        })
        let id = '';
        if(this.props.beforeGrade.selectRowGradeSelect!==''&&this.props.beforeGrade.selectRowGradeSelect!==undefined ){
            id = this.props.beforeGrade.selectRowGradeSelect.variableProjectId;
            this.getDataTemp(id,1,50);
        }

    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps){
    }
    handleChange = (value) => {
        this.setState({ value :value.label[1]});
        this.setState({ value1 :value.key});
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
            this.props.onChange(this.state.value1);
        }
        const dataSource1 = this.props.grade.dataSource1;
        const indexTemp = this.state.index;
        dataSource1[indexTemp].variable = this.state.value1;
        dataSource1[indexTemp].variableName = this.state.value;
        let dataSource211=this.changeData3(dataSource1);
        console.log(dataSource1)
        console.log(dataSource211)
        this.props.setDataSource1(dataSource1);
        this.props.setDataSource2(dataSource211);
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value1,value, editable } = this.state;

        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Select  labelInValue defaultValue={{ key: value1 }} style={{ width: 110,border: 0 }} onChange={this.handleChange}>
                                {this.props.grade.childrenCell}
                            </Select>
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
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
        grade: state.grade,
        variableItem: state.variableItem,
        beforeGrade: state.beforeGrade,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVariableItemInfo: (params) => {
            dispatch(getVariableItemInfo(params))
        },
        getVariableItemInfoCell: (params) => {
            dispatch(getVariableItemInfoCell(params))
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
const EditableCellTemp = connect(mapStateToProps, mapDispatchToProps)(EditableCell1);
export default EditableCellTemp;


