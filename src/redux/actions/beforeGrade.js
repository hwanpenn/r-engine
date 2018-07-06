import {URL} from 'config/config';
import {withRouter} from "react-router-dom";
import { message } from 'antd';
export const GET_VARIABLELIB_INFO_REQUEST_GRADELIB = "GET_VARIABLELIB_INFO_REQUEST_GRADELIB";
export const GET_VARIABLELIB_INFO_SUCCESS_GRADELIB = "GET_VARIABLELIB_INFO_SUCCESS_GRADELIB";
export const GET_VARIABLELIB_INFO_FAIL_GRADELIB = "GET_VARIABLELIB_INFO_FAIL_GRADELIB";

export const GET_VARIABLELIB_INFO_REQUEST_GRADE = "GET_VARIABLELIB_INFO_REQUEST_GRADE";
export const GET_VARIABLELIB_INFO_SUCCESS_GRADE = "GET_VARIABLELIB_INFO_SUCCESS_GRADE";
export const GET_VARIABLELIB_INFO_FAIL_GRADE = "GET_VARIABLELIB_INFO_FAIL_GRADE";

export const DELETE_VARIABLELIB_REQUEST = "DELETE_VARIABLELIB_REQUEST";
export const DELETE_VARIABLELIB_SUCCESS = "DELETE_VARIABLELIB_SUCCESS";
export const DELETE_VARIABLELIB_FAIL = "DELETE_VARIABLELIB_FAIL";

export const MODIFY_VARIABLELIB_REQUEST = "MODIFY_VARIABLELIB_REQUEST";
export const MODIFY_VARIABLELIB_SUCCESS = "MODIFY_VARIABLELIB_SUCCESS";
export const MODIFY_VARIABLELIB_FAIL = "MODIFY_VARIABLELIB_FAIL";

export const ADD_VARIABLELIB_REQUEST = "ADD_VARIABLELIB_REQUEST";
export const ADD_VARIABLELIB_SUCCESS = "ADD_VARIABLELIB_SUCCESS";
export const ADD_VARIABLELIB_FAIL = "ADD_VARIABLELIB_FAIL";

export const ACTIVATE_VARIABLELIB_REQUEST = "ACTIVATE_VARIABLELIB_REQUEST";
export const ACTIVATE_VARIABLELIB_SUCCESS = "ACTIVATE_VARIABLELIB_SUCCESS";
export const ACTIVATE_VARIABLELIB_FAIL = "ACTIVATE_VARIABLELIB_FAIL";

export const STOP_VARIABLELIB_REQUEST = "STOP_VARIABLELIB_REQUEST";
export const STOP_VARIABLELIB_SUCCESS = "STOP_VARIABLELIB_SUCCESS";
export const STOP_VARIABLELIB_FAIL = "STOP_VARIABLELIB_FAIL";

export const SET_ROW_TEMP = "SET_ROW_TEMP";

export const SET_LIBORITEM = "SET_LIBORITEM";
export const SET_SELECT_ROW_GRADE_SELECT = "SET_SELECT_ROW_GRADE_SELECT";
export const SET_MODAL_VIEW = "SET_MODAL_VIEW";
export const SET_SHOW_MODAL = "SET_SHOW_MODAL";
export const SET_SHOW_MODAL_GRADE = "SET_SHOW_MODAL_GRADE";
export const SET_MODAL_VIEW_GRADE = "SET_MODAL_VIEW_GRADE";

export const SET_VARIABLELIB_MODIFY_NAME = "SET_VARIABLELIB_MODIFY_NAME";
export const SET_VARIABLELIB_ADD_NAME = "SET_VARIABLELIB_ADD_NAME";
export const SET_VARIABLELIB_ADD_NAME2 = "SET_VARIABLELIB_ADD_NAME2";
export const SET_VARIABLELIB_ADD_NAME3 = "SET_VARIABLELIB_ADD_NAME3";

export const SET_VARIABLELIB_MODIFY_NAME1 = "SET_VARIABLELIB_MODIFY_NAME1";
export const SET_VARIABLELIB_ADD_NAME1 = "SET_VARIABLELIB_ADD_NAME1";
export const SET_VARIABLELIB_ADD_NAME4 = "SET_VARIABLELIB_ADD_NAME4";
export const SET_VARIABLELIB_MODIFY_NAME_TYPE1 = "SET_VARIABLELIB_MODIFY_NAME_TYPE1";
export const SET_VARIABLELIB_ADD_NAME_TYPE1 = "SET_VARIABLELIB_ADD_NAME_TYPE1";

export const SET_SELECT_VARIABLELIB_NAME = "SET_SELECT_VARIABLELIB_NAME";

message.config({
    duration: 1,
});

export function setShowModalGrade(temp) {
    return {
            type: SET_SHOW_MODAL_GRADE,
        temp:temp
    }
}
export function setModalViewGradeNew(temp) {
    return {
            type: SET_MODAL_VIEW_GRADE,
        temp:temp
    }
}
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
export function setProjectAddName4(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME4,
        temp:temp
    }
}
export function setProjectModifyName(temp) {
    return {
            type: SET_VARIABLELIB_MODIFY_NAME,
        temp:temp
    }
}
export function setProjectAddName3(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME3,
        temp:temp
    }
}
export function setProjectAddName2(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME2,
        temp:temp
    }
}
export function setProjectAddName(temp) {
    return {
            type: SET_VARIABLELIB_ADD_NAME,
        temp:temp
    }
}
export function setShowModal1Grade(tempBoolean) {
    alert('action');
    return {
            type: SET_SHOW_MODAL,
            tempBoolean:tempBoolean
    }
}
export function setModalViewGrade(temp) {
    return {
            type: SET_MODAL_VIEW,
            temp:temp
    }
}
export function setSelectRowGradeSelect(temp) {
    return {
            type: SET_SELECT_ROW_GRADE_SELECT,
        temp:temp
    }
}
export function setRowTemp(temp) {
    return {
        type: SET_ROW_TEMP,
        temp:temp
    }
}
export function getVariableLibInfo1(params) {
    return {
        types: [GET_VARIABLELIB_INFO_REQUEST_GRADELIB, GET_VARIABLELIB_INFO_SUCCESS_GRADELIB, GET_VARIABLELIB_INFO_FAIL_GRADELIB],
        promise: client => client.get(URL+'/rule/variable/queryVariableProjects',{
            params: params
        }),
        afterSuccess:(dispatch,getState,response)=>{
            const params = {
                mc:response.data.resultList[0].mc,
                key:response.data.resultList[0].id,
                start:1,
                size:5
            };
        },
    }
}
export function activateGrade(params) {
    return {
        types: [ACTIVATE_VARIABLELIB_REQUEST, ACTIVATE_VARIABLELIB_SUCCESS, ACTIVATE_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/deployment/deployModel',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                message.info("发布成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                return dispatch(getVariableLibInfoGrade(params));

            }else {
                message.info(response.data.msg);
            }
        },
    }
}
export function stopGrade(params) {
    return {
        types: [STOP_VARIABLELIB_REQUEST, STOP_VARIABLELIB_SUCCESS, STOP_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/grade/stop',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                message.info("暂停成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                return dispatch(getVariableLibInfoGrade(params));

            }else {
                message.info(response.data.msg);
            }
        },
    }
}
export function getVariableLibInfoGrade(params) {
    return {
        types: [GET_VARIABLELIB_INFO_REQUEST_GRADE, GET_VARIABLELIB_INFO_SUCCESS_GRADE, GET_VARIABLELIB_INFO_FAIL_GRADE],
        promise: client => client.get(URL+'/rule/scoreCard/queryScoreCards',{
            params: params
        }),
        afterSuccess:(dispatch,getState,response)=>{
        },
    }
}

export function deleteVariableLib(params) {
    return {
        types: [DELETE_VARIABLELIB_REQUEST, DELETE_VARIABLELIB_SUCCESS, DELETE_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/scoreCard/del',params),
        afterSuccess:(dispatch,getState,response)=>{

            if(response.data.success===true){
                message.info("删除成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                dispatch(setShowModalGrade(false));
                dispatch(getVariableLibInfoGrade(params));
            }else {
                message.info(response.data.msg);
            }
        },
    }
}

export function modifyVariableLib(params,updataOrEdit) {
    return {
        types: [MODIFY_VARIABLELIB_REQUEST, MODIFY_VARIABLELIB_SUCCESS, MODIFY_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/scoreCard/update',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                if(updataOrEdit==="编辑"){
                    message.info("保存成功");
                }else {
                    message.info("修改成功");
                    const params = {
                        mc:'',
                        projectId:sessionStorage.getItem('projectId'),
                        start:1,
                        size:5,
                    };
                    dispatch(setShowModalGrade(false));
                    dispatch(getVariableLibInfoGrade(params));
                }


            }else {
                message.info(response.data.msg);
            }
        },
    }
}
export function addVariableLib(params) {
    return {
        types: [ADD_VARIABLELIB_REQUEST, ADD_VARIABLELIB_SUCCESS, ADD_VARIABLELIB_FAIL],
        promise: client => client.post(URL+'/rule/scoreCard/add',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                message.info("新建成功");
                const params = {
                    mc:'',
                    projectId:sessionStorage.getItem('projectId'),
                    start:1,
                    size:5,
                };
                dispatch(setShowModalGrade(false));
                dispatch(getVariableLibInfoGrade(params));
            }else {
                message.info(response.data.msg);
            }
        },
    }
}
