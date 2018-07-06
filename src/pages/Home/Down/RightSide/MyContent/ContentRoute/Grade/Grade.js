import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input ,Pagination} from 'antd';
import { Link } from 'react-router-dom';
import {getVariableLibInfoGrade,deleteVariableLib,modifyVariableLib,addVariableLib,setSelectRowGradeSelect,setShowModal1Grade,setLibOrItem,setModalViewGrade} from "actions/beforeGrade";
import {activateGrade,stopGrade,setRowTemp,setShowModalGrade,setModalViewGradeNew} from "actions/beforeGrade";
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
class Grade extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.getDataTemp('',1,5)
    }
    getDataTemp = (username,start,size) => {
        const params = {
            mc:username,
            projectId:sessionStorage.getItem('projectId'),
            start:start,
            size:size,
        };
        this.props.getVariableLibInfoGrade(params);
    }
    componentDidMount() {
    }
    compileTemp = (row) =>{
        this.props.history.push('/rule/home/rule/resource/grade/item');
    }

    activateTemp = (text, record) =>{
        const params = {
            modelId:record.modelid,
        }
        this.props.activateGrade(params);
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
        this.activateTemp(this.props.beforeGrade.selectRowGradeSelect.modelid, this.props.beforeGrade.selectRowGradeSelect)
    };
    handleLibAdd2 = () => {
        this.compileTemp(this.props.beforeGrade.selectRowGradeSelect)
    };
    handleLibModify = () => {
        if(this.props.beforeGrade.selectRowGradeSelect===undefined||this.props.beforeGrade.selectRowGradeSelect===''){
            message.info("先选择要修改的")
        }else {
            this.props.setShowModalGrade(true)
            this.props.setModalViewGradeNew('modify');
        }

    };
    handleLibDelete = () => {
        if(this.props.beforeGrade.selectRowGradeSelect===undefined){
            message.info("先选择要删除的")
        }else {
            this.showConfirm();
        }


    };
    getDataTemp1 = (row,start,size,index, e) => {
        this.onRowSelectHandle(index, e)
        this.props.setSelectRowGradeSelect(row);
    }
    onRowSelectHandle = (index, e)=> {
        if (this.selectIndex === index) return; // 不加个判断会连续在一行tr加样式,到时候会有多个选中
        this.selectIndex = index;

        const tbodytrs = e.target.parentNode.parentNode.childNodes;
        const counts = tbodytrs.length;

        for (let i = 0; i < counts; i++) {
            if (i !== index) {
                tbodytrs[i].className = tbodytrs[i].className.replace(" tableBackground", "");
            } else {
                tbodytrs[i].className += " tableBackground";
            }
        }
    }
    showConfirm = () => {
        let propsTemp = this.props;

        confirm({
            title: '确定要删除这个评分卡吗?',
            content: '删除后无法恢复',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                let params = {
                    modelid:propsTemp.beforeGrade.selectRowGradeSelect.modelid,
                };
                propsTemp.deleteVariableLib(params);
            },
            onCancel() {
            },
        });
    };
    handleOk1 = (e) => {
            if (this.props.beforeGrade.modalViewGrade==='add') {
                if(this.props.beforeGrade.projectAddName===''||this.props.beforeGrade.projectAddName===undefined){
                    message.info('新评分卡名不能为空');
                }else if(this.props.beforeGrade.projectAddName2===''||this.props.beforeGrade.projectAddName2===undefined){
                    message.info('新KEY不能为空');
                }else if(this.props.beforeGrade.projectAddName1===''||this.props.beforeGrade.projectAddName1===undefined){
                    message.info('新评分卡绑定库不能为空');
                }else {
                    let params = {
                        variableProjectId: this.props.beforeGrade.projectAddName1,
                        variableProjectName: this.props.beforeGrade.projectAddName4,
                        projectid: sessionStorage.getItem('projectId'),
                        name: this.props.beforeGrade.projectAddName,
                        key: this.props.beforeGrade.projectAddName2,
                        description: this.props.beforeGrade.projectAddName3,
                        nodes:'',
                        isWeight:false,
                    };
                    this.props.addVariableLib(params);
                }
            }else if(this.props.beforeGrade.modalViewGrade==='modify'){
                if(this.props.beforeGrade.projectModifyName===''||this.props.beforeGrade.projectModifyName===undefined){
                    message.info('修改评分卡名不能为空');
                }else if(this.props.beforeGrade.projectModifyName1===''||this.props.beforeGrade.projectModifyName1===undefined){
                    message.info('修改评分卡绑定库不能为空');
                }else {
                    let params = {
                        variableProjectId: this.props.beforeGrade.projectModifyName1,
                        projectid: this.props.beforeGrade.selectRowGradeSelect.projectid,
                        name: this.props.beforeGrade.projectModifyName,
                        key: this.props.beforeGrade.selectRowGradeSelect.key,
                        description: this.props.beforeGrade.selectRowGradeSelect.description,
                        nodes:this.props.beforeGrade.selectRowGradeSelect.nodes,
                        isWeight:false,
                        modelid:this.props.beforeGrade.selectRowGradeSelect.modelid,
                    };
                    this.props.modifyVariableLib(params,"修改");
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
        }, {
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
        //         {/*<Input  placeholder="Basic usage" defaultValue={value} size="small"/>*/}
        //         {/*<Input  placeholder="" defaultValue={""} size="small"/>*/}
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
        //     render: (text, record) => <Button type="dashed" size="small" onClick={(text)=>this.compileTemp(text)}>
        //         {/*<Link to="/rule/home/rule/resource/grade/item">编辑</Link>*/}编辑
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
                {/*<Button type="primary">保存卡</Button>*/}
            </Col>
        </Row>;

        return (
            <div>

                <Table
                    columns={columns}
                    dataSource={this.props.beforeGrade.resInfo.resultList}
                    bordered
                    title={() => butAndSerch}
                    pagination={false}
                    onRow={(record,index) => {
                        return {
                            onClick: (e) => {this.getDataTemp1(record,1,5,index,e)},       // 点击行
                        }
                    }
                    }
                />
                <Pagination defaultCurrent={1}  defaultPageSize={5} total={this.props.beforeGrade.resInfo.totalcount} style={{textAlign:'right',marginTop:25}}  onChange={(page, pageSize)=>this.getDataTemp('',page,5)}/>
                <Modal width={830}
                       title="操作"
                       visible={this.props.beforeGrade.showModelGrade}
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
        beforeGrade: state.beforeGrade,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getVariableLibInfoGrade: (params) => {
            dispatch(getVariableLibInfoGrade(params))
        },
        deleteVariableLib: (params) => {
            dispatch(deleteVariableLib(params))
        },
        modifyVariableLib: (params,updataOrEdit) => {
            dispatch(modifyVariableLib(params,updataOrEdit))
        },
        addVariableLib: (params) => {
            dispatch(addVariableLib(params))
        },
        setSelectRowGradeSelect: (params) => {
            dispatch(setSelectRowGradeSelect(params))
        },
        setShowModal1Grade: (temp) => {
            dispatch(setShowModal1Grade(temp))
        },
        setLibOrItem: (temp) => {
            dispatch(setLibOrItem(temp))
        },

        activateGrade: (temp) => {
            dispatch(activateGrade(temp))
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Grade));