import {URL} from 'config/config';
export const GET_PERMISSION_INFO_REQUEST = "GET_PERMISSION_INFO_REQUEST";
export const GET_PERMISSION_INFO_SUCCESS = "GET_PERMISSION_INFO_SUCCESS";
export const GET_PERMISSION_INFO_FAIL = "GET_PERMISSION_INFO_FAIL";

export const ADD_PERMISSION_REQUEST = "ADD_PERMISSION_REQUEST";
export const ADD_PERMISSION_SUCCESS = "ADD_PERMISSION_SUCCESS";
export const ADD_PERMISSION_FAIL = "ADD_PERMISSION_FAIL";

export const MODIFY_PERMISSION_REQUEST = "MODIFY_PERMISSION_REQUEST";
export const MODIFY_PERMISSION_SUCCESS = "MODIFY_PERMISSION_SUCCESS";
export const MODIFY_PERMISSION_FAIL = "MODIFY_PERMISSION_FAIL";

export const DELETE_PERMISSION_REQUEST = "DELETE_PERMISSION_REQUEST";
export const DELETE_PERMISSION_SUCCESS = "DELETE_PERMISSION_SUCCESS";
export const DELETE_PERMISSION_FAIL = "DELETE_PERMISSION_FAIL";

export const SET_PERMISSION_REQUEST = "SET_PERMISSION_REQUEST";
export const SET_PERMISSION_SUCCESS = "SET_PERMISSION_SUCCESS";
export const SET_PERMISSION_FAIL = "SET_PERMISSION_FAIL";

export const SET_SHOW_MODEL = "SET_SHOW_MODEL";

export function setShowModel(boolean,addOrModify,row) {
    return {
        type: SET_SHOW_MODEL,
        boolean:boolean,
        addOrModify:addOrModify,
        row:row
    }
}
export function setPermission(values) {
    return {
        types: [SET_PERMISSION_REQUEST, SET_PERMISSION_SUCCESS, SET_PERMISSION_FAIL],
        promise: client => client.post(URL+'/rule/userOrRule/addUserOrRole',{
            type: 'userrole',
            userid: values.userid,
            roleid: values.role,
        }),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                const params = {
                    name:'',
                    start:1,
                    size:5,
                };
                dispatch(setShowModel(false));
                dispatch(getPermission(params));
            }else {
                message.info(response.data.msg);
            }
        }
    }
}
export function getPermission(params) {
    return {
        types: [GET_PERMISSION_INFO_REQUEST, GET_PERMISSION_INFO_SUCCESS, GET_PERMISSION_INFO_FAIL],
        promise: client => client.get(URL+'/rule/userOrRule/getRoles',{
            params: params
        }),
        afterSuccess:(dispatch,getState,response)=>{

        }
    }
}
export function addPermission(params) {
    return {
        types: [ADD_PERMISSION_REQUEST, ADD_PERMISSION_SUCCESS, ADD_PERMISSION_FAIL],
        promise: client => client.post(URL+'/rule/userOrRule/addUserOrRole',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                const params = {
                    name:'',
                    start:1,
                    size:5,
                };
                dispatch(setShowModel(false));
                dispatch(getPermission(params));
            }else {
                message.info(response.data.msg);
            }
        },
    }
}
export function modifyPermission(params) {
    return {

        types: [MODIFY_PERMISSION_REQUEST, MODIFY_PERMISSION_SUCCESS, MODIFY_PERMISSION_FAIL],
        promise: client => client.post(URL+'/rule/userOrRule/updateUserOrRole',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                const params = {
                    name:'',
                    start:1,
                    size:5,
                };
                dispatch(setShowModel(false));
                dispatch(getPermission(params));
            }else {
                message.info(response.data.msg);
            }
        }
    }
}
export function deletePermission(values) {
    return {

        types: [DELETE_PERMISSION_REQUEST, DELETE_PERMISSION_SUCCESS, DELETE_PERMISSION_FAIL],
        promise: client => client.post(URL+'/login',{
            type: values.type,
            username: values.username,
            password: values.password,
            caption: values.caption,
        }),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                const params = {
                    name:'',
                    start:1,
                    size:5,
                };
                dispatch(setShowModel(false));
                dispatch(getPermission(params));
            }else {
                message.info(response.data.msg);
            }
        }
    }
}

