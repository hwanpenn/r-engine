import React, {Component} from 'react';
import G6 from '@antv/g6';
import { Modal } from 'antd';
import {connect} from 'react-redux';
import {setClickNode} from "actions/decision";
import {setTreeTemp,setTempKey,handleClickCurd,setValueTempDefault} from "actions/decision";
import {setClickItem} from "actions/decision";
import {getInitData,setdecisionShowVariable,setData} from "actions/decision";
import {setshowVisible,setXandY} from "actions/decision";
import {rigthClick} from "actions/decision";
import  EditableCell3   from '../EditableCell/EditableCell3';
import { Select,Popconfirm ,message} from 'antd';
import { Menu, Dropdown } from 'antd';


let treeTemp = "";
let clickNode = {"variable":"start","sign":"","value":""};
let itemTemp = '';
let edit = false;

let dataTempTry = '';
class EchartsTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            showVisible:false,
            key:'',
            clickX:'',
            clickY:'',
        };
    }

    componentWillReceiveProps(nextProps){


    }
    _handleContextMenu = (event) => {

        event.preventDefault();
        const clickX = event.clientX;
        const clickY = event.clientY;
        this.setState({
            visible:true,
            clickX:clickX,
            clickY:clickY,
        })
    };

    _handleClick = (event) => {
        const { visible } = this.state;
        const wasOutside = !(event.target.contains === this.root);

        if (wasOutside && visible) this.setState({ visible: false, });
    };
    componentWillUnmount() {
        document.removeEventListener('contextmenu', this._handleContextMenu);
        document.removeEventListener('click', this._handleClick);
    }
    componentDidMount() {
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('click', this._handleClick);

        let propsTemp = this;
        let propsTemp2 = this.props;
        let propsTemp1 = this.props.decision;
        const Util = G6.Util;
        G6.registerNode('customNode111', {
            cssSize: true,
            getHtml: function(cfg){
                const obj = cfg.model;
                let value = "";
                if(obj.key===undefined){
                    let temp = obj.sign===undefined?"":obj.sign;
                    let temp1 = obj.value===undefined?"":obj.value;
                    let temp2 = obj.variable===undefined?"":obj.variable;
                    value=  temp2+" "+temp+" "+temp1;
                }else {
                    let temp = obj.key===undefined?"":obj.key;
                    let temp1 = obj.value===undefined?"":obj.value;
                    let temp2 = obj.type===undefined?"":obj.type;
                    value= temp2+" "+temp+" "+temp1;
                }
                let bottonTemp = '';
                if(edit===false){
                    bottonTemp = '<p class="text-primary">'+value+'</p>';
                }else {
                }


                const container = Util.createDOM('<div class="node-container" ></div>');
                const botton = Util.createDOM(bottonTemp);
                container.appendChild(botton);
                return container;
            }
        }, 'html');
        const tree = new G6.Tree({
            id: 'main',
            height: 450,
            fitView: 'cc',
            layoutCfg: {
                getHGap: function(/* d */) {
                    return 30;
                },
                getVGap: function(/* d */) {
                    return 20;
                },
            },
        });
        tree.source(this.props.decision.dataTemp);
        tree.node()
            .label(function (obj) {
                if(obj.key===undefined){
                    let temp = obj.sign===undefined?"":obj.sign;
                    let temp1 = obj.value===undefined?"":obj.value;
                    let temp2 = obj.variableName===undefined?"":obj.variableName;
                    return {
                        text:temp2+" "+temp+" "+temp1,
                    }
                }else {
                    let temp = obj.keyName===undefined?"":obj.keyName;
                    let temp1 = obj.value===undefined?"":obj.value;
                    let temp2 = obj.type===undefined?"":obj.type;
                    return {
                        text:" "+temp+" = "+temp1,
                    }
                }

            })
            .color(obj => {
                if(obj.key===undefined){
                    return '#bcc8d4';
                } else {
                    return '#f7988f';
                }
            })
            .style({
                fillOpacity: 1
            });
        tree.edge()
            .shape('smooth');
        tree.render();
        tree.on('contextmenu', function(ev){
            propsTemp.setState({
                showVisible:false
            })
            const item = ev.item;
            clickNode = item._attrs.model;
            if(item.destroyed===true){

            }else {
                propsTemp2.setClickNode(clickNode);
                propsTemp2.setClickItem(item);
            }

            if(item===null){
                propsTemp.setState({
                    showVisible:false
                })
            }else {
                if(item.destroyed===true){
                    propsTemp.setState({
                        showVisible:false
                    })
                }else {
                    propsTemp.setState({
                        showVisible:true
                    })
                }
            }


            propsTemp2.rigthClick();
        });

        propsTemp2.setTreeTemp(tree);
    }
    add = ()=>{
        let data2Temp = this.state.data2;
        let dataTemp = {"variable":"jcjs","sign":"<","value":"100","children":
            [
                {"variable":"dkje","sign":"<","value":"200","children":
                    [
                        {"variable":"age","sign":">=","value":"10","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]}
                    ]
                },
                {"variable":"dkje","sign":">=","value":"200","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]}
            ]
        };
        data2Temp.children.push(dataTemp)
        this.setState({
            data2:data2Temp
        })
        treeTemp.changeData(this.state.data2);
    }
    add1 = ()=>{
        edit = true;
        const tempqq =  {   "children":
            [
                {"variable":"jcjs","sign":">","value":"100","children":
                    [
                        {"variable":"dkje","sign":"<","value":"200","children":
                            [
                                {"variable":"age","sign":">=","value":"10","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]},
                                {"variable":"age","sign":"<","value":"10","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]}
                            ]
                        },
                        {"variable":"dkje","sign":">=","value":"200","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]}
                    ]
                },
                {"variable":"jcjs","sign":"<","value":"100","children":
                    [
                        {"variable":"dkje","sign":"<","value":"200","children":
                            [
                                {"variable":"age","sign":">=","value":"10","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]}
                            ]
                        },
                        {"variable":"dkje","sign":">=","value":"200","resultMark":"1","children":[{"key":"tqje","value":"2000","type":"String"}]}
                    ]
                }
            ],
            "variable":"start",
            "variable1":"start",
        };
        treeTemp.changeData(tempqq);
    }
    setPropsTemp = (clickNode)=>{
        this.props.setClickNode(clickNode);
    }
    changeDate2 = (data)=>{
        if(data.nodes===undefined){

        }else {
            const tempResult = data.nodes;
            data.children = tempResult;
            delete data.nodes;
            data.children.map((data)=>{
                this.changeDate(data);
            })
        }
        if(data.variable===undefined){
            data.variable= "start";
            data.variable1= "start";
        }else {
        }
        if(data.result===undefined){

        }else {
            const tempResult1 = data.result;
            let valueTemp = [];
            valueTemp.push(tempResult1);
            data.children = valueTemp;
            data.resultMark = 1;
            delete data.result;
        }
    }
    changeDate1 = (data)=>{
        if(data.children===undefined){

        }else {
            if(data.resultMark===undefined){
                const tempResult = data.children;
                data.nodes = tempResult;
                delete data.children;
                data.nodes.map((data)=>{
                    this.changeDate1(data);
                })
            }else {
                const tempResult1 = data.children;
                data.result = tempResult1[0];
                delete data.children;
                delete data.resultMark;
            }
        }
        if(data.variable1===undefined){

        }else {
            delete data.variable1;
            delete data.variable;
        }

    }
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
    handleClick3 = () => {
        let treeTemp = this.props.decision.treeTemp;
        let clickNode = this.props.decision.clickNode;
        if(clickNode.variable==="start"){
            message.info('初始节点不能删除');
        }else {
            let keyTempValue = clickNode.keyTemp;
            let data = this.props.decision.dataTemp;
            this.deleteNode(keyTempValue,data);
            treeTemp.changeData(data);
            this.props.setData(data);
        }
    }
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
                        item.key = value1Id;
                        item.keyName = value1Name;
                        item.type = value3;
                        item.value = value5;
                    }else {
                        this.editNode1(keyTempValue,item,value1,value1Id,value1Name,value3,value5)
                    }
                });
            }
        }

    };
    handleClick2 = () => {
        this.props.setdecisionShowVariable(true)
    }
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
    handleClick1 = () => {
            if(this.props.decision.clickNode.variable===undefined){
                message.info('结果节点不能添加子节点');
            }else {
                if(this.props.decision.clickNode.children.length===1&&this.props.decision.clickNode.children[0].key!==undefined){
                    message.info("已有结果节点,不能添加子节点")
                }else {
                    this.props.setdecisionShowVariable(true)
                }

            }

    }
    handleMenuClick = (e) => {

        let valueTemp0= '';
        let valueTemp1= '';
        let valueTemp2= '';
        let valueTemp3= '';
        if(e.key==="1"){
            valueTemp0= '';
            valueTemp1= '';
            valueTemp2= '';
            valueTemp3= '';
            this.props.setValueTempDefault(valueTemp0,valueTemp1,valueTemp2,valueTemp3)
            this.handleClick1()
            this.props.handleClickCurd("1")
        }else if(e.key==="2"){
            // console.log("进入修改")
            valueTemp0= this.props.decision.clickNode.variable?"1":"2";
            valueTemp1= this.props.decision.clickNode.variable?this.props.decision.clickNode.variable:this.props.decision.clickNode.key;
            valueTemp2= this.props.decision.clickNode.variable?this.props.decision.clickNode.sign:this.props.decision.clickNode.type;
            valueTemp3= this.props.decision.clickNode.variable?this.props.decision.clickNode.value:this.props.decision.clickNode.value;
            // console.log(this.props.decision.clickNode)
            this.props.setValueTempDefault(valueTemp0,valueTemp1,valueTemp2,valueTemp3)
            this.handleClick2()
            this.props.handleClickCurd("2")

        }else if(e.key==="3"){
            this.handleClick3()
            this.props.handleClickCurd("3")
        }
        this.setState({
            key:e.key
        })
    }
    handleOk1 = (e) => {
        const { value1,} = this.state;
        let isWitchNode = this.props.decision.dataInputValue
        let value1Id = this.props.decision.dataInputValue1
        let value1Name = this.props.decision.dataInputValue11
        let value3 = this.props.decision.dataInputValue2
        let value5 = this.props.decision.dataInputValue3

        if(this.state.key==="3"){
        }else if(this.state.key==="2"){
            let treeTemp = this.props.decision.treeTemp;
            let clickNode = this.props.decision.clickNode;
            let keyTempValue = clickNode.keyTemp;
            let data = this.props.decision.dataTemp;
            if(isWitchNode===''||isWitchNode===undefined){
                message.info('节点类型不能为空');
            }
            if(isWitchNode==="1"){
                if(value1Name===''||value1Name===undefined){
                    message.info('节点名称不能为空');
                }else if(value3===''||value3===undefined){
                    message.info('运算符不能为空');
                }else if(value5===''||value5===undefined){
                    message.info('逻辑值不能为空');
                }else {
                    this.editNode(keyTempValue,data,value1,value1Id,value1Name,value3,value5);
                    treeTemp.changeData(data);
                    this.props.setData(data);
                    this.props.setdecisionShowVariable(false)
                }
            }else if(isWitchNode==="2"){
                if(value1Name===''||value1Name===undefined){
                    message.info('结果名称不能为空');
                }else if(value3===''||value3===undefined){
                    message.info('类型不能为空');
                }else if(value5===''||value5===undefined){
                    message.info('值不能为空');
                }else {
                    this.editNode1(keyTempValue,data,value1,value1Id,value1Name,value3,value5);
                    treeTemp.changeData(data);
                    this.props.setData(data);
                    this.props.setdecisionShowVariable(false)
                }
            }
        }else if(this.state.key==="1"){
            let treeTemp = this.props.decision.treeTemp;
            let clickNode = this.props.decision.clickNode;
            let keyTempValue = clickNode.keyTemp;
            let data = this.props.decision.dataTemp;
            if(isWitchNode===''||isWitchNode===undefined){
                message.info('节点类型不能为空');
            }
            if(isWitchNode==="1"){
                if(value1Name===''||value1Name===undefined){
                    message.info('节点名称不能为空');
                }else if(value3===''||value3===undefined){
                    message.info('运算符不能为空');
                }else if(value5===''||value5===undefined){
                    message.info('逻辑值不能为空');
                }else {
                    let tempNode = {"variable":value1Id,"variableName":value1Name,"keyTemp":this.props.decision.tempKey,"sign":value3,"value":value5,"children":[]}
                    this.props.setTempKey();
                    this.addNode(keyTempValue,data,tempNode);
                    treeTemp.changeData(data);
                    this.props.setData(data);
                    this.props.setdecisionShowVariable(false)
                }
            }else if(isWitchNode==="2"){
                if(value1Name===''||value1Name===undefined){
                    message.info('结果名称不能为空');
                }else if(value3===''||value3===undefined){
                    message.info('类型不能为空');
                }else if(value5===''||value5===undefined){
                    message.info('值不能为空');
                }else {
                    let tempNode = {"key":value1Id,"keyName":value1Name,"keyTemp":this.props.decision.tempKey,"type":value3,"value":value5}
                    this.props.setTempKey();
                    this.addNode(keyTempValue,data,tempNode);
                    console.log(data)
                    treeTemp.changeData(data);
                    this.props.setData(data);
                    this.props.setdecisionShowVariable(false)
                }
            }
        }
    }
    handleCancel1 = (e) => {
        this.props.setdecisionShowVariable(false)
    }
    render() {
        const { showVisible,visible,clickX,clickY } = this.state;
        // let s = "";
        //      s += " 网页可见区域宽："+ document.body.clientWidth+"\n";
        //       s += " 网页可见区域高："+ document.body.clientHeight+"\n";
        // s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)"+"\n";
        // s += " 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)"+"\n";
        //       s += " 网页正文全文宽："+ document.body.scrollWidth+"\n";
        //       s += " 网页正文全文高："+ document.body.scrollHeight+"\n";
        // s += " 网页被卷去的高(ff)："+ document.body.scrollTop+"\n";
        //        s += " 网页被卷去的高(ie)："+ document.documentElement.scrollTop+"\n";
        //        s += " 网页被卷去的左："+ document.body.scrollLeft+"\n";
        //       s += " 网页正文部分上："+ window.screenTop+"\n";
        //      s += " 网页正文部分左："+ window.screenLeft+"\n";
        //      s += " 屏幕分辨率的高："+ window.screen.height+"\n";
        //        s += " 屏幕分辨率的宽："+ window.screen.width+"\n";
        //        s += " 屏幕可用工作区高度："+ window.screen.availHeight+"\n";
        //        s += " 屏幕可用工作区宽度："+ window.screen.availWidth+"\n";
        //        s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色"+"\n";
        //        s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸"+"\n";
        // console.log(s)
        // console.log("屏幕坐标")
        // console.log(clickX)
        // console.log(clickY)
        let style = {
            zIndex:9999,
            // left:clickX-248,
            // left:(clickX-248)*1366/window.screen.width,
            left:clickX-(window.screen.width*0.18),
            top:clickY-(window.screen.height*0.67),
            // top:(clickY-515)*768/window.screen.height,
        }
        const menu = (
            <Menu onClick={this.handleMenuClick} style={style}>
                <Menu.Item key="1">添加节点</Menu.Item>
                <Menu.Item key="2">修改节点</Menu.Item>
                <Menu.Item key="3">
                    删除节点
                    </Menu.Item>
            </Menu>
        )

        return (
            <div>
                <div id="main" ></div>
                {showVisible?<Dropdown overlay={menu}   visible={this.state.visible}>
                    <span style={{ userSelect: 'none' }}></span>
                </Dropdown>:""}
                <Modal width={830}
                       title="操作"
                       visible={this.props.decision.decisionShowVariable}
                       onOk={this.handleOk1}
                       onCancel={this.handleCancel1}
                >
                    <EditableCell3 />
                </Modal>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        decision: state.decision
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        rigthClick: (indexTemp) => {
            dispatch(rigthClick(indexTemp))
        },
        setClickNode: (indexTemp) => {
            dispatch(setClickNode(indexTemp))
        },
        setTreeTemp: (indexTemp) => {
            dispatch(setTreeTemp(indexTemp))
        },
        setClickItem: (indexTemp) => {
            dispatch(setClickItem(indexTemp))
        },
        getInitData: () => {
            dispatch(getInitData())
        },
        setshowVisible: (temp) => {
            dispatch(setshowVisible(temp))
        },
        setXandY: (temp1,temp2) => {
            dispatch(setXandY(temp1,temp2))
        },
        setdecisionShowVariable: (temp) => {
            dispatch(setdecisionShowVariable(temp))
        },
        setData: (indexTemp) => {
            dispatch(setData(indexTemp))
        },
        setTempKey: (indexTemp) => {
            dispatch(setTempKey(indexTemp))
        },
        handleClickCurd: (indexTemp) => {
            dispatch(handleClickCurd(indexTemp))
        },
        setValueTempDefault: (indexTemp0,indexTemp1,indexTemp2,indexTemp3) => {
            dispatch(setValueTempDefault(indexTemp0,indexTemp1,indexTemp2,indexTemp3))
        },
    }
};
const MyTableTemp = connect(mapStateToProps, mapDispatchToProps)(EchartsTest);
export default MyTableTemp;