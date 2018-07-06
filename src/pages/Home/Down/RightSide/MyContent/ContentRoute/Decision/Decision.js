import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input ,Pagination} from 'antd';
import { Link } from 'react-router-dom';
import {getVariableLibInfoDecision,deleteVariableLib,modifyVariableLib,addVariableLib,setSelectRowDecisionSelect,setShowModal1Grade,setLibOrItem,setModalViewGrade} from "actions/beforeDecision";
import {activateDecision,stopGrade,setRowTemp,setShowModalGrade,setModalViewGradeNew} from "actions/beforeDecision";
import ModalView from "./ModalView/ModalView";
import {connect} from 'react-redux';
import { Modal } from 'antd';
import { message } from 'antd';
import {withRouter} from "react-router-dom";
const confirm = Modal.confirm;
message.config({
    duration: 1,
});
const Search = Input.Search;
class Decision extends Component {
    componentWillMount(){
        this.getDataTemp('',1,5)
    }
    getDataTemp = (username,start,size) => {
        const params = {
            name:username,
            projectId:sessionStorage.getItem('projectId'),
            start:start,
            size:size,
        };
        this.props.getVariableLibInfoDecision(params);
    }
    compileTemp = (row) =>{
        this.props.history.push('/rule/home/rule/resource/decision/item');
    }
    activateTemp = (text, record) =>{
        const params = {
            modelId:record.modelid,
        }
        this.props.activateDecision(params);
    }
    stopTemp = (row) =>{
        const params = {
            id:row.id,
        }
        this.props.stopGrade(params);
    }
    handleLibAdd = () => {
        this.props.setShowModalGrade(true)

        this.props.setModalViewGradeNew('add');

    };
    handleLibAdd1 = () => {
        this.activateTemp(this.props.beforeDecision.selectRowDecisionSelect.modelid, this.props.beforeDecision.selectRowDecisionSelect)
    };
    handleLibAdd2 = () => {
        this.compileTemp(this.props.beforeDecision.selectRowDecisionSelect)
    };
    handleLibModify = () => {
        if(this.props.beforeDecision.selectRowDecisionSelect===undefined||this.props.beforeDecision.selectRowDecisionSelect===''){
            message.info("先选择要修改的")
        }else {
            this.props.setShowModalGrade(true)
            this.props.setModalViewGradeNew('modify');
        }

    };
    handleLibDelete = () => {
        if(this.props.beforeDecision.selectRowDecisionSelect===undefined){
            message.info("先选择要删除的")
        }else {
            this.showConfirm();
        }

    };
    getDataTemp1 = (row,start,size,index, e) => {
        this.onRowSelectHandle(index, e)
        this.props.setSelectRowDecisionSelect(row);

    }
    onRowSelectHandle = (index, e)=> {
        if (this.selectIndex === index) return; // 不加个判断会连续在一行tr加样式,到时候会有多个选中
        this.selectIndex = index;

        const tbodytrs = e.target.parentNode.parentNode.childNodes;
        // console.log(tbodytrs)
        const counts = tbodytrs.length;

        for (let i = 0; i < counts; i++) {
            if (i !== index) {
                tbodytrs[i].className = tbodytrs[i].className.replace(" tableBackground", "");
            } else {
                tbodytrs[i].className += " tableBackground";
            }
        }
        // console.log(tbodytrs)
    }
    showConfirm = () => {
        let propsTemp = this.props;
        confirm({
            title: '确定要删除这个决策集吗?',
            content: '删除后无法恢复',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                let params = {
                    modelid:propsTemp.beforeDecision.selectRowDecisionSelect.modelid,
                };
                propsTemp.deleteVariableLib(params);
            },
            onCancel() {
            },
        });
    };
    handleOk1 = (e) => {
        if (this.props.beforeDecision.modalViewGrade==='add') {
            if(this.props.beforeDecision.projectAddName===''||this.props.beforeDecision.projectAddName===undefined){
                message.info('新决策集名不能为空');
            }else if(this.props.beforeDecision.projectAddName2===''||this.props.beforeDecision.projectAddName2===undefined){
                message.info('新KEY不能为空');
            }else  if(this.props.beforeDecision.projectModifyNameDecision1===''||this.props.beforeDecision.projectAddName2===undefined){
                message.info('绑定库不能为空');
            }else {
                let params = {
                    variableProjectId: this.props.beforeDecision.projectModifyNameDecision1,
                    name: this.props.beforeDecision.projectAddName,
                    key: this.props.beforeDecision.projectAddName2,
                    description: this.props.beforeDecision.projectAddName3,
                    projectid: sessionStorage.getItem('projectId'),
                    nodes:'{"nodes":[]}',
                };
                this.props.addVariableLib(params);
            }
        }else if(this.props.beforeDecision.modalViewGrade==='modify'){
            if(this.props.beforeDecision.projectModifyName===''||this.props.beforeDecision.projectModifyName===undefined){
                message.info('修改决策集名不能为空');
            }else {
                let params = {
                    name: this.props.beforeDecision.projectModifyName,
                    key: this.props.beforeDecision.selectRowDecisionSelect.key,
                    description: this.props.beforeDecision.selectRowDecisionSelect.description,
                    projectid: this.props.beforeDecision.selectRowDecisionSelect.projectid,
                    nodes:this.props.beforeDecision.selectRowDecisionSelect.nodes,
                    modelid:this.props.beforeDecision.selectRowDecisionSelect.modelid,
                };
                this.props.modifyVariableLib(params);
            }
        }


    }
    handleCancel1 = (e) => {
        this.props.setShowModalGrade(false);
    }
    render() {
        const columns = [{
            title: '名称',
            dataIndex: 'name',

        },  {
            title: '描述',
            className: 'column-money',
            dataIndex: 'description',
        }, {
            title: 'KEY',
            dataIndex: 'key',
        },
        //     {
        //     title: '操作',
        //     dataIndex: 'modelid',
        //     width: 100,
        //     render: (value, row, index) => {
        //         const obj = {
        //             children:
        //                 <Button type="dashed" size="small" onClick={()=>this.activateTemp(value, row)}>发布</Button>
        //             ,
        //             props: {},
        //         };
        //         return obj;
        //     },
        // },{
        //     title: '编辑',
        //     key: 'operation',
        //     fixed: 'right',
        //     width: 100,
        //     render: (value, row, index) => <Button type="dashed" size="small" onClick={(row)=>this.compileTemp(row)}>
        //         编辑
        //     </Button>,
        // }
        ];

        const butAndSerch = <Row>
            <Col span={6}><Search
                placeholder=""
                onSearch={value => this.getDataTemp(value,1,5)}
                enterButton
            /></Col>
            <Col span={18} className="MyAlign"><Button onClick={()=>this.handleLibAdd()}>增加</Button><Button onClick={()=>this.handleLibModify()}>修改</Button><Button onClick={()=>this.handleLibDelete()} style={{marginRight: 15}}>删除</Button><Button  onClick={()=>this.handleLibAdd2()}>编辑</Button><Button type="primary" onClick={()=>this.handleLibAdd1()}>发布</Button>
            </Col>
        </Row>;
        return (
            <div>
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={this.props.beforeDecision.resInfo.resultList}
                    bordered
                    title={() => butAndSerch}
                    pagination={false}
                    onRow={(record,index) => {
                        return {
                            onClick: (e) => {this.getDataTemp1(record,1,5,index,e)},
                        }
                    }
                    }
                />
                <Pagination defaultCurrent={1} defaultPageSize={5} total={this.props.beforeDecision.resInfo.totalcount} style={{textAlign:'right',marginTop:25}}  onChange={(page, pageSize)=>this.getDataTemp('',page,5)}/>
                <Modal width={830}
                       title="操作"
                       visible={this.props.beforeDecision.showModelGrade}
                       onOk={this.handleOk1}
                       onCancel={this.handleCancel1}
                >
                    <ModalView />
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        beforeDecision: state.beforeDecision,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVariableLibInfoDecision: (params) => {
            dispatch(getVariableLibInfoDecision(params))
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
        setSelectRowDecisionSelect: (params) => {
            dispatch(setSelectRowDecisionSelect(params))
        },
        setShowModal1Grade: (temp) => {
            dispatch(setShowModal1Grade(temp))
        },
        setLibOrItem: (temp) => {
            dispatch(setLibOrItem(temp))
        },

        activateDecision: (temp) => {
            dispatch(activateDecision(temp))
        },
        stopGrade: (temp) => {
            dispatch(stopGrade(temp))
        },
        setModalViewGrade: (temp) => {
            dispatch(setModalViewGrade(temp))
        },
        setRowTemp: (temp) => {
            dispatch(setRowTemp(temp))
        },
        setShowModalGrade: (temp) => {
            dispatch(setShowModalGrade(temp))
        },
        setModalViewGradeNew: (temp) => {
            dispatch(setModalViewGradeNew(temp))
        },
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Decision));