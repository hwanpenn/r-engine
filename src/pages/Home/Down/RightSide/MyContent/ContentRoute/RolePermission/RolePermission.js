import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import {connect} from 'react-redux';
import {getPermission,addPermission,setShowModel,modifyPermission} from "actions/permissionRole";
import { Modal,Pagination } from 'antd';
import PermissionForm from './PermissionForm/PermissionForm';
import { message } from 'antd';
import {setPermissionUserType,setPermissionUserUsername,setPermissionUserPassword,setPermissionUserCaption} from "actions/permissionUserInfoRole";

const Search = Input.Search;
const confirm = Modal.confirm;


class RolePermission extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.getDataTemp('',1,5);
    }
    getDataTemp = (username,start,size) => {
        let params = {
            name: username,
            start: start,
            size:size
        };
        this.props.getPermission(params);
    }
    state = { visible: false }
    handleOk = (e) => {
        if (this.props.permission.addOrModify==='add'){
            if(this.props.permissionUserInfo.username===''||this.props.permissionUserInfo.username===undefined){
                message.info('用户名不能为空');
            }else {
                let param = new URLSearchParams();
                param.append("type",'role');
                param.append("rolename",this.props.permissionUserInfo.username);
                this.props.addPermission(param);
            }
        }else if(this.props.permission.addOrModify==='modify'){
           if(this.props.permissionUserInfo.captionModify===''||this.props.permissionUserInfo.captionModify===undefined){
                message.info('新帐号名不能为空');
            }else {
                let param = new URLSearchParams();
                param.append("type",'role');
                param.append("id",this.props.permissionRole.row.id);
                param.append("rolename",this.props.permissionUserInfo.captionModify);
                this.props.modifyPermission(param);
            }
        }

    }
    handleCancel = (e) => {
        this.props.setShowModel(false)
    }
    onClickTemp = (booleanTemp,stringTemp,row) => {
        if(stringTemp==="delete"){
            this.showDeleteConfirm();
        }else if(stringTemp==="add"){
            this.props.setShowModel(booleanTemp,stringTemp,"");
        }else {
            this.props.setShowModel(booleanTemp,stringTemp,row);
        }

    }

    showDeleteConfirm = () =>{
        confirm({
            title: '你确定要删除该角色吗?',
            content: '有问题找刘波',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
            },
            onCancel() {
            },
        });
    }
    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',

        }, {
            title: '名称',
            className: 'column-money',
            dataIndex: 'name',
            render: (value, row, index) =>{
                let valueName ='';
                if(value==="管理员"){
                    valueName = "管理员"
                }else if(value==="普通用户"){
                    valueName = "普通用户"
                }else {
                    valueName = value
                }
                const obj = {
                    children:valueName
                    ,
                    props: {},
                };
                return obj;
            },
        }, {
            title: '编辑',
            dataIndex: '',
            width: 100,
            render: (value, row, index) => <Button onClick={()=>this.onClickTemp(true,"modify",row)} type="dashed" size="small">编辑</Button>,
        },
        ];
        const butAndSerch = <Row>
            <Col span={6}><Search
                placeholder="搜索"
                onSearch={value => {
                    this.getDataTemp(value,1,5);
                }}
                enterButton
            /></Col>
            <Col span={18} className="MyAlign"><Button onClick={()=>this.onClickTemp(true,"add","")}>+添加</Button></Col>
        </Row>;
        return (
            <div>

                <Table
                    columns={columns}
                    dataSource={this.props.permissionRole.permission.resultList}
                    bordered
                    title={() => butAndSerch}
                    pagination={false}
                />
                <Pagination defaultCurrent={1} defaultPageSize={5} total={this.props.permissionRole.permission.totalcount} style={{textAlign:'right',marginTop:25}}  onChange={(page, pageSize)=>this.getDataTemp('',page,7)}/>
                <Modal width={830}
                       title="操作"
                       visible={this.props.permission.showModel}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                ><PermissionForm  /></Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        permission: state.permission,
        permissionRole: state.permissionRole,
        permissionUserInfo: state.permissionUserInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPermission: (params) => {
            dispatch(getPermission(params))
        },
        setPermissionUserType: (temp) => {
            dispatch(setPermissionUserType(temp))
        },
        setPermissionUserUsername: (temp) => {
            dispatch(setPermissionUserUsername(temp))
        },
        setPermissionUserPassword: (temp) => {
            dispatch(setPermissionUserPassword(temp))
        },
        setPermissionUserCaption: (temp) => {
            dispatch(setPermissionUserCaption(temp))
        },
        addPermission: (params) => {
            dispatch(addPermission(params))
        },
        modifyPermission: (params) => {
            dispatch(modifyPermission(params))
        },
        setShowModel: (boobean,addOrModify,row) => {
            dispatch(setShowModel(boobean,addOrModify,row))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RolePermission);