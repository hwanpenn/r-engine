import {URL} from 'config/config';
import {withRouter} from "react-router-dom";
import { message } from 'antd';
import {getVariableItemInfo,deleteVariableItem,modifyVariableItem,addVariableItem} from "actions/variableItem";

import {setResInfo} from "actions/variableItem";
export const GET_VARIABLELIB_INFO_REQUEST = "GET_VARIABLELIB_INFO_REQUEST";
export const GET_VARIABLELIB_INFO_SUCCESS = "GET_VARIABLELIB_INFO_SUCCESS";
export const GET_VARIABLELIB_INFO_FAIL = "GET_VARIABLELIB_INFO_FAIL";

export const DELETE_VARIABLELIB_REQUEST = "DELETE_VARIABLELIB_REQUEST";
export const DELETE_VARIABLELIB_SUCCESS = "DELETE_VARIABLELIB_SUCCESS";
export const DELETE_VARIABLELIB_FAIL = "DELETE_VARIABLELIB_FAIL";

export const MODIFY_VARIABLELIB_REQUEST = "MODIFY_VARIABLELIB_REQUEST";
export const MODIFY_VARIABLELIB_SUCCESS = "MODIFY_VARIABLELIB_SUCCESS";
export const MODIFY_VARIABLELIB_FAIL = "MODIFY_VARIABLELIB_FAIL";

export const ADD_VARIABLELIB_REQUEST = "ADD_VARIABLELIB_REQUEST";
export const ADD_VARIABLELIB_SUCCESS = "ADD_VARIABLELIB_SUCCESS";
export const ADD_VARIABLELIB_FAIL = "ADD_VARIABLELIB_FAIL";

export const SET_LIBORITEM = "SET_LIBORITEM";
export const SET_SELECT_ROW = "SET_SELECT_ROW";
export const SET_MODAL_VIEW = "SET_MODAL_VIEW";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";

export const SET_VARIABLELIB_MODIFY_NAME = "SET_VARIABLELIB_MODIFY_NAME";
export const SET_VARIABLELIB_ADD_NAME = "SET_VARIABLELIB_ADD_NAME";

export const SET_VARIABLELIB_MODIFY_NAME1 = "SET_VARIABLELIB_MODIFY_NAME1";
export const SET_VARIABLELIB_ADD_NAME1 = "SET_VARIABLELIB_ADD_NAME1";
export const SET_VARIABLELIB_ADD_NAME2 = "SET_VARIABLELIB_ADD_NAME2";
export const SET_VARIABLELIB_MODIFY_NAME_TYPE1 = "SET_VARIABLELIB_MODIFY_NAME_TYPE1";
export const SET_VARIABLELIB_ADD_NAME_TYPE1 = "SET_VARIABLELIB_ADD_NAME_TYPE1";

export const SET_SELECT_VARIABLELIB_NAME = "SET_SELECT_VARIABLELIB_NAME";

message.config({
    duration: 1,
});

export function setLibOrItem(temp) {
    return {
            type: SET_LIBORITEM,
        temp:temp
    }
}
export function setSelectProjectName(temp) {
    return {
            type: SET_SELECT_VARIABLELIB_NAME,
        temp:temp
    }
}

export function setProjectModifyNameType1(temp) {
    return {
            type: SET_VARIABLELIB_MODIFY_NAME_TYPE1,
        temp:temp
    }
}
export function setProjectAddNameType1(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME_TYPE1,
        temp:temp
    }
}
export function setProjectModifyName1(temp) {
    return {
            type: SET_VARIABLELIB_MODIFY_NAME1,
        temp:temp
    }
}
export function setProjectAddName1(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME1,
        temp:temp
    }
}
export function setProjectAddName2(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME2,
        temp:temp
    }
}
export function setProjectModifyName(temp) {
    return {
            type: SET_VARIABLELIB_MODIFY_NAME,
        temp:temp
    }
}
export function setProjectAddName(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME,
        temp:temp
    }
}
export function setShowModal1(tempBoolean) {
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
export function setSelectRow(temp) {
    return {
            type: SET_SELECT_ROW,
        temp:temp
    }
}
export function getVariableLibInfo(params) {
    return {
        types: [GET_VARIABLELIB_INFO_REQUEST, GET_VARIABLELIB_INFO_SUCCESS, GET_VARIABLELIB_INFO_FAIL],
        promise: client => client.get(URL+'/rule/variable/queryVariableProjects', {
            params: params
        }),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.resultList.length!==0){
                const params = {
                    mc:"",
                    key:response.data.resultList[0].id,
                    start:1,
                    size:5
                };
                dispatch(setSelectRow(response.data.resultList[0]));

                dispatch(getVariableItemInfo(params));
            }else {
                dispatch(setResInfo(""));
            }

        },
    }
}
export function addVariableLib(params) {
    return {
        types: [ADD_VARIABLELIB_REQUEST, ADD_VARIABLELIB_SUCCESS, ADD_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/variable/addVariableProject',params),
        afterSuccess:(dispatch,getState,response)=>{
            console.log(response.data)
            if(response.data.success===true){
                message.info("新建成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                dispatch(setShowModal1(false));
                dispatch(getVariableLibInfo(params));
                // dispatch(setProjectAddName(""));
            }else {
                message.info(response.data.msg);
            }
        },
    }
}
export function deleteVariableLib(params) {
    return {
        types: [DELETE_VARIABLELIB_REQUEST, DELETE_VARIABLELIB_SUCCESS, DELETE_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/variable/deleteVariableProject',params),
        afterSuccess:(dispatch,getState,response)=>{

            if(response.data.success===true){
                message.info("删除成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                dispatch(setShowModal1(false));
                dispatch(getVariableLibInfo(params));
            }else {
                message.info(response.data.msg);
            }
        },
    }
}

export function modifyVariableLib(params) {
    return {
        types: [MODIFY_VARIABLELIB_REQUEST, MODIFY_VARIABLELIB_SUCCESS, MODIFY_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/variable/updateVariableProject',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                message.info("修改成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                dispatch(setShowModal1(false));
                dispatch(getVariableLibInfo(params));
            }else {
                message.info(response.data.msg);
            }
        },
    }
}

