import React, {Component} from 'react';
import { Row, Col,Icon ,Button} from 'antd';
import {connect} from 'react-redux';
import {setClickNode} from "actions/decision";
import {setData,setInputValue,setInputValue1,setInputValue11,setInputValue2,setInputValue3} from "actions/decision";
import {setTempKey} from "actions/decision";
import {getDecisionItemInfoCell} from "actions/decision";
import { Input  } from 'antd';
import { Select,Popconfirm } from 'antd';
import { message,Tag  } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


message.config({
    duration: 1,
});
let treeTemp = "";
let clickNode = {"variable":"start","sign":"","value":""};
let itemTemp = '';
let edit = false;
let tempKey = 1;
class EditableCell2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            value1: '',
            value1Id: '',
            value1Name: '',
            value2: '',
            value3:'',
            value4:'',
            value5:'',
            value6:'',
            editable: true,
            showEdit:true,
            edit:'',
            isNewAdd:true,
            isWitchNode:"1",
        };
    }
    getDataTemp = (id,start,size) => {
        const params = {
            key:id,
            start:start,
            size:size,
        };
        this.props.getDecisionItemInfoCell(params);
    }
    componentWillMount(){
        let id = '';
        if(this.props.beforeDecision.selectRowDecisionSelect!==''&&this.props.beforeDecision.selectRowDecisionSelect!==undefined ){
            id = this.props.beforeDecision.selectRowDecisionSelect.variableProjectId;
            this.getDataTemp(id,1,50);
        }

    }

    componentWillReceiveProps(nextProps){

    }
    componentDidMount(){
    }
    changeDate2 = (data)=>{
        if(data.variable===undefined){
            data.variable= "start";
            data.keyTemp= tempKey;
            tempKey++;
            data.variable1= "start";
        }else {
            data.keyTemp= tempKey;
            tempKey++;
        }
        if(data.nodes===undefined){

        }else {
            const tempResult = data.nodes;
            data.children = tempResult;
            delete data.nodes;
            data.children.map((data)=>{
                this.changeDate2(data);
            })
        }

        if(data.result===undefined){

        }else {
            let tempResult1 = data.result;
            tempResult1.keyTemp= tempKey;
            tempKey++;
            let valueTemp = [];
            valueTemp.push(tempResult1);
            data.children = valueTemp;
            data.resultMark = 1;
            delete data.result;
        }
    };
    changeDate1 = (data)=>{
        if(data.variable1===undefined){
            delete data.keyTemp;
        }else {
            delete data.variable1;
            delete data.variable;
            delete data.variableName;
            delete data.keyTemp;
        }
        if(data.children===undefined){

        }else {
            if(data.resultMark===undefined){
                const tempResult = data.children;
                data.nodes = tempResult;
                delete data.children;
                data.nodes.map((data)=>{
                    changeDate1(data);
                })
            }else {
                const tempResult1 = data.children;
                delete tempResult1[0].keyTemp;
                data.result = tempResult1[0];
                delete data.children;
                delete data.resultMark;
            }

        }


    };
    handleChange1 = (value) => {
        this.props.setInputValue1(value.key)
        this.props.setInputValue11(value.label[1])
    };
    handleChange4 = (value) => {
        let valueOrResult = this.props.decision.clickNode.variable?"1":"2";
        let handleClickCrud = this.props.decision.handleClickCrud;
        if(handleClickCrud==="2"){
            if(value!==valueOrResult){
                message.info("节点类型不一致")
            }
        }

        this.props.setInputValue(value);
    };
    handleChange2 = (value) => {
        this.props.setInputValue2(value)
    };
    handleChange3 = (e) => {
        const value = e.target.value;
        this.props.setInputValue3(value)
    };
    handleChange31 = (value) => {
        this.props.setInputValue3(value)
    };
    handleChange32 = (date, dateString) => {
        this.props.setInputValue3(dateString)
    };
    deleteNode = (keyTempValue,data) => {
        if(data.children===undefined){

        }else {
            data.children.map((item,index)=>{
                if(item.keyTemp===keyTempValue){
                    data.children.splice(index,1)
                }else {
                    this.deleteNode(keyTempValue,item)
                }
            });
        }

    };
    editNode = (keyTempValue,data,value1,value1Id,value1Name,value3,value5) => {
        if(data.children===undefined){

        }else {
            if(data.keyTemp===keyTempValue){
                data.variable = value1Id;
                data.variableName = value1Name;
                data.sign = value3;
                data.value = value5;
            }else {
                data.children.map((item,index)=>{
                    if(item.keyTemp===keyTempValue){
                        item.variable = value1Id;
                        item.variableName = value1Name;
                        item.sign = value3;
                        item.value = value5;
                    }else {
                        this.editNode(keyTempValue,item,value1,value1Id,value1Name,value3,value5)
                    }
                });
            }
        }

    };
    editNode1 = (keyTempValue,data,value1,value1Id,value1Name,value3,value5) => {

        if(data.children===undefined){

        }else {
            if(data.keyTemp===keyTempValue){
                data.key = value1Id;
                data.keyName = value1Name;
                data.type = value3;
                data.value = value5;
            }else {
                data.children.map((item,index)=>{
                    if(item.keyTemp===keyTempValue){
                        data.key = value1Id;
                        data.keyName = value1Name;
                        item.type = value3;
                        item.value = value5;
                    }else {
                        this.editNode1(keyTempValue,item,value1,value1Id,value1Name,value3,value5)
                    }
                });
            }
        }

    };
    addNode1 = (keyTempValue,data,tempNode) => {

        if(data.children===undefined){

        }else {
            if(data.keyTemp===keyTempValue){

            }else {
                data.children.map((item,index)=>{
                    if(item.keyTemp===keyTempValue){
                    }else {
                        this.addNode(keyTempValue,item,tempNode)
                    }
                });
            }
        }

    };
    addNode = (keyTempValue,data,tempNode) => {

        if(data.children===undefined){

        }else {
            if(data.keyTemp===keyTempValue){
                data.children.push(tempNode)
            }else {
                data.children.map((item,index)=>{
                    if(item.keyTemp===keyTempValue){
                        item.children.push(tempNode)
                    }else {
                        this.addNode(keyTempValue,item,tempNode)
                    }
                });
            }
        }

    };
    edit = () => {
    };
    render() {
        const {  editable } = this.state;
        let isWitchNode = this.props.decision.dataInputValue;
        let dataType = this.props.decision.dataInputValue2;
        let handleClickCrud = this.props.decision.handleClickCrud;
        let valueOrResult = this.props.decision.clickNode.variable?"1":"2";
        let isWitchNode1 = this.props.decision.valueTemp0;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div>
                            {
                                this.state.isNewAdd ?
                                    <Row>
                                        <Col span={12} style={{textAlign: "right", marginTop: 6}}>
                                            <div style={{marginLeft: 55}}>
                                                节点类型：
                                            </div>

                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                <Select placeholder={this.props.decision.valueTemp0} style={{ width: 130,border: 0 }} onChange={(value)=>this.handleChange4(value)}>
                                                    <Select.Option value="1">逻辑节点</Select.Option>
                                                    <Select.Option value="2">结果节点</Select.Option>
                                                </Select>
                                                {/*{handleClickCrud==="1"?<Select placeholder={this.props.decision.valueTemp0} style={{ width: 130,border: 0 }} onChange={(value)=>this.handleChange4(value)}>*/}
                                                        {/*<Select.Option value="1">逻辑节点</Select.Option>*/}
                                                        {/*<Select.Option value="2">结果节点</Select.Option>*/}
                                                    {/*</Select>:<Select placeholder={this.props.decision.valueTemp0} style={{ width: 130,border: 0 }} onChange={(value)=>this.handleChange4(value)}>*/}
                                                        {/*{valueOrResult==="nodes"?<Select.Option value="1">逻辑节点</Select.Option>:''}*/}
                                                        {/*{valueOrResult==="result"?<Select.Option value="1">结果节点</Select.Option>:''}*/}
                                                    {/*</Select>}*/}
                                            </div>
                                        </Col>
                                    </Row> :
                                    <Row>
                                    </Row>
                            }
                            {
                                    <Row style={{ marginTop: 4}}>
                                        <Col span={12} style={{textAlign: "right", marginTop: 6}}>
                                            <div style={{marginLeft: 55}}>
                                                节点变量：
                                            </div>

                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                <Select  labelInValue placeholder={this.props.decision.valueTemp1 } style={{ width: 130,border: 0 }} onChange={(value)=>this.handleChange1(value)} >
                                                    {this.props.decision.childrenCell}
                                                </Select>
                                            </div>
                                        </Col>
                                    </Row>
                            }
                            {
                                    <Row>
                                        <Col span={12} style={{textAlign:"right",marginTop:6}} >
                                            {handleClickCrud==="1"?<div style={{marginLeft: 55}}>{(isWitchNode==="1"||isWitchNode==="")?"逻辑类型":"数据类型"}：</div>:
                                                <div style={{marginLeft: 55}}>{valueOrResult==="nodes"?"逻辑类型":"数据类型"}：</div>}



                                        </Col>
                                        <Col span={12} >
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {handleClickCrud==="1"?<Select   style={{ width: 130,border: 0 }} placeholder={this.props.decision.valueTemp2} onChange={(value)=>this.handleChange2(value)}>
                                                        {isWitchNode==="1"?<Select.Option value=">"> 大于 </Select.Option>:''}
                                                        {isWitchNode==="1"?<Select.Option value="<"> 小于 </Select.Option>:''}
                                                        {isWitchNode==="1"?<Select.Option value="="> 等于 </Select.Option>:''}
                                                        {isWitchNode==="1"?<Select.Option value=">="> 大于等于 </Select.Option>:''}
                                                        {isWitchNode==="1"?<Select.Option value="<="> 小于等于 </Select.Option>:''}
                                                        {isWitchNode==="1"?<Select.Option value="!="> 不等于 </Select.Option>:''}
                                                        {isWitchNode==="2"?<Select.Option value="String"> 字符串 </Select.Option>:''}
                                                        {isWitchNode==="2"?<Select.Option value="Long"> 长整数 </Select.Option>:''}
                                                        {isWitchNode==="2"?<Select.Option value="Integer"> 整数 </Select.Option>:''}
                                                        {isWitchNode==="2"?<Select.Option value="Double"> 小数 </Select.Option>:''}
                                                        {isWitchNode==="2"?<Select.Option value="Date"> 时间 </Select.Option>:''}
                                                        {isWitchNode==="2"?<Select.Option value="Boolean"> 布尔值 </Select.Option>:''}
                                                    </Select>:
                                                    <Select   style={{ width: 130,border: 0 }} placeholder={this.props.decision.valueTemp2} onChange={(value)=>this.handleChange2(value)}>
                                                        {valueOrResult==="nodes"?<Select.Option value=">"> 大于 </Select.Option>:''}
                                                        {valueOrResult==="nodes"?<Select.Option value="<"> 小于 </Select.Option>:''}
                                                        {valueOrResult==="nodes"?<Select.Option value="="> 等于 </Select.Option>:''}
                                                        {valueOrResult==="nodes"?<Select.Option value=">="> 大于等于 </Select.Option>:''}
                                                        {valueOrResult==="nodes"?<Select.Option value="<="> 小于等于 </Select.Option>:''}
                                                        {valueOrResult==="nodes"?<Select.Option value="!="> 不等于 </Select.Option>:''}
                                                        {valueOrResult==="result"?<Select.Option value="String"> 字符串 </Select.Option>:''}
                                                        {valueOrResult==="result"?<Select.Option value="Long"> 长整数 </Select.Option>:''}
                                                        {valueOrResult==="result"?<Select.Option value="Integer"> 整数 </Select.Option>:''}
                                                        {valueOrResult==="result"?<Select.Option value="Double"> 小数 </Select.Option>:''}
                                                        {valueOrResult==="result"?<Select.Option value="Date"> 时间 </Select.Option>:''}
                                                        {valueOrResult==="result"?<Select.Option value="Boolean"> 布尔值 </Select.Option>:''}

                                                    </Select>}

                                            </div>
                                        </Col>
                                    </Row>
                            }
                            {
                                    <Row>
                                        <Col span={12} style={{textAlign:"right",marginTop:6}} >
                                            <div style={{marginLeft: 55}}>值：</div>

                                        </Col>
                                        <Col span={12} >
                                            {(valueOrResult==="1") &&
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                <Input  onChange={(e)=>this.handleChange3(e)} placeholder={this.props.decision.valueTemp3} style={{ width: 130}}/>
                                            </div>
                                            }
                                            {((valueOrResult==="2")&&(dataType==="String"||dataType==="Long"||dataType==="Double"||dataType==="Integer"||dataType==="")) &&
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                <Input  onChange={(e)=>this.handleChange3(e)} placeholder={this.props.decision.valueTemp3} style={{ width: 130}}/>
                                            </div>
                                            }
                                            {(dataType==="Boolean") &&
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                <Select   style={{ width: 130,border: 0 }} placeholder={this.props.decision.valueTemp3} onChange={(value)=>this.handleChange31(value)}>
                                                    <Select.Option value="1"> 是 </Select.Option>
                                                    <Select.Option value="0"> 否 </Select.Option>

                                                </Select>
                                            </div>
                                            }
                                            {(dataType==="Date") &&
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                <DatePicker style={{ width: 130,border: 0 }} placeholder={this.props.decision.valueTemp3} onChange={(date, dateString)=>this.handleChange32(date, dateString)}  />
                                            </div>
                                            }

                                        </Col>
                                    </Row>
                            }

                        </div>
                        :
                        <div>
                            {
                                this.props.decision.clickNode.variable ?
                                    <Row>
                                        <Col span={12} style={{textAlign: "right", marginTop: 6}}>
                                            <div style={{marginLeft: 55}}>节点名称：</div>

                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {/*{value || ' '}---*/}
                                                {this.props.decision.clickNode.variableName}
                                            </div>
                                        </Col>
                                    </Row> :
                                    <Row>
                                        <Col span={12} style={{textAlign: "right", marginTop: 6}}>
                                            <div style={{marginLeft: 55}}>结果名称：</div>

                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {/*{value || ' '}---*/}
                                                {this.props.decision.clickNode.key}
                                            </div>
                                        </Col>
                                    </Row>
                            }
                            {
                                this.props.decision.clickNode.variable ?
                                    <Row>
                                        <Col span={12} style={{textAlign:"right",marginTop:6}} >
                                            <div style={{marginLeft: 55}}>运算符：</div>

                                        </Col>
                                        <Col span={12} >
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {/*{value1 || ' '}*/}
                                                {this.props.decision.clickNode.sign}
                                            </div>
                                        </Col>
                                    </Row> :
                                    <Row>
                                        <Col span={12} style={{textAlign: "right", marginTop: 6}}>
                                            <div style={{marginLeft: 55}}>类型：</div>

                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {/*{value || ' '}---*/}
                                                {this.props.decision.clickNode.type}
                                            </div>
                                        </Col>
                                    </Row>
                            }
                            {
                                this.props.decision.clickNode.variable ?
                                    <Row>
                                        <Col span={12} style={{textAlign:"right",marginTop:6}} >
                                            <div style={{marginLeft: 55}}>值：</div>

                                        </Col>
                                        <Col span={12} >
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {/*{value2 || ' '}*/}
                                                {this.props.decision.clickNode.value}
                                            </div>
                                        </Col>
                                    </Row> :
                                    <Row>
                                        <Col span={12} style={{textAlign: "right", marginTop: 6}}>
                                            <div style={{marginLeft: 55}}>值：</div>

                                        </Col>
                                        <Col span={12}>
                                            <div style={{marginLeft: 5}} className="editable-cell-text-wrapper">
                                                {/*{value || ' '}---*/}
                                                {this.props.decision.clickNode.value}
                                            </div>
                                        </Col>
                                    </Row>
                            }

                        </div>

                }

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        decision: state.decision,
        beforeDecision: state.beforeDecision,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setInputValue: (indexTemp) => {
            dispatch(setInputValue(indexTemp))
        },
        setInputValue1: (indexTemp) => {
            dispatch(setInputValue1(indexTemp))
        },
        setInputValue11: (indexTemp) => {
            dispatch(setInputValue11(indexTemp))
        },
        setInputValue2: (indexTemp) => {
            dispatch(setInputValue2(indexTemp))
        },
        setInputValue3: (indexTemp) => {
            dispatch(setInputValue3(indexTemp))
        },
        setData: (indexTemp) => {
            dispatch(setData(indexTemp))
        },
        setClickNode: (indexTemp) => {
            dispatch(setClickNode(indexTemp))
        },
        getGradeDataTemp: (indexTemp) => {
            dispatch(getGradeDataTemp(indexTemp))
        },
        setTempKey: (indexTemp) => {
            dispatch(setTempKey(indexTemp))
        },
        getDecisionItemInfoCell: (indexTemp) => {
            dispatch(getDecisionItemInfoCell(indexTemp))
        }
    }
};
const MyTableTemp = connect(mapStateToProps, mapDispatchToProps)(EditableCell2);
export default MyTableTemp;