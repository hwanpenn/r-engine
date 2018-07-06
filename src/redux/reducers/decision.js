import {GET_GRADE_DATA_REQUEST,GET_GRADE_DATA_SUCCESS,GET_GRADE_DATA_FAIL,GET_GRADE_DATA_TEMP_DECISION} from 'actions/decision';
import {ADD_GRADE_DATA_REQUEST,ADD_GRADE_DATA_SUCCESS,ADD_GRADE_DATA_FAIL} from 'actions/decision';
import {DELETE_GRADE_VARIABLE,ADD_GRADE_VARIABLE} from 'actions/decision';
import {DELETE_CONDITION_VARIABLE,ADD_CONDITION_VARIABLE} from 'actions/decision';
import {SET_DATASOURCE1,SET_DATASOURCE2} from 'actions/decision';
import {SET_KEYNUM,SET_KEYNUM1} from 'actions/decision';
import {SET_CLICKNODE} from 'actions/decision';
import {SET_TEMPKEY_HANDLE} from 'actions/decision';
import {SET_TREETEMP} from 'actions/decision';
import {SET_CLICKITEM} from 'actions/decision';
import {SET_DATA,SET_DATA_INPUT,SET_DATA_INPUT1,SET_DATA_INPUT11,SET_DATA_INPUT2,SET_DATA_INPUT3} from 'actions/decision';
import {SET_TEMPKEY,SET_TEMPKEY_HANDLE_SET_DEFAULT} from 'actions/decision';
import {GET_INIT_DATA} from 'actions/decision';
import {RIGHT_CLICK} from 'actions/decision';
import {SET_SHOW_VISIABLE,SET_SHOW_VISIABLE_DECISION,SET_XANDY} from 'actions/decision';
import {GET_VARIABLEITEM_INFO_REQUEST_OPTION_DECISION, GET_VARIABLEITEM_INFO_SUCCESS_OPTION_DECISION, GET_VARIABLEITEM_INFO_FAIL_OPTION_DECISION} from 'actions/decision';
import {MODIFY_VARIABLELIB_REQUEST_DECISION, MODIFY_VARIABLELIB_SUCCESS_DECISION, MODIFY_VARIABLELIB_FAIL_DECISION} from 'actions/decision';
import React, {Component} from 'react';
import { Select } from 'antd';
const initState = {
    isLoading:'',
    errorMsg:'',
    testTemp : [],
    testTemp1 : [],
    testTemp11 : [],
    columnsTemp:[],
    columns:[],
    keyNum: 0,
    keyNum1: 0,
    dataSource1:[],
    dataSource2:[],
    clickNode:{"variable":"start","sign":"","value":""},
    treeTemp:'',
    dataTemp:'',
    dataTemp1:'',
    clickItem:'',
    tempKey:1,
    childrenCell:'',
    variableNames:'',
    showVisible:false,
    clickX:'',
    clickY:'',
    setdecisionShowVariable:false,
    dataInputValue:'',
    dataInputValue1:'',
    dataInputValue2:'',
    dataInputValue3:'',
    handleClickCrud:'',
    valueTemp0:'',
    valueTemp1:'',
    valueTemp2:'',
    valueTemp3:'',
};

const baseTempNew1 = {"variable":"", "weight":"","conditions":
    [
        {"score":0,"condition":
            [
                {"sign":"","value":""},{"logic":"","sign":"","value":""}
            ]
        }
    ]
};
const baseCondition = {"score":"","condition":
    [
        {"sign":"","value":""},{"logic":"","sign":"","value":""}
    ]
};
let tempKey = 1;
/*
* reducer
 */
function changeDate2(data){
    if(data.variable===undefined&&data.key===undefined){
        data.variable= "start";
        data.variableName= "start";
        data.keyTemp= tempKey;
        tempKey++;
        data.variable1= "start";
    }else {
        data.keyTemp= tempKey;
        tempKey++;
    }
    if(data.nodes===undefined){

    }else {
        const tempResult = data.nodes;
        data.children = tempResult;
        delete data.nodes;
        data.children.map((data)=>{
            changeDate2(data);
        })
    }

    if(data.result===undefined){

    }else {
        let tempResult1 = data.result;
        tempResult1.keyTemp= tempKey;
        tempKey++;
        // let valueTemp = [];
        // valueTemp.push(tempResult1);
        // data.children = valueTemp;
        data.children = tempResult1;
        data.resultMark = 1;
        delete data.result;
    }
    return data;
}
function changeDate1(data){
    if(data.variable1===undefined){
        delete data.keyTemp;
    }else {
        delete data.variable1;
        delete data.variable;
        delete data.variableName;
        delete data.keyTemp;
    }
    if(data.children===undefined){

    }else {
        if(data.resultMark===undefined){
            const tempResult = data.children;
            data.nodes = tempResult;
            delete data.children;
            data.nodes.map((data)=>{
                changeDate1(data);
            })
        }else {
            const tempResult1 = data.children;
            delete tempResult1[0].keyTemp;
            data.result = tempResult1[0];
            delete data.children;
            delete data.resultMark;
        }

    }


}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_XANDY:
            return {
                ...state,
                clickX:action.testTemp1,
                clickY:action.testTemp2
            };
        case SET_SHOW_VISIABLE_DECISION:
            return {
                ...state,
                decisionShowVariable:action.testTemp
            };
        case SET_SHOW_VISIABLE:
            return {
                ...state,
                showVisible:action.testTemp
            };
            case RIGHT_CLICK:
            return {
                ...state,
            };
            case MODIFY_VARIABLELIB_REQUEST_DECISION:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
        case MODIFY_VARIABLELIB_SUCCESS_DECISION:
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
            };
        case MODIFY_VARIABLELIB_FAIL_DECISION:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
        case GET_VARIABLEITEM_INFO_REQUEST_OPTION_DECISION:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
        case GET_VARIABLEITEM_INFO_SUCCESS_OPTION_DECISION:
            const variableLiTemp =  action.result.data.resultList;
            const children11 = [];
            variableLiTemp.map((lib,index)=>{
                children11.push(<Select.Option value={lib.bm}> {lib.mc} </Select.Option>);
            });
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
                childrenCell:children11,
                variableNames:variableLiTemp
            };
        case GET_VARIABLEITEM_INFO_FAIL_OPTION_DECISION:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
        case GET_INIT_DATA:
            let temp1 = ''
            temp1 = action.testTemp
            let temp2 = ''
            temp2 = JSON.parse(JSON.stringify(temp1));
            changeDate2(temp2)
             const stateKeyTemp = tempKey;
            tempKey = 1;
            return {
                ...state,
                dataTemp:temp2,
                dataTemp1:temp1,
                tempKey:stateKeyTemp,
            };
        case SET_TEMPKEY_HANDLE_SET_DEFAULT:

            return {
                ...state,
                valueTemp0:action.testTemp0,
                valueTemp1:action.testTemp1,
                valueTemp2:action.testTemp2,
                valueTemp3:action.testTemp3,
            };
        case SET_TEMPKEY_HANDLE:
            return {
                ...state,
                handleClickCrud:action.testTemp,
            };
        case SET_TEMPKEY:
            return {
                ...state,
                tempKey:state.tempKey+1,
            };
        case SET_DATA_INPUT:
            return {
                ...state,
                dataInputValue:action.testTemp,
            };
        case SET_DATA_INPUT11:
            return {
                ...state,
                dataInputValue11:action.testTemp,
            };
        case SET_DATA_INPUT1:
            return {
                ...state,
                dataInputValue1:action.testTemp,
            };
        case SET_DATA_INPUT2:
            return {
                ...state,
                dataInputValue2:action.testTemp,
            };
        case SET_DATA_INPUT3:
            return {
                ...state,
                dataInputValue3:action.testTemp,
            };
        case SET_DATA:
            return {
                ...state,
                dataTemp:action.testTemp,
            };
        case SET_CLICKITEM:
            return {
                ...state,
                clickItem:action.testTemp,
            };
        case SET_TREETEMP:
            return {
                ...state,
                treeTemp:action.testTemp,
            };
        case SET_CLICKNODE:
            return {
                ...state,
                clickNode:action.testTemp,
            };
        case ADD_GRADE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
            case ADD_GRADE_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
                testTemp11 : action.result.data
            };
            case ADD_GRADE_DATA_FAIL:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
            case GET_GRADE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
            case GET_GRADE_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
                testTemp : action.result.data
            };
            case GET_GRADE_DATA_FAIL:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
            case DELETE_GRADE_VARIABLE:
                let testTempNew1 = state.testTemp;

                const indexValue = changeData1(action.indexTemp,testTempNew1);
                testTempNew1.splice(indexValue,1);
                let columnsTempDelete =  changeData(testTempNew1);
            return {
                ...state,
                columnsTemp:columnsTempDelete,
                testTemp:testTempNew1,
            };
            case ADD_GRADE_VARIABLE:
                let testTempNew = state.testTemp;
                testTempNew.push(baseTempNew1);
                let columnsTempAdd =  changeData(testTempNew);
            return {
                ...state,
                columnsTemp:columnsTempAdd,
                testTemp:testTempNew,
            };
            case DELETE_CONDITION_VARIABLE:
            return {
                ...state,
            };
            case SET_KEYNUM:
            return {
                ...state,
                keyNum:action.testTemp
            };
            case SET_KEYNUM1:
            return {
                ...state,
                keyNum1:action.testTemp
            };
            case SET_DATASOURCE1:
            return {
                ...state,
                dataSource1:action.testTemp
            };
            case SET_DATASOURCE2:
            return {
                ...state,
                dataSource2:action.testTemp
            };
            case ADD_CONDITION_VARIABLE:
                let testTempNew2 = state.testTemp;


                testTempNew2[action.indexTemp].conditions.push(baseCondition);
                let columnsTempAdd2 =  changeData(testTempNew2);
            return {
                ...state,
                columnsTemp:columnsTempAdd2
            };
        case GET_GRADE_DATA_TEMP_DECISION:

            let testTemp11 = action.testTemp1;
            let testTemp1 = [];
                testTemp1 = JSON.parse(testTemp11);
            let columnsTempAdd3 =  changeDate2(testTemp1);
            const stateKeyTemp1 = tempKey;
            tempKey = 1;
            return {
                ...state,
                dataTemp: columnsTempAdd3,
                tempKey:stateKeyTemp1,
            };
        default:
            return state
    }
}