import React, {Component} from 'react';
import { Menu, Icon,Button } from 'antd';
import {connect} from 'react-redux';
import {setMenuFirst,setMenuSecond,setMenuThird} from "actions/menuState";
import {setOpenKeys,setReflash} from "actions/menuState";
import SearchNew from "./Search/Search";
import ModalView from "./ModalView/ModalView";
import { Modal } from 'antd';
import {getProjectInfo,getPorjectNumber,modifyProject,addProject,deleteProject,setSelectProjectName} from "actions/projectInfo";
import {setModalView,setShowModal} from "actions/projectInfo";
import {setSelectProject} from "actions/projectInfo";
const { SubMenu } = Menu;
import { Route, Switch, Link} from 'react-router-dom';
import { message } from 'antd';
import {getVariableLibInfo} from "actions/variableLib";
import {getVariableLibInfoGrade} from "actions/beforeGrade";
import {getVariableLibInfoDecision} from "actions/beforeDecision";
message.config({
    duration: 1,
});
const confirm = Modal.confirm;
class RuleMenu extends Component {
    constructor(props) {
        super(props);
        let openKeysTempSub = [];
        if(props.menuState.openKeys===null||props.menuState.openKeys===''){
            openKeysTempSub = ['sub0'];
        }else {
            openKeysTempSub = [props.menuState.openKeys];
        }
        this.state = {
            projectArray: '',
            showModel: true,
            openKeys: openKeysTempSub,
            showModelRuleMenu: false,
            reflash:true
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
    }
    componentWillMount() {
        this.props.getProjectInfo(sessionStorage.getItem('userId'),this.props.menuState.reflash,this.props.projectInfo.projectId);
    }
    handleClickMenu1(project){
        this.props.setSelectProject(project)
    }
    handleClickMenu(projectId){
        let hrefTemp = window.location.href;
        if(hrefTemp.indexOf("constant")>=0){
            const params = {
                name:'',
                projectId:projectId,
                start:1,
                size:5,
            };
            this.props.getVariableLibInfo(params)
        }else if(hrefTemp.indexOf("grade")>=0){
            const params = {
                name:'',
                projectId:projectId,
                start:1,
                size:5,
            };
            this.props.getVariableLibInfoGrade(params);
        }else if(hrefTemp.indexOf("decision")>=0){
            const params = {
                name:'',
                projectId:projectId,
                start:1,
                size:5,
            };
            this.props.getVariableLibInfoDecision(params);
        }else {
        }

    }
    componentWillUpdate (nextProps, nextState) {
    }
    componentDidUpdate(){
    }

    onOpenChange = (openKeys,key,) => {
        let rootSubmenuKeys = this.props.projectInfo.rootSubmenuKeys;
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
        if(latestOpenKey!==undefined){
            if(latestOpenKey.slice(0,3)==="sub"){
                this.props.setOpenKeys(latestOpenKey);
            }
        }


    }
    componentWillReceiveProps(nextProps){
        const projectArray = nextProps.projectInfo.resInfo.resultList;
        let temp = '';
        if(projectArray===undefined){

        }else {
             temp = projectArray.map((project,index) =>
                    <SubMenu key={'sub'+index} onTitleClick={() => {
                        nextProps.setMenuSecond(project.name);
                        sessionStorage.setItem('projectId',project.id);
                        sessionStorage.setItem('projectName',project.name);
                        nextProps.setSelectProjectName(project.name);
                        this.handleClickMenu(project.id)
                    }} title={<span><Icon type="inbox" />{project.name}</span>}>
                        <SubMenu key={"childSub1"+index}  title={<span><Icon type="laptop" />库</span>}>
                            <Menu.Item key={"5"+index}  ><Link to="/rule/home/rule/library/constant" >常量库</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key={"childSub2"+index} title={<span><Icon type="setting" />项目资源</span>}>
                            <Menu.Item key={"2"+index}  ><Link to="/rule/home/rule/resource/script">脚本</Link></Menu.Item>
                            <Menu.Item key={"3"+index}  ><Link to="/rule/home/rule/resource/decision">决策集</Link></Menu.Item>
                            <Menu.Item key={"4"+index}  ><Link to="/rule/home/rule/resource/grade">评分卡</Link></Menu.Item>
                        </SubMenu>
                    </SubMenu>
            );
        }

        this.setState({
            temp: temp
        });
    }
    handleClick = (project)=>{
    }
    handleModify = ()=>{
        this.props.setModalView('modify');
        this.setState({
            showModelRuleMenu:true
        })
    };
    handleAdd = ()=>{
        this.props.setModalView('add');
        this.setState({
            showModelRuleMenu:true
        })
    };
    handleChange(project) {

    };
    handleOk = (e) => {
        let stateTemp = this;
        if (this.props.projectInfo.modalView==='add'){
            if(this.props.projectInfo.projectAddName===''||this.props.projectInfo.projectAddName===undefined){
                message.info('新项目名不能为空');
            }else {
                let params = {
                    id: '1',
                    name: this.props.projectInfo.projectAddName,
                };

                this.props.addProject(params ,stateTemp);
            }
        }else if(this.props.projectInfo.modalView==='modify'){
            if(this.props.projectInfo.projectModifyName===''||this.props.projectInfo.projectModifyName===undefined){
                message.info('修改项目名不能为空');
            }else {
                let params = {
                    id: sessionStorage.getItem('projectId'),
                    name: this.props.projectInfo.projectModifyName,
                };
                this.props.modifyProject(params , stateTemp);
                this.setState({
                    showModelRuleMenu:false
                })
            }
        }

    }
    handleCancel = (e) => {
        this.setState({
            showModelRuleMenu:false
        })
    }
    showConfirm = () => {
        let propsTemp = this.props;
        confirm({
            title: '确定要删除'+sessionStorage.getItem('projectName')+'这个项目吗?',
            content: '删除后无法恢复',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                propsTemp.deleteProject(sessionStorage.getItem('projectId'))
            },
            onCancel() {
            },
        });
    }
    render() {
        return (<div>
                <Button size={"small"} onClick={(e)=>this.handleAdd(e)}  style={{marginLeft: 10,marginTop: 5}}>+项目</Button>
                {/*<Button size={"small"}  style={{marginLeft: 5,marginTop: 5}}>修改</Button>*/}
                <Button size={"small"} onClick={(e)=>this.handleModify(e)}  style={{marginLeft: 5,marginTop: 5}}><Icon type="tool" /></Button>
                <Button size={"small"} onClick={()=>this.showConfirm()}  style={{marginLeft: 5,marginTop: 5}}><Icon type="close" /></Button>
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        style={{ height: '100%', borderRight: 0 }}
                        onSelect={(key) => {
                            if(key.key.substring(0,1)==="5"){
                                this.props.setMenuThird("常量库");
                                this.props.setReflash("false");
                            }else if(key.key.substring(0,1)==="2"){
                                this.props.setMenuThird("脚本")
                                this.props.setReflash("false");
                            }else if(key.key.substring(0,1)==="3"){
                                this.props.setMenuThird("决策集")
                                this.props.setReflash("false");
                            }else if(key.key.substring(0,1)==="4"){
                                this.props.setMenuThird("评分卡")
                                this.props.setReflash("false");

                            }
                        }}
                    >

                        <SearchNew/>
                        {this.state.temp}
                        {/*{this.props.projectInfo.temp}*/}
                    </Menu>
                <Modal width={830}
                       title="操作"
                       visible={this.state.showModelRuleMenu}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                ><ModalView  /></Modal>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        menuState: state.menuState,
        projectInfo: state.projectInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuFirst: (firstTemp) => {
            dispatch(setMenuFirst(firstTemp))
        },
        setMenuSecond: (secondTemp) => {
            dispatch(setMenuSecond(secondTemp))
        },
        setMenuThird: (thirdTemp) => {
            dispatch(setMenuThird(thirdTemp))
        },
        getProjectInfo: (params,reflash,projectId) => {
            dispatch(getProjectInfo(params,reflash,projectId))
        },
        getPorjectNumber: () => {
            dispatch(getPorjectNumber())
        },
        modifyProject: (params ,stateTemp) => {
            dispatch(modifyProject(params, stateTemp))
        },
        addProject: (params,stateTemp) => {
            dispatch(addProject(params,stateTemp))
        },
        deleteProject: (projectId) => {
            dispatch(deleteProject(projectId))
        },
        setModalView: (temp) => {
            dispatch(setModalView(temp))
        },
        setShowModal: (tempBoolean) => {
            dispatch(setShowModal(tempBoolean))
        },
        setSelectProjectName: (temp) => {
            dispatch(setSelectProjectName(temp))
        },
        setSelectProject: (temp) => {
            dispatch(setSelectProject(temp))
        },
        getVariableLibInfo: (temp) => {
            dispatch(getVariableLibInfo(temp))
        },
        getVariableLibInfoGrade: (temp) => {
            dispatch(getVariableLibInfoGrade(temp))
        },
        getVariableLibInfoDecision: (temp) => {
            dispatch(getVariableLibInfoDecision(temp))
        },
        setOpenKeys: (temp) => {
            dispatch(setOpenKeys(temp))
        },
        setReflash: (temp) => {
            dispatch(setReflash(temp))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleMenu);
