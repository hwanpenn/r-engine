import {URL} from 'config/config';
import {withRouter} from "react-router-dom";
import {setMenuSecond} from "actions/menuState";
 const GET_PROJECT_INFO_REQUEST = "GET_PROJECT_INFO_REQUEST";
export const GET_PROJECT_INFO_SUCCESS = "GET_PROJECT_INFO_SUCCESS";
export const GET_PROJECT_INFO_FAIL = "GET_PROJECT_INFO_FAIL";
export const SET_PROJECT_INFO = "SET_PROJECT_INFO";
export const GET_PROJECT_NUMBER_INFO_REQUEST = "GET_PROJECT_NUMBER_INFO_REQUEST";
export const GET_PROJECT_NUMBER_INFO_SUCCESS = "GET_PROJECT_NUMBER_INFO_SUCCESS";
export const GET_PROJECT_NUMBER_INFO_FAIL = "GET_PROJECT_NUMBER_INFO_FAIL";
export const ADD_PROJECT = "ADD_PROJECT";
export const MODIFY_PROJECT = "MODIFY_PROJECT";
export const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST";
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const DELETE_PROJECT_FAIL = "DELETE_PROJECT_FAIL";

export const MODIFY_PROJECT_REQUEST = "MODIFY_PROJECT_REQUEST";
export const MODIFY_PROJECT_SUCCESS = "MODIFY_PROJECT_SUCCESS";
export const MODIFY_PROJECT_FAIL = "MODIFY_PROJECT_FAIL";

export const ADD_PROJECT_REQUEST = "ADD_PROJECT_REQUEST";
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const ADD_PROJECT_FAIL = "ADD_PROJECT_FAIL";

export const SET_MODAL_VIEW = "SET_MODAL_VIEW";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_PROJECT_ID = "SET_PROJECT_ID";
export const SET_PROJECT_MODIFY_NAME = "SET_PROJECT_MODIFY_NAME";
export const SET_PROJECT_ADD_NAME = "SET_PROJECT_ADD_NAME";

export const SET_SELECT_PROJECT_NAME = "SET_SELECT_PROJECT_NAME";
export const SET_SELECT_PROJECT = "SET_SELECT_PROJECT";
import {getVariableLibInfo} from "actions/variableLib";
import { message } from 'antd';
import axios from 'axios';

message.config({
    duration: 1,
});

export function setProjectId(temp) {
    return {
            type: SET_PROJECT_ID,
        temp:temp
    }
}
export function setSelectProject(temp) {
    return {
            type: SET_SELECT_PROJECT,
        temp:temp
    }
}
export function setSelectProjectName(temp) {

    return {
            type: SET_SELECT_PROJECT_NAME,
        temp:temp
    }
}
export function setProjectModifyName(temp) {
    return {
            type: SET_PROJECT_MODIFY_NAME,
        temp:temp
    }
}
export function setProjectAddName(temp) {
    return {
            type: SET_PROJECT_ADD_NAME,
        temp:temp
    }
}
export function setShowModal(tempBoolean) {
    return {
            type: SET_SHOW_MODAL,
            tempBoolean:tempBoolean
    }
}
export function setModalView(temp) {
    return {
            type: SET_MODAL_VIEW,
            temp:temp
    }
}
export function getProjectInfo(params,reflash,projectIdTemp) {
    let param = new URLSearchParams();
    param.append("userId",params);
    const  tempParams = {
        userId:params
    };
    let projectId = '';
    return {
            types: [GET_PROJECT_INFO_REQUEST, GET_PROJECT_INFO_SUCCESS, GET_PROJECT_INFO_FAIL],
            promise: client => client.get(URL+'/rule/project/getproject'),
            afterSuccess:(dispatch,getState,response)=>{
                if(response.data.resultList.length===0){

                }else {
                    if(projectIdTemp===''){
                        // console.log("要不要后台加载数据")
                        let param = new URLSearchParams();
                        param.append("mc",'');
                        param.append("start",1);
                        param.append("size",5);
                        param.append("projectId",response.data.resultList[0].id);
                        dispatch(getVariableLibInfo(param));
                    }
                    if(reflash==="false"){
                    }else {
                        sessionStorage.setItem('projectId',response.data.resultList[0].id);
                        dispatch(setMenuSecond(response.data.resultList[0].name));
                        dispatch(setProjectId(response.data.resultList[0].id));
                    }


                }

            },
        projectId:projectId,
    }
}
export function getPorjectNumber() {
    return {
            types: [GET_PROJECT_NUMBER_INFO_REQUEST, GET_PROJECT_NUMBER_INFO_SUCCESS, GET_PROJECT_NUMBER_INFO_FAIL],
            promise: client => client.get(URL+'/rule/project/getPorjectNumber'),
            afterSuccess:(dispatch,getState,response)=>{

            },
    }
}
export function deleteProject(projectId) {
    let params1 = {
        id:projectId
    }
    return {
        types: [DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL],
                promise: client => client.post(URL+'/rule/project/del',params1),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        message.info("删除成功");
                        return dispatch(getProjectInfo(sessionStorage.getItem('userId')));

                    }else {
                        message.info(response.data.msg);
                    }
                            },
                projectId:projectId,
    }
}
export function modifyProject(params,stateTemp) {
    return {
        types: [MODIFY_PROJECT_REQUEST, MODIFY_PROJECT_SUCCESS, MODIFY_PROJECT_FAIL],
                promise: client => client.post(URL+'/rule/project/update',params),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        stateTemp.setState({
                            showModelRuleMenu:false
                        })
                        message.info("修改成功");
                        return dispatch(getProjectInfo(sessionStorage.getItem('userId')))
                    }else {
                        message.info(response.data.msg);
                    }
                            },
    }
}
export function addProject(params,stateTemp) {
    return {
        types: [ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL],
                promise: client => client.post(URL+'/rule/project/add',params),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        stateTemp.setState({
                            showModelRuleMenu:false
                        })
                        message.info("新建成功");
                        return dispatch(getProjectInfo(sessionStorage.getItem('userId')))
                    }else {
                        message.info(response.data.msg);
                    }
                            },
    }
}

