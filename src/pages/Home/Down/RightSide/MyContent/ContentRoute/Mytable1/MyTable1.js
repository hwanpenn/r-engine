import React, {Component} from 'react';
import { Row, Col,Icon ,Button} from 'antd';
import  EchartsTest1   from './antvTest/antvTest6';
import {connect} from 'react-redux';
import {modifyVariableLibDecision} from "actions/decision";
import { Route, Switch, Link} from 'react-router-dom';
import {setClickNode} from "actions/decision";
import {setTreeTemp} from "actions/decision";
import {getDecisionDataTemp} from "actions/decision";
import {addDecisionData} from "actions/decision";
import { Menu, Dropdown } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="1">添加节点</Menu.Item>
        <Menu.Item key="2">编辑节点</Menu.Item>
        <Menu.Item key="3">修改节点</Menu.Item>
    </Menu>
);
let treeTemp = "";
let clickNode = {"variable":"start","sign":"","value":""};
let itemTemp = '';
let edit = false;

class MyTable1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    componentWillMount(){
        let param = {
            "key":this.props.beforeDecision.selectRowDecisionSelect.id
        };
        let nodes = [];
        if(this.props.beforeDecision.selectRowDecisionSelect.nodes===undefined||this.props.beforeDecision.selectRowDecisionSelect.nodes===null||this.props.beforeDecision.selectRowDecisionSelect.nodes===''){
            nodes=[]
        }else {
            nodes=this.props.beforeDecision.selectRowDecisionSelect.nodes
        }
        this.props.getDecisionDataTemp(nodes);
    }
    handleAdd = () => {
        let data2Temp = this.state.data2;
        this.setState({
            data2:data2Temp
        })
        treeTemp.changeData(this.state.data2);
    }
    changeDate1(data){
        if(data.variable1===undefined){
            delete data.keyTemp;
            delete data.align;
            delete data.height;
            delete data.id;
            delete data.inAnchor;
            delete data.outAnchor;
            delete data.root;
            delete data.width;
            delete data.x;
            delete data.y;
        }else {
            delete data.variable1;
            delete data.variable;
            delete data.variableName;
            delete data.keyTemp;
            delete data.align;
            delete data.height;
            delete data.id;
            delete data.inAnchor;
            delete data.outAnchor;
            delete data.root;
            delete data.width;
            delete data.x;
            delete data.y;
        }
        if(data.children===undefined){

        }else {
            if(data.resultMark===undefined){
                const tempResult = data.children;
                data.nodes = tempResult;
                delete data.children;
                delete data.align;
                delete data.height;
                delete data.id;
                delete data.inAnchor;
                delete data.outAnchor;
                delete data.root;
                delete data.width;
                delete data.x;
                delete data.y;
                data.nodes.map((data)=>{
                    this.changeDate1(data);
                })
            }else {
                const tempResult1 = data.children;
                delete tempResult1[0].keyTemp;
                data.result = tempResult1[0];
                delete data.children;
                delete data.resultMark;
                delete data.align;
                delete data.height;
                delete data.id;
                delete data.inAnchor;
                delete data.outAnchor;
                delete data.root;
                delete data.width;
                delete data.x;
                delete data.y;
            }

        }

        return data;
    }

    handleAdd1 = () => {
        const dataSource1 = this.props.decision.dataTemp;
console.log("转换前object")
console.log(dataSource1)

        let cache = [];
        let valueTemp = '';
        valueTemp = JSON.stringify(dataSource1, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    return;
                }
                cache.push(value);
            }
            return value;
        });


        cache = null;


        let temp2 = '';
        temp2 = JSON.parse(valueTemp);
        let valueTemp11=this.changeDate1(temp2);

        console.log("转换后object")
        console.log(valueTemp11)
        let cache1 = [];
        let valueTemp1 = '';
        valueTemp1 = JSON.stringify(valueTemp11, function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache1.indexOf(value) !== -1) {
                    return;
                }
                cache1.push(value);
            }
            return value;
        });
        cache1 = null;
        console.log("结果json");
        console.log(valueTemp1);
        let param = {
            "key": this.props.beforeDecision.selectRowDecisionSelect.id,
            "name": this.props.beforeDecision.selectRowDecisionSelect.name,
            "description":this.props.beforeDecision.selectRowDecisionSelect.description,
            "projectid":this.props.beforeDecision.selectRowDecisionSelect.projectid,
            "nodes":valueTemp1,
            "modelid":this.props.beforeDecision.selectRowDecisionSelect.modelid,
        };
        this.props.modifyVariableLibDecision(param);
    }
    render() {

        return (
            <div>
                <div>
                    <Row>
                        <Col span={24} className="MyAlign1">
                            <Row>
                                <Button  style={{marginRight: 15}}><Link to="/rule/home/rule/resource/decision">返回</Link></Button>
                                    <Button type="primary" onClick={this.handleAdd1}  style={{marginRight: 5}}>保存</Button>
                            </Row>
                            <EchartsTest1/>
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        decision: state.decision,
        beforeDecision: state.beforeDecision
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setClickNode: (indexTemp) => {
            dispatch(setClickNode(indexTemp))
        },
        setTreeTemp: (indexTemp) => {
            dispatch(setTreeTemp(indexTemp))
        },
        getDecisionDataTemp: (nodes) => {
            dispatch(getDecisionDataTemp(nodes))
        },
        addDecisionData: () => {
            dispatch(addDecisionData())
        },
        modifyVariableLibDecision: (params) => {
            dispatch(modifyVariableLibDecision(params))
        },
    }
};
const MyTableTemp = connect(mapStateToProps, mapDispatchToProps)(MyTable1);
export default MyTableTemp;
