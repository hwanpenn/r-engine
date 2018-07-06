import {URL} from 'config/config';
import {withRouter} from "react-router-dom";
import { message } from 'antd';
export const GET_VARIABLEITEM_INFO_REQUEST = "GET_VARIABLEITEM_INFO_REQUEST";
export const GET_VARIABLEITEM_INFO_SUCCESS = "GET_VARIABLEITEM_INFO_SUCCESS";
export const GET_VARIABLEITEM_INFO_FAIL = "GET_VARIABLEITEM_INFO_FAIL";

export const DELETE_VARIABLEITEM_REQUEST = "DELETE_VARIABLEITEM_REQUEST";
export const DELETE_VARIABLEITEM_SUCCESS = "DELETE_VARIABLEITEM_SUCCESS";
export const DELETE_VARIABLEITEM_FAIL = "DELETE_VARIABLEITEM_FAIL";

export const MODIFY_VARIABLEITEM_REQUEST = "MODIFY_VARIABLEITEM_REQUEST";
export const MODIFY_VARIABLEITEM_SUCCESS = "MODIFY_VARIABLEITEM_SUCCESS";
export const MODIFY_VARIABLEITEM_FAIL = "MODIFY_VARIABLEITEM_FAIL";

export const ADD_VARIABLEITEM_REQUEST = "ADD_VARIABLEITEM_REQUEST";
export const ADD_VARIABLEITEM_SUCCESS = "ADD_VARIABLEITEM_SUCCESS";
export const ADD_VARIABLEITEM_FAIL = "ADD_VARIABLEITEM_FAIL";

export const INTO_VARIABLEITEM_REQUEST = "INTO_VARIABLEITEM_REQUEST";
export const INTO_VARIABLEITEM_SUCCESS = "INTO_VARIABLEITEM_SUCCESS";
export const INTO_VARIABLEITEM_FAIL = "INTO_VARIABLEITEM_FAIL";

export const SET_SELECT_ROW_ITEM = "SET_SELECT_ROW_ITEM";
export const SET_MODAL_VIEW = "SET_MODAL_VIEW";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_RES_INFO = "SET_RES_INFO";

export const SET_VARIABLEITEM_MODIFY_NAME = "SET_VARIABLEITEM_MODIFY_NAME";
export const SET_VARIABLEITEM_ADD_NAME = "SET_VARIABLEITEM_ADD_NAME";

export const SET_SELECT_VARIABLEITEM_NAME = "SET_SELECT_VARIABLEITEM_NAME";

message.config({
    duration: 1,
});

export function setResInfo(temp) {
    return {
            type: SET_RES_INFO,
        temp:temp
    }
}
export function setSelectProjectName(temp) {
    return {
            type: SET_SELECT_VARIABLEITEM_NAME,
        temp:temp
    }
}
export function setProjectModifyName(temp) {
    return {
            type: SET_VARIABLEITEM_MODIFY_NAME,
        temp:temp
    }
}
export function setProjectAddName(temp) {
    return {
            type: SET_VARIABLEITEM_ADD_NAME,
        temp:temp
    }
}
export function setShowModal2(tempBoolean) {
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
export function setSelectRowItem(temp) {
    return {
            type: SET_SELECT_ROW_ITEM,
            temp:temp
    }
}
export function getVariableItemInfo(params) {
    return {
            types: [GET_VARIABLEITEM_INFO_REQUEST, GET_VARIABLEITEM_INFO_SUCCESS, GET_VARIABLEITEM_INFO_FAIL],
            promise: client => client.get(URL+'/rule/variable/queryVariables',{
                params: params
            }),
            afterSuccess:(dispatch,getState,response)=>{
            },
    }
}

export function deleteVariableItem(params,selectRowTemp) {
    return {
        types: [DELETE_VARIABLEITEM_REQUEST, DELETE_VARIABLEITEM_SUCCESS, DELETE_VARIABLEITEM_FAIL],
                promise: client => client.post(URL+'/rule/variable/deleteVariable',params),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        message.info("删除成功");
                        const paramsTemp = {
                            mc:'',
                            key:selectRowTemp.id,
                            start:1,
                            size:5
                        };
                        dispatch(setShowModal2(false));
                        dispatch(getVariableItemInfo(paramsTemp));
                    }else {
                        message.info(response.data.msg);
                    }
                            },
    }
}

export function modifyVariableItem(params,selectRowTemp) {
    return {
        types: [MODIFY_VARIABLEITEM_REQUEST, MODIFY_VARIABLEITEM_SUCCESS, MODIFY_VARIABLEITEM_FAIL],
                promise: client => client.post(URL+'/rule/variable/updateVariable',params),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        message.info("修改成功");
                        const paramsTemp = {
                            mc:'',
                            key:selectRowTemp.id,
                            start:1,
                            size:5
                        };
                        dispatch(setShowModal2(false));
                        dispatch(getVariableItemInfo(paramsTemp));
                    }else {
                        message.info(response.data.msg);
                    }
                            },
    }
}
export function addVariableItem(params,selectRowTemp) {
    return {
        types: [ADD_VARIABLEITEM_REQUEST, ADD_VARIABLEITEM_SUCCESS, ADD_VARIABLEITEM_FAIL],
                promise: client => client.post(URL+'/rule/variable/addVariable',params),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        message.info("新建成功");
                        const paramsTemp = {
                            mc:'',
                            key:selectRowTemp.id,
                            start:1,
                            size:5
                        };
                        dispatch(setShowModal2(false));
                        dispatch(getVariableItemInfo(paramsTemp));
                    }else {
                        message.info(response.data.msg);
                    }
                            },
    }
}
export function intoVariableItem(params,selectRowTemp) {
    return {
        types: [INTO_VARIABLEITEM_REQUEST, INTO_VARIABLEITEM_SUCCESS, INTO_VARIABLEITEM_FAIL],
                promise: client => client.post(URL+'/rule/variable/{variableId}/importXml',params),
                afterSuccess:(dispatch,getState,response)=>{
                    if(response.data.success===true){
                        message.info("导入成功");

                        const paramsTemp = {
                            mc:'',
                            key:selectRowTemp.id,
                            start:1,
                            size:5
                        };
                        dispatch(setShowModal2(false));
                        dispatch(getVariableItemInfo(paramsTemp));
                    }else {
                        message.info(response.data.msg);
                    }
                            },
    }
}

