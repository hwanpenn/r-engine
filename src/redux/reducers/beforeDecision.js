import {GET_VARIABLELIB_INFO_REQUEST, GET_VARIABLELIB_INFO_SUCCESS, GET_VARIABLELIB_INFO_FAIL} from 'actions/beforeDecision';
import {DELETE_VARIABLELIB_REQUEST, DELETE_VARIABLELIB_SUCCESS, DELETE_VARIABLELIB_FAIL} from 'actions/beforeDecision';
import {MODIFY_VARIABLELIB_REQUEST, MODIFY_VARIABLELIB_SUCCESS, MODIFY_VARIABLELIB_FAIL} from 'actions/beforeDecision';
import {ACTIVATE_VARIABLELIB_REQUEST_DECISION, ACTIVATE_VARIABLELIB_SUCCESS_DECISION, ACTIVATE_VARIABLELIB_FAIL_DECISION} from 'actions/beforeDecision';
import {STOP_VARIABLELIB_REQUEST, STOP_VARIABLELIB_SUCCESS, STOP_VARIABLELIB_FAIL,SET_ROW_TEMP} from 'actions/beforeDecision';
import {ADD_VARIABLELIB_REQUEST, ADD_VARIABLELIB_SUCCESS, ADD_VARIABLELIB_FAIL} from 'actions/beforeDecision';
import {GET_VARIABLELIB_INFO_REQUEST_DECISION, GET_VARIABLELIB_INFO_SUCCESS_DECISION, GET_VARIABLELIB_INFO_FAIL_DECISION} from 'actions/beforeDecision';
import {SET_SHOW_MODAL, SET_MODAL_VIEW,SET_SHOW_MODAL_GRADE,SET_MODAL_VIEW_GRADE} from 'actions/beforeDecision';
import {SET_VARIABLELIB_MODIFY_NAME, SET_VARIABLELIB_ADD_NAME, SET_VARIABLELIB_ADD_NAME2, SET_VARIABLELIB_ADD_NAME3} from 'actions/beforeDecision';
import {SET_SELECT_VARIABLELIB_NAME,SET_SELECT_ROW_DECISION_SELECT,SET_LIBORITEM} from 'actions/beforeDecision';
import {SET_VARIABLELIB_ADD_NAME_DECISION1,SET_VARIABLELIB_ADD_NAME_DECISION4} from 'actions/beforeDecision';
import {SET_VARIABLELIB_MODIFY_NAME1,SET_VARIABLELIB_ADD_NAME1,SET_VARIABLELIB_MODIFY_NAME_TYPE1,SET_VARIABLELIB_ADD_NAME_TYPE1} from 'actions/beforeDecision';
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import { Route, Switch, Link} from 'react-router-dom';
import { message ,Select} from 'antd';
const { SubMenu } = Menu;



message.config({
    duration: 1,
});
const initState = {
    isLoading: false,
    resInfo: {},
    errorMsg: '',
    temp:'',
    projectNumber:'',
    modalView:'',
    modalViewGrade:'',
    showModel:false,
    showModel1:false,
    projectAddName:'',
    projectAddName2:'',
    projectAddName3:'',
    projectModifyName:'',
    projectAddName1:'',
    projectModifyName1:'',
    projectAddNameType1:'',
    projectModifyNameType1:'',
    selectProjectName:'',
    selectRowDecisionSelect:'',
    libOrItem:'lib',
    rowTemp:'',
    showModelGrade:false,
    childrenDecision:'',
    projectModifyNameDecision1:'',
    projectModifyNameDecision4:'',
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_VARIABLELIB_ADD_NAME_DECISION1:
            return {
                ...state,
                projectModifyNameDecision1:action.temp
            };case SET_VARIABLELIB_ADD_NAME_DECISION4:
        return {
            ...state,
            projectModifyNameDecision4:action.temp
        };
        case SET_SHOW_MODAL_GRADE:
            return {
                ...state,
                showModelGrade:action.temp
            };case SET_VARIABLELIB_MODIFY_NAME1:
        return {
            ...state,
            projectModifyName1:action.temp
        };case SET_VARIABLELIB_ADD_NAME1:
        return {
            ...state,
            projectAddName1:action.temp
        };case SET_VARIABLELIB_MODIFY_NAME_TYPE1:
        return {
            ...state,
            projectModifyNameType1:action.temp
        };case SET_VARIABLELIB_ADD_NAME_TYPE1:
        return {
            ...state,
            projectAddNameType1:action.temp
        };case SET_LIBORITEM:
        return {
            ...state,
            libOrItem:action.temp
        };case SET_SELECT_ROW_DECISION_SELECT:
        return {
            ...state,
            selectRowDecisionSelect:action.temp
        };
        case SET_SELECT_VARIABLELIB_NAME:
            return {
                ...state,
                selectProjectName:action.temp
            };
        case SET_VARIABLELIB_MODIFY_NAME:
            return {
                ...state,
                projectModifyName:action.temp
            };
        case SET_VARIABLELIB_ADD_NAME2:
            return {
                ...state,
                projectAddName2:action.temp
            };
        case SET_VARIABLELIB_ADD_NAME3:
            return {
                ...state,
                projectAddName3:action.temp
            };
        case SET_VARIABLELIB_ADD_NAME:
            return {
                ...state,
                projectAddName:action.temp
            };
        case SET_SHOW_MODAL:
            return {
                ...state,
                showModel:action.tempBoolean
            };
        case SET_MODAL_VIEW_GRADE:
            return {
                ...state,
                modalViewGrade:action.temp
            };
        case GET_VARIABLELIB_INFO_REQUEST_DECISION:
            return {
                ...state,
            };
        case GET_VARIABLELIB_INFO_SUCCESS_DECISION:
            const variableLiTemp =  action.result.data.resultList;
            const children11 = [];
            if(action.result.data.resultList!==undefined){
                variableLiTemp.map((lib,index)=>{
                    children11.push(<Select.Option value={lib.id}> {lib.mc} </Select.Option>);
                });
            }


            return {
                ...state,
                childrenDecision:children11
            };
        case GET_VARIABLELIB_INFO_FAIL_DECISION:
            return {
                ...state,
            };
        case GET_VARIABLELIB_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                resInfo: {},
                errorMsg: '请求中',
                temp:''
            };
        case GET_VARIABLELIB_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                resInfo: action.result.data,
                errorMsg: '请求成功',
            };
        case GET_VARIABLELIB_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误',
                temp:''
            };
        case SET_ROW_TEMP:
            return {
                ...state,
                rowTemp:action.temp
            };
        case ACTIVATE_VARIABLELIB_REQUEST_DECISION:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case ACTIVATE_VARIABLELIB_SUCCESS_DECISION:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case ACTIVATE_VARIABLELIB_FAIL_DECISION:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        case STOP_VARIABLELIB_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case STOP_VARIABLELIB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case STOP_VARIABLELIB_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        case DELETE_VARIABLELIB_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case DELETE_VARIABLELIB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case DELETE_VARIABLELIB_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };

        case MODIFY_VARIABLELIB_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case MODIFY_VARIABLELIB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case MODIFY_VARIABLELIB_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        case ADD_VARIABLELIB_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case ADD_VARIABLELIB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case ADD_VARIABLELIB_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        default:
            return state;
    }
}