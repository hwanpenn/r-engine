import {connect} from 'react-redux';
import {getVariableItemInfo,deleteVariableItem,modifyVariableItem,addVariableItem,intoVariableItem,setSelectRowItem,setShowModal2} from "actions/variableItem";
import {getVariableLibInfo,deleteVariableLib,modifyVariableLib,addVariableLib,setSelectRow,setShowModal1,setLibOrItem,setModalView} from "actions/variableLib";
import {setProjectModifyName1,setProjectAddName1,setProjectModifyNameType1,setProjectAddNameType1} from "actions/variableLib";
import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input,Pagination } from 'antd';
import  ModalView from './ModalView/ModalView';
import { Modal } from 'antd';
import { message } from 'antd';
import { Upload, Icon } from 'antd';
import {URL} from 'config/config';
const confirm = Modal.confirm;
message.config({
    duration: 1,
});
const Search = Input.Search;


class Constant extends Component {
    componentWillMount(){
    }
    componentDidMount(){
        let param = new URLSearchParams();
        param.append("mc",'');
        param.append("start",1);
        param.append("size",5);
        if(this.props.projectInfo.projectId!==''||this.props.projectInfo.projectId!==null||this.props.projectInfo.projectId!==undefined){
             param.append("projectId",sessionStorage.getItem('projectId'));
        }else {
             param.append("projectId",this.props.projectInfo.projectId);
        }
        this.props.getVariableLibInfo(param)
    }
    getDataTemp = (username,start,size) => {
        let dataTemp = '' ;
        if(dataTemp===undefined||dataTemp===''){
        }else {
        }
        const params = {
            mc:username,
            projectId:sessionStorage.getItem('projectId'),
            start:start,
            size:size,
        };
        this.props.getVariableLibInfo(params);
    }
    getDataTemp1 = (row,start,size,index,e) => {
        this.onRowSelectHandle(index, e)
        this.props.setSelectRow(row);
        const params = {
            mc:"",
            key:row.id,
            start:start,
            size:size,
        };
        this.props.getVariableItemInfo(params);
    }
    getDataTemp11 = (start,size) => {
        const params = {
            name:this.props.variableLib.selectRow.mc,
            key:this.props.variableLib.selectRow.id,
            start:start,
            size:size,
        };
        this.props.getVariableItemInfo(params);
    }
    getDataTemp3 = (username,start,size) => {
        const params = {
            mc:username,
            key:this.props.variableLib.selectRow.id,
            start:start,
            size:size,
        };
        this.props.getVariableItemInfo(params);
    }
    getDataTemp2 = (row,index, e) => {
        this.onRowSelectHandle(index, e)
        this.props.setSelectRowItem(row);
    }
    handleLibAdd = () => {
        this.props.setLibOrItem('lib');
        this.props.setModalView('add');
        this.props.setShowModal1(true);
    };
    handleLibModify = () => {
        this.props.setLibOrItem('lib');
        this.props.setModalView('modify');
        this.props.setShowModal1(true);
    };
    handleLibDelete = () => {
        this.showConfirm();

    };
    handleItemAdd = () => {
        this.props.setLibOrItem('item');
        this.props.setModalView('add');
        this.props.setShowModal1(true);
    };
    handleItemModify = () => {
        // console.log("这里")
        // console.log(this.props.variableItem.selectRowItem)
        if(this.props.variableItem.selectRowItem===''||this.props.variableItem.selectRowItem===undefined){
            message.info("请先选择你要修改的");
        }else {
            this.props.setLibOrItem('item');
            this.props.setModalView('modify');
            this.props.setShowModal1(true);
        }

    };
    handleItemDelete = () => {
        this.showConfirm1()
    };
    handleIntoItem = () => {
        const params = {};
        this.props.intoVariableItem(params)
    };
    showConfirm = () => {
        let propsTemp = this.props;
        let propsTemp1 = this.props.variableLib.selectRow;
        confirm({
            title: '确定要删除这个变量库吗?',
            content: '删除后无法恢复',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                let params = {
                    id: propsTemp1.id,

                };
                propsTemp.deleteVariableLib(params);
            },
            onCancel() {
            },
        });
    };
    showConfirm1 = () => {
        let propsTemp = this.props;
        let propsTemp1 = this.props.variableItem.selectRowItem;
        let selectRowTemp = this.props.variableLib.selectRow;
        confirm({
            title: '确定要删除这个变量吗?',
            content: '删除后无法恢复',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                let params = {
                    id: propsTemp1.id,

                };
                propsTemp.deleteVariableItem(params,selectRowTemp);
            },
            onCancel() {
            },
        });
    };
    handleOk1 = (e) => {
        if(this.props.variableLib.libOrItem==='lib'){
            if (this.props.variableLib.modalView==='add') {
                if(this.props.variableLib.projectAddName===''||this.props.variableLib.projectAddName===undefined){
                    message.info('新项目名不能为空');
                }else {
                    let params = {
                        projectId: sessionStorage.getItem('projectId'),
                        mc: this.props.variableLib.projectAddName,
                    };
                    this.props.addVariableLib(params);
                }
            }else if(this.props.variableLib.modalView==='modify'){
                if(this.props.variableLib.projectModifyName===''||this.props.variableLib.projectModifyName===undefined){
                    message.info('修改项目名不能为空');
                }else {
                    let params = {
                        id: this.props.variableLib.selectRow.id,
                        mc: this.props.variableLib.projectModifyName,
                    };
                    this.props.modifyVariableLib(params);
                }
            }
        }else if(this.props.variableLib.libOrItem==='item'){
            if (this.props.variableLib.modalView==='add') {
                if(this.props.variableLib.projectAddName1===''||this.props.variableLib.projectAddName1===undefined){
                    message.info('新变量名不能为空');
                }else if(this.props.variableLib.projectAddName2===''||this.props.variableLib.projectAddName2===undefined){
                    message.info('新编码不能为空');
                }else if(this.props.variableLib.projectAddNameType1===''||this.props.variableLib.projectAddNameType1===undefined){
                    message.info('新变量类型不能为空');
                }else {
                    let params = {
                        bm:this.props.variableLib.projectAddName2,
                        type: this.props.variableLib.projectAddNameType1,
                        key: this.props.variableLib.selectRow.id,
                        mc: this.props.variableLib.projectAddName1,
                    };

                    let selectRowTemp = this.props.variableLib.selectRow;
                    this.props.addVariableItem(params,selectRowTemp);
                }
            }else if(this.props.variableLib.modalView==='modify'){
                if(this.props.variableLib.projectModifyName1===''||this.props.variableLib.projectModifyName1===undefined){
                    message.info('修改变量名不能为空');
                }else if(this.props.variableLib.projectModifyNameType1===''||this.props.variableLib.projectModifyNameType1===undefined){
                    message.info('修改变量类型不能为空');
                }else {
                    let params = {
                        type: this.props.variableLib.projectModifyNameType1,
                        id: this.props.variableItem.selectRowItem.id,
                        mc: this.props.variableLib.projectModifyName1,
                    };

                    let selectRowTemp = this.props.variableLib.selectRow;
                    this.props.modifyVariableItem(params,selectRowTemp);
                }
            }
        }

    }
    handleCancel1 = (e) => {
        this.props.setShowModal1(false);
    }
    onRowSelectHandle = (index, e)=> {
        if (this.selectIndex === index) return; // 不加个判断会连续在一行tr加样式,到时候会有多个选中
        this.selectIndex = index;

        const tbodytrs = e.target.parentNode.parentNode.childNodes;
        console.log(tbodytrs)
        const counts = tbodytrs.length;

        for (let i = 0; i < counts; i++) {
            if (i !== index) {
                tbodytrs[i].className = tbodytrs[i].className.replace(" tableBackground", "");
            } else {
                tbodytrs[i].className += " tableBackground";
            }
        }
        console.log(tbodytrs)
    }
    render() {
        const variableId = this.props.variableLib.selectRow.id;
        const selectRowTemp = this.props.variableLib.selectRow;
        const propsTemp = this.props;
        const props = {
            name: 'file',
            action: URL+'/rule/variable/'+variableId+'/importXml',
            headers: {
                authorization: 'authorization-text',
            },
            showUploadList:false,
            onChange(info) {
                if (info.file.status !== 'uploading') {
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 上传成功`);
                    const paramsTemp = {
                        mc:selectRowTemp.mc,
                        key:selectRowTemp.id,
                        start:1,
                        size:5
                    };
                    propsTemp.getVariableItemInfo(paramsTemp);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 上传失败.`);
                }
            },
        };
        const columns2 = [{
            title: 'ID',
            dataIndex: 'id',

        }, {
            title: '字段名',
            dataIndex: 'mc',

        }, {
            title: '编码',
            dataIndex: 'bm',
        },{
            title: '数据类型',
            dataIndex: 'type',
        }
        ];
        const columns1 = [{
            title: 'KEY',
            dataIndex: 'id',

        }, {
            title: '名称',
            dataIndex: 'mc',
        }];
        const butAndSerch1 = <Row>
            <Col span={8}><Search size={"small"}
                                  placeholder=""
                                  onSearch={value => this.getDataTemp(value,1,5)}
                                  enterButton
            /></Col>
            <Col span={16} className="MyAlign"><Button size={"small"} onClick={()=>this.handleLibAdd()} style={{marginRight: 5}}>增加</Button><Button onClick={()=>this.handleLibModify()} size={"small"} style={{marginRight: 5}}>修改</Button><Button onClick={()=>this.handleLibDelete()} size={"small"} style={{marginRight: 5}}>删除</Button>
                {/*<Button type="primary">保存类库</Button>*/}
            </Col>
        </Row>;
        const butAndSerch2 = <Row>
            <Col span={8}><Search size={"small"}
                                  placeholder=""
                                  onSearch={value => this.getDataTemp3(value,1,5)}
                                  enterButton
            /></Col>
            <Col span={16} className="MyAlign">
                <Row>
                    <Col span={12} className="MyAlign">
                        <Upload {...props}>
                            <Button  size={"small"} style={{marginRight: 5}}>导入</Button>
                        </Upload>
                    </Col>
                    <Col span={12} className="MyAlign">
                        <Button onClick={()=>this.handleItemAdd()} size={"small"} style={{marginRight: 5}}>增加</Button>
                        <Button onClick={()=>this.handleItemModify()} size={"small"}style={{marginRight: 5}}>修改</Button>
                        <Button onClick={()=>this.handleItemDelete()} size={"small"} style={{marginRight: 5}}>删除</Button>
                    </Col>
                </Row>

            </Col>
        </Row>;

        return (
            <div>
                <Row>
                    <Col span={12}><div style={{paddingRight:10}}>库名：<Table
                        rowKey="id"
                        columns={columns1}
                        dataSource={this.props.variableLib.resInfo.resultList}
                        bordered
                        title={() => butAndSerch1}
                        pagination={false}
                        onRow={(record,index, ) => {
                            return {
                                onClick: (e) => {this.getDataTemp1(record,1,5,index,e)},
                            }
                        }
                        }
                    />
                        <Pagination defaultCurrent={1} defaultPageSize={5} style={{textAlign:'right',marginTop:25}} total={this.props.variableLib.resInfo.totalcount}  onChange={(page, pageSize)=>this.getDataTemp('',page,5)}/>
                    </div>
                    </Col>
                    <Col span={12}><div style={{paddingLeft:10}}>变量名：<Table
                         rowKey="id"
                        columns={columns2}
                        dataSource={this.props.variableItem.resInfo.resultList}
                        bordered
                        title={() => butAndSerch2}
                        pagination={false}
                         onRow={(record,index) => {
                                 return {
                                     onClick: (e) => {this.getDataTemp2(record,index,e)}
                                 }
                             }
                         }
                    />
                        <Pagination defaultCurrent={1} defaultPageSize={5} total={this.props.variableItem.resInfo.totalcount} style={{textAlign:'right',marginTop:25}} onChange={(page, pageSize)=>this.getDataTemp11(page,5)}/>
                    </div>
                    </Col>
                </Row>
                <Modal width={830}
                       title="操作"
                       visible={this.props.variableLib.showModel}
                       onOk={this.handleOk1}
                       onCancel={this.handleCancel1}
                ><ModalView /></Modal>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        variableItem: state.variableItem,
        variableLib: state.variableLib,
        projectInfo: state.projectInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVariableItemInfo: (params) => {
            dispatch(getVariableItemInfo(params))
        },
        deleteVariableItem: (params,selectRowTemp) => {
            dispatch(deleteVariableItem(params,selectRowTemp))
        },
        modifyVariableItem: (params,selectRowTemp) => {
            dispatch(modifyVariableItem(params,selectRowTemp))
        },
        addVariableItem: (params,selectRowTemp) => {
            dispatch(addVariableItem(params,selectRowTemp))
        },
        getVariableLibInfo: (params) => {
            dispatch(getVariableLibInfo(params))
        },
        deleteVariableLib: (params) => {
            dispatch(deleteVariableLib(params))
        },
        modifyVariableLib: (params) => {
            dispatch(modifyVariableLib(params))
        },
        addVariableLib: (params) => {
            dispatch(addVariableLib(params))
        },
        intoVariableItem: (params) => {
            dispatch(intoVariableItem(params))
        },
        setSelectRow: (params) => {
            dispatch(setSelectRow(params))
        },
        setSelectRowItem: (temp) => {
            dispatch(setSelectRowItem(temp))
        },
        setShowModal1: (temp) => {
            dispatch(setShowModal1(temp))
        },
        setShowModal2: (temp) => {
            dispatch(setShowModal2(temp))
        },
        setLibOrItem: (temp) => {
            dispatch(setLibOrItem(temp))
        },

        setModalView: (temp) => {
            dispatch(setModalView(temp))
        },
    }
};
const ConstantTemp = connect(mapStateToProps, mapDispatchToProps)(Constant);
export default ConstantTemp;