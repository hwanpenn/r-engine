import {URL} from 'config/config';
import { message } from 'antd';
export const GET_GRADE_DATA_REQUEST = "GET_GRADE_DATA_REQUEST";
export const GET_GRADE_DATA_SUCCESS = "GET_GRADE_DATA_SUCCESS";
export const GET_GRADE_DATA_FAIL = "GET_GRADE_DATA_FAIL";
export const ADD_GRADE_DATA_REQUEST = "ADD_GRADE_DATA_REQUEST";
export const ADD_GRADE_DATA_SUCCESS = "ADD_GRADE_DATA_SUCCESS";
export const ADD_GRADE_DATA_FAIL = "ADD_GRADE_DATA_FAIL";
export const GET_GRADE_DATA_TEMP_DECISION = "GET_GRADE_DATA_TEMP_DECISION";
export const ADD_GRADE_VARIABLE = "ADD_GRADE_VARIABLE";
export const DELETE_GRADE_VARIABLE = "DELETE_GRADE_VARIABLE";
export const ADD_CONDITION_VARIABLE = "ADD_CONDITION_VARIABLE";
export const SET_DATASOURCE1 = "SET_DATASOURCE1";
export const SET_DATASOURCE2 = "SET_DATASOURCE2";
export const SET_CLICKNODE = "SET_CLICKNODE";
export const SET_CLICKITEM = "SET_CLICKITEM";
export const SET_TREETEMP = "SET_TREETEMP";
export const SET_DATA = "SET_DATA";
export const SET_DATA_INPUT = "SET_DATA_INPUT";
export const SET_DATA_INPUT1 = "SET_DATA_INPUT1";
export const SET_DATA_INPUT11 = "SET_DATA_INPUT11";
export const SET_DATA_INPUT2 = "SET_DATA_INPUT2";
export const SET_DATA_INPUT3 = "SET_DATA_INPUT3";
export const GET_INIT_DATA = "GET_INIT_DATA";
export const SET_TEMPKEY = "SET_TEMPKEY";
export const SET_TEMPKEY_HANDLE = "SET_TEMPKEY_HANDLE";
export const SET_TEMPKEY_HANDLE_SET_DEFAULT = "SET_TEMPKEY_HANDLE_SET_DEFAULT";
export const SET_SHOW_VISIABLE = "SET_SHOW_VISIABLE";
export const SET_SHOW_VISIABLE_DECISION = "SET_SHOW_VISIABLE_DECISION";
export const SET_XANDY = "SET_XANDY";
export const SET_KEYNUM = "SET_KEYNUM";
export const SET_KEYNUM1 = "SET_KEYNUM1";
export const RIGHT_CLICK = "RIGHT_CLICK";
export const DELETE_CONDITION_VARIABLE = "DELETE_CONDITION_VARIABLE";
export const GET_VARIABLEITEM_INFO_REQUEST_OPTION_DECISION = "GET_VARIABLEITEM_INFO_REQUEST_OPTION_DECISION";
export const GET_VARIABLEITEM_INFO_SUCCESS_OPTION_DECISION = "GET_VARIABLEITEM_INFO_SUCCESS_OPTION_DECISION";
export const GET_VARIABLEITEM_INFO_FAIL_OPTION_DECISION = "GET_VARIABLEITEM_INFO_FAIL_OPTION_DECISION";
export const MODIFY_VARIABLELIB_REQUEST_DECISION = "MODIFY_VARIABLELIB_REQUEST_DECISION";
export const MODIFY_VARIABLELIB_SUCCESS_DECISION = "MODIFY_VARIABLELIB_SUCCESS_DECISION";
export const MODIFY_VARIABLELIB_FAIL_DECISION = "MODIFY_VARIABLELIB_FAIL_DECISION";
message.config({
    duration: 1,
});

export function setXandY(temp1,temp2) {
    return {
        type: SET_XANDY,
        testTemp1:temp1,
        testTemp2:temp2,
    }
}
export function setdecisionShowVariable(temp) {
    return {
        type: SET_SHOW_VISIABLE_DECISION,
        testTemp:temp,
    }
}
export function setshowVisible(temp) {
    return {
        type: SET_SHOW_VISIABLE,
        testTemp:temp,
    }
}
export function handleClickCurd(temp) {
    return {
        type: SET_TEMPKEY_HANDLE,
        testTemp:temp,
    }
}
export function setValueTempDefault(indexTemp0,indexTemp1,indexTemp2,indexTemp3) {
    return {
        type: SET_TEMPKEY_HANDLE_SET_DEFAULT,
        testTemp0:indexTemp0,
        testTemp1:indexTemp1,
        testTemp2:indexTemp2,
        testTemp3:indexTemp3,
    }
}
export function setTempKey() {
    return {
        type: SET_TEMPKEY,
    }
}

export function getDecisionItemInfoCell(params) {
    return {
        types: [GET_VARIABLEITEM_INFO_REQUEST_OPTION_DECISION, GET_VARIABLEITEM_INFO_SUCCESS_OPTION_DECISION, GET_VARIABLEITEM_INFO_FAIL_OPTION_DECISION],
        promise: client => client.get(URL+'/rule/variable/queryVariables',{
            params: params
        }),
        afterSuccess:(dispatch,getState,response)=>{
        },
    }
}

export function rigthClick(testTemp) {
    return {
        type: RIGHT_CLICK,
        testTemp:testTemp,
    }
}
export function getInitData(testTemp) {
    return {
        type: GET_INIT_DATA,
        testTemp:data1,
    }
}
export function setInputValue(testTemp) {
    return {
        type: SET_DATA_INPUT,
        testTemp:testTemp,
    }
}
export function setInputValue11(testTemp) {
    return {
        type: SET_DATA_INPUT11,
        testTemp:testTemp,
    }
}
export function setInputValue1(testTemp) {
    return {
        type: SET_DATA_INPUT1,
        testTemp:testTemp,
    }
}
export function setInputValue2(testTemp) {
    return {
        type: SET_DATA_INPUT2,
        testTemp:testTemp,
    }
}
export function setInputValue3(testTemp) {
    return {
        type: SET_DATA_INPUT3,
        testTemp:testTemp,
    }
}
export function setData(testTemp) {
    return {
        type: SET_DATA,
        testTemp:testTemp,
    }
}
export function setClickItem(testTemp) {
    return {
        type: SET_CLICKITEM,
        testTemp:testTemp,
    }
}
export function setTreeTemp(testTemp) {
    return {
        type: SET_TREETEMP,
        testTemp:testTemp,
    }
}
export function setClickNode(testTemp) {
    return {
        type: SET_CLICKNODE,
        testTemp:testTemp,
    }
}
export function setKeyNum(testTemp) {
    return {
        type: SET_KEYNUM,
        testTemp:testTemp,
    }
}
export function setKeyNum1(testTemp) {
    return {
        type: SET_KEYNUM1,
        testTemp:testTemp,
    }
}
export function setDataSource1(testTemp) {
    return {
        type: SET_DATASOURCE1,
        testTemp:testTemp,
    }
}
export function setDataSource2(testTemp) {
    return {
        type: SET_DATASOURCE2,
        testTemp:testTemp,
    }
}
export function addVariable() {
    return {
        type: ADD_GRADE_VARIABLE,
        testTemp:testTemp,
    }
}
export function deleteVariable(indexTemp) {
    return {
        type: DELETE_GRADE_VARIABLE,
        indexTemp:indexTemp,
    }
}
export function addCondition(indexTemp) {
    return {
        type: ADD_CONDITION_VARIABLE,
        indexTemp:indexTemp
    }
}
export function deleteCondition(indexTemp) {

    return {
        type: DELETE_CONDITION_VARIABLE,
        indexTemp:indexTemp,
    }
}
export function getDecisionDataTemp(nodes) {

    return {
        type: GET_GRADE_DATA_TEMP_DECISION,
        testTemp:'',
        testTemp1:nodes
    }
}
export function getGradeData(params) {
    return {
        types: [GET_GRADE_DATA_REQUEST, GET_GRADE_DATA_SUCCESS, GET_GRADE_DATA_FAIL],
        promise: client => client.post(URL+'/rule/decisionTable/ queryDecisionTables',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.status==='success'){
            }
        }
    }
}
export function addDecisionData(params) {
    return {
        types: [ADD_GRADE_DATA_REQUEST, ADD_GRADE_DATA_SUCCESS, ADD_GRADE_DATA_FAIL],
        promise: client => client.post(URL+'/rule/decisionTable/add',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.status==='success'){
            }
        }
    }
}

export function modifyVariableLibDecision(params) {
    return {
        types: [MODIFY_VARIABLELIB_REQUEST_DECISION, MODIFY_VARIABLELIB_SUCCESS_DECISION, MODIFY_VARIABLELIB_FAIL_DECISION],
        promise: client => client.post(URL+'/rule/decisionTable/update',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                message.info("操作成功");
            }else {
                message.info(response.data.msg);
            }
        },
    }
}