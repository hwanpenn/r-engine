import React, {Component} from 'react';
import { Table } from 'antd';
import { Row, Col,Icon } from 'antd';
import { Modal, Button } from 'antd';
import {connect} from 'react-redux';
import {getGradeDataTemp,addVariable,deleteVariable,deleteCondition,addCondition} from "actions/grade";
import {setDataSource1,setDataSource2} from "actions/grade";
import {modifyVariableLib} from "actions/beforeGrade";
import {addGradeData} from "actions/grade";
import {setKeyNum,setKeyNum1} from "actions/grade";
import EditableCell from "./EditableCell/EditableCell";
import EditableCell1 from "./EditableCell/EditableCell1";
import EditableCell2 from "./EditableCell/EditableCell2";
import { Input  } from 'antd';
import { Select } from 'antd';
import { Popconfirm } from 'antd';
import { Route, Switch, Link} from 'react-router-dom';

const Search = Input.Search;




function handleChange(value) {
    console.log(`selected ${value}`);
}



class EditableTable extends Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%',
            render: (text, record) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(record.key, 'name')}
                />
            ),
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];

        this.state = {
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
            count1: 7,
            keyNum: 0,
            keyNum1: 0,
            dataSource1:
           "" ,
            dataSource2:[]
        };
    }
    componentWillMount(){
        let param = {
            "key":this.props.beforeGrade.selectRowGradeSelect.id
        };
        let nodes = [];
        if(this.props.beforeGrade.selectRowGradeSelect.nodes===undefined||this.props.beforeGrade.selectRowGradeSelect.nodes===null||this.props.beforeGrade.selectRowGradeSelect.nodes===''){
            nodes=[]
        }else {
            nodes=this.props.beforeGrade.selectRowGradeSelect.nodes
        }
        this.props.getGradeDataTemp(nodes);
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
        let dataSource1Temp = nextProps.grade.dataSource1;
        let dataSource2Temp = nextProps.grade.dataSource2;


        this.columns1 = [
            {
                title: '属性',
                colSpan: 1,
                dataIndex: 'variableName',width: 250,
                render: (value, row, index) => {
                    const obj = {
                        children: <Row>
                            <Col span={1}></Col>

                            <Col span={16}>
                                <EditableCell1
                                    variableName={value}
                                    index={index}
                                    variableBm={row.variable}
                                />
                            </Col>

                            <Col span={1}></Col>
                            <Col span={6}>
                                <Popconfirm title="确定删除?" onConfirm={() => this.deleteVariable(row.key1,index,row.variable)}>
                                    <a >Delete</a>
                                </Popconfirm>
                            </Col>
                        </Row>,
                        props: {
                        },
                    };
                    let start =0;
                    let first =0;
                    let tempCount = 0;
                    let testTemp = dataSource2Temp;
                    testTemp.map((variable) =>{
                        start=tempCount;
                        tempCount += variable.conditions.length;
                        for( start;start<tempCount;start++){
                            if(start===first){
                                if (index === start) {
                                    obj.props.rowSpan = variable.conditions.length;
                                }
                            }else {
                                if (index === start) {
                                    obj.props.rowSpan = 0;
                                }
                            }
                        }
                        first += variable.conditions.length;
                    });
                    return obj;
                },
            },

            {
                title: '条件',
                colSpan: 1,
                dataIndex: 'conditions',
                render: (value, row, index) => {

                    const obj = {
                        children:
                            <Row>
                                <Col span={19}>
                                    <EditableCell2
                                        value={value}
                                        index={index}
                                    />
                                </Col>
                                <Col span={1}></Col>
                                <Col span={2} >
                                    {/*<Popconfirm title="确定添加?" onConfirm={() => this.addCondition(row.key,row.lengthTemp,index,row.variable)}>*/}
                                    <a  onClick={() => this.addCondition(row.key1,index,row.variable,row.variableId,row.variableName)}>Add</a>
                                    {/*</Popconfirm>*/}
                                </Col>
                                <Col span={2} >
                                    <Popconfirm title="确定删除?" onConfirm={() => this.delCondition(row.key1,index,row.variable)}>
                                        <a >Delete</a>
                                    </Popconfirm>
                                </Col>
                            </Row>
                        ,
                        props: {},
                    };
                    return obj;
                },
            },
            {
                title: '分值',
                width: 110,
                dataIndex: 'score',
                render: (value, row, index) => {
                    const obj = {
                        children:

                            <EditableCell
                                value={value}
                                index={index}
                            />

                        ,
                        props: {},
                    };
                    return obj;
                },
            }
        ];
    }
    componentWillUpdate(nextProps, nextState){
    }
    onCellChange = (dataIndex,item,value) => {
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
    changeData3 = (testTemp)=> {
        let i=0;
        const end = testTemp.length;
        let result = [];
        if(end===0){
            result = []
        }else {
            let keyTemp =testTemp[0].key1;
            let startIndex = 0;
            testTemp.map((item,index)=>{
                if(item.conditions.length===2){
                    if(item.conditions[1].logic===''||item.conditions[1].logic===null||item.conditions[1].logic===undefined){
                        item.conditions.splice(1,1);
                    }
                }
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
        }

        return result;
    }
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        console.log(this.state.dataSource);
    }
    deleteVariable = (key1,index,variable) => {
        const dataSource1 = this.props.grade.dataSource1;
        const dataSource2 = this.props.grade.dataSource2;
        let i = 0 ;
        let dataSource1emp = '';
        for(i;i<1;i++){
            dataSource1emp = dataSource1.filter(item => item.key1 !== key1)
        }


        let dataSource211=this.changeData3(dataSource1emp);
        this.props.setDataSource1(dataSource1emp);
        this.props.setDataSource2(dataSource211);


    }
    addCondition = (key1,index,variable,variableName) => {
        const dataSource1 = this.props.grade.dataSource1;
        const keyNum = this.props.grade.keyNum;
        const newData2 = {"key":keyNum+1,"key1":key1,"variable":variable,"variableName":variableName,"weight":0.5,"score":0,"conditions":
            [{"sign":"","value":""},{"sign":"","value":'',"logic":""}]};
        let dataSource1Value=dataSource1.slice(0,index+1).concat(newData2, dataSource1.slice(index+1));
        let dataSource211=this.changeData3(dataSource1Value);
        this.props.setDataSource1(dataSource1Value);
        this.props.setDataSource2(dataSource211);
    }
    delCondition = (key,index,variable) => {
        const dataSource1 = this.props.grade.dataSource1;
        const   valueTemp = dataSource1.splice(index,1);
        let dataSource211=this.changeData3(dataSource1);
        this.props.setDataSource1(dataSource1);
        this.props.setDataSource2(dataSource211);
    }

    handleAdd1 = () => {
        const dataSource1 = this.props.grade.dataSource1;
        console.log(dataSource1);
        let temp2 = '';
        temp2 = JSON.parse(JSON.stringify(dataSource1));
        const valueTemp=this.changeData3(temp2);
        let params = JSON.stringify(valueTemp)
        let param = {
            "key": this.props.beforeGrade.selectRowGradeSelect.key,
            "name": this.props.beforeGrade.selectRowGradeSelect.name,
            "description":this.props.beforeGrade.selectRowGradeSelect.description,
            "projectid":this.props.beforeGrade.selectRowGradeSelect.projectid,
            "isWeight":false,
            "nodes":params,
            "modelid":this.props.beforeGrade.selectRowGradeSelect.modelid,
        }
        console.log(params);
        this.props.addVariableLibGradeSave(param,"编辑");
    }
    handleAdd = () => {
        const dataSource1 = this.props.grade.dataSource1;
        const keyNum = this.props.grade.keyNum;
        const keyNum1 = this.props.grade.keyNum1;
        const newData1 = {"key":keyNum+1,"key1":keyNum1+1,"variable":"","variableName":"","weight":0.5,"score":0,"conditions":
            [{"sign":"","value":""},{"sign":"","value":'',"logic":""}]};
        dataSource1.push(newData1)
        let dataSource211=this.changeData3(dataSource1);
        this.props.setDataSource1(dataSource1);
        this.props.setDataSource2(dataSource211);
        this.props.setKeyNum(keyNum + 1);
        this.props.setKeyNum1(keyNum1 + 1);
    }
    getDataTemp = ()=>{
        console.log();
    }
    render() {
        return (
            <div>

                <Row>
                    <Col span={6}>
                    </Col>
                    <Col span={18} className="MyAlign1">

                        <Button  style={{marginRight: 15}}><Link to="/rule/home/rule/resource/grade">返回</Link></Button>
                        <Button onClick={this.handleAdd} style={{marginRight: 15}}>+属性</Button>
                        <Button type="primary" onClick={this.handleAdd1}  style={{marginRight: 5}}>保存</Button>
                    </Col>
                </Row>
                <Table bordered dataSource={this.props.grade.dataSource1} columns={this.columns1}
                        pagination={false}
                       rowKey={'key'}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        grade: state.grade,
        beforeGrade: state.beforeGrade
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addGradeData: () => {
            dispatch(addGradeData())
        },
        getGradeDataTemp: (nodes) => {
            dispatch(getGradeDataTemp(nodes))
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
        },
        addVariableLibGradeSave: (params,updataOrEdit) => {
            dispatch(modifyVariableLib(params,updataOrEdit))
        },
    }
};
const MyTableTemp = connect(mapStateToProps, mapDispatchToProps)(EditableTable);
export default MyTableTemp;


