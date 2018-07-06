import { Table } from 'antd';
import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import {connect} from 'react-redux';
import {getPermission,addPermission,setShowModel,modifyPermission} from "actions/permission";
import { Modal } from 'antd';
import PermissionForm from './PermissionForm/PermissionForm';
import { message ,Pagination } from 'antd';
import {setPermissionUserType,setPermissionUserUsername,setPermissionUserPassword,setPermissionUserCaption} from "actions/permissionUserInfo";

const Search = Input.Search;
const confirm = Modal.confirm;


class Permission extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.getDataTemp('',1,5);
    }
    getDataTemp = (username,start,size) => {
        let params = {
            username: username,
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
            }else if(this.props.permissionUserInfo.password===''||this.props.permissionUserInfo.password===undefined){
                message.info('密码不能为空');
            }else if(this.props.permissionUserInfo.passwordComfirm===''||this.props.permissionUserInfo.passwordComfirm===undefined){
                message.info('确认密码不能为空');
            }else if(this.props.permissionUserInfo.passwordComfirm!==this.props.permissionUserInfo.password){
                message.info('两次密码不一样');
            }else if(this.props.permissionUserInfo.caption===''||this.props.permissionUserInfo.caption===undefined){
                message.info('帐号名不能为空');
            }else {
                let param = new URLSearchParams();
                param.append("type",'user');
                param.append("username",this.props.permissionUserInfo.username);
                param.append("password",this.props.permissionUserInfo.password);
                param.append("caption",this.props.permissionUserInfo.caption);
                this.props.addPermission(param);
            }
        }else if(this.props.permission.addOrModify==='modify'){
            if(this.props.permissionUserInfo.oldPasswordModify===''||this.props.permissionUserInfo.oldPasswordModify===undefined){
                message.info('旧密码不能为空');
            }else if(this.props.permissionUserInfo.newPasswordModify===''||this.props.permissionUserInfo.newPasswordModify===undefined){
                message.info('新密码密码不能为空');
            }else if(this.props.permissionUserInfo.newPasswordComfirmModify===''||this.props.permissionUserInfo.newPasswordComfirmModify===undefined){
                message.info('确认新密码不能为空');
            }else if(this.props.permissionUserInfo.newPasswordModify!==this.props.permissionUserInfo.newPasswordComfirmModify){
                message.info('两次密码不一样');
            }else if(this.props.permissionUserInfo.captionModify===''||this.props.permissionUserInfo.captionModify===undefined){
                message.info('新帐号名不能为空');
            }else {
                let param = new URLSearchParams();
                param.append("type",'user');
                param.append("id",this.props.permission.row.userId);
                param.append("oldPassword",this.props.permissionUserInfo.oldPasswordModify);
                param.append("newPassword",this.props.permissionUserInfo.newPasswordModify);
                param.append("caption",this.props.permissionUserInfo.captionModify);
                this.props.modifyPermission(param);
            }
        }

    }
    onClickTemp = (booleanTemp,stringTemp,row) => {
        if(stringTemp==="permission"){
            this.showConfirm(row)
        }else if(stringTemp==="delete"){
            this.showDeleteConfirm(row);
        }else if(stringTemp==="add"){
            this.props.setShowModel(booleanTemp,stringTemp,"");
        }else {
            this.props.setShowModel(booleanTemp,stringTemp,row);
        }
    }
    handleCancel = (e) => {
        this.props.setShowModel(false)
    }
     showConfirm = (row) => {
        let propsTemp = this.props;
        confirm({
            closable:true,
            maskClosable:true,
            title: '你确定要给该用户授权吗?',
            content: '有问题找刘波',
            okText: '管理员',
            cancelText: '普通用户',
            onOk() {
                let param = new URLSearchParams();
                param.append("type",'userrole');
                param.append("userId",row.userId);
                param.append("roleId","1");
                propsTemp.addPermission(param);
            },
            onCancel() {
                let param = new URLSearchParams();
                param.append("type",'userrole');
                param.append("userId",row.userId);
                param.append("roleId","2");
                propsTemp.addPermission(param);
            },
        });
    }
     showDeleteConfirm = (row) =>{
         let propsTemp = this.props;
        confirm({
            title: '你确定要删除该用户吗?',
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
        const columns = [
            {
                title: '用户名',
                className: 'column-money',
                dataIndex: 'caption',
            },{
                title: '角色名',
                dataIndex: 'roleId',
                render: (value, row, index) =>{
                    let valueName ='';
                    if(value===1||value==="1"){
                        valueName = "管理员"
                    }else if(value===2||value==="2"){
                        valueName = "普通用户"
                    }else {
                        valueName = "未分配"
                    }
                    const obj = {
                        children:valueName
                        ,
                        props: {},
                    };
                    return obj;
                },



            },  {
                title: '授权',
                dataIndex: '',
                width: 100,
                render: (value, row, index) => <Button onClick={()=>this.onClickTemp(true,"permission",row)}  type="dashed" size="small">授权</Button>,
            },  {
                title: '编辑',
                dataIndex: '',
                width: 100,
                render: (value, row, index) => <Button onClick={()=>this.onClickTemp(true,"modify",row)}  type="dashed" size="small">编辑</Button>,
            },
            ];
        const butAndSerch = <Row>
            <Col span={6}><Search
                placeholder="搜索"
                onSearch={value => {
                    this.getDataTemp(value,1,5)
                }}
                enterButton
            /></Col>
            <Col span={18} className="MyAlign"><Button onClick={()=>this.onClickTemp(true,"add","")}>+添加</Button></Col>
        </Row>;
        return (
            <div>

                <Table
                    columns={columns}
                    dataSource={this.props.permission.permission.resultList}
                    bordered
                    title={() => butAndSerch}
                    pagination={false}
                />
                <Pagination defaultCurrent={1} defaultPageSize={5} total={this.props.permission.permission.totalcount} style={{textAlign:'right',marginTop:25}} onChange={(page, pageSize)=>this.getDataTemp('',page,7)}/>
                <Modal width={830}
                       title="用户操作"
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

export default connect(mapStateToProps, mapDispatchToProps)(Permission);