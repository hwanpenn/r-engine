import {GET_VARIABLELIB_INFO_REQUEST, GET_VARIABLELIB_INFO_SUCCESS, GET_VARIABLELIB_INFO_FAIL} from 'actions/variableLib';
import {DELETE_VARIABLELIB_REQUEST, DELETE_VARIABLELIB_SUCCESS, DELETE_VARIABLELIB_FAIL} from 'actions/variableLib';
import {MODIFY_VARIABLELIB_REQUEST, MODIFY_VARIABLELIB_SUCCESS, MODIFY_VARIABLELIB_FAIL} from 'actions/variableLib';
import {ADD_VARIABLELIB_REQUEST, ADD_VARIABLELIB_SUCCESS, ADD_VARIABLELIB_FAIL} from 'actions/variableLib';
import {SET_SHOW_MODAL, SET_MODAL_VIEW} from 'actions/variableLib';
import {SET_VARIABLELIB_MODIFY_NAME, SET_VARIABLELIB_ADD_NAME} from 'actions/variableLib';
import {SET_SELECT_VARIABLELIB_NAME,SET_SELECT_ROW,SET_LIBORITEM} from 'actions/variableLib';
import {SET_VARIABLELIB_MODIFY_NAME1,SET_VARIABLELIB_ADD_NAME2,SET_VARIABLELIB_ADD_NAME1,SET_VARIABLELIB_MODIFY_NAME_TYPE1,SET_VARIABLELIB_ADD_NAME_TYPE1} from 'actions/variableLib';
import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
import { Route, Switch, Link} from 'react-router-dom';
import { message } from 'antd';




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
    showModel:false,
    projectAddName:'',
    projectModifyName:'',
    projectAddName1:'',
    projectAddName2:'',
    projectModifyName1:'',
    projectAddNameType1:'',
    projectModifyNameType1:'',
    selectProjectName:'',
    selectRow:'',
    libOrItem:'lib',
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_VARIABLELIB_MODIFY_NAME1:
            return {
                ...state,
                projectModifyName1:action.temp
            };case SET_VARIABLELIB_ADD_NAME2:
            return {
                ...state,
                projectAddName2:action.temp
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
            };case SET_SELECT_ROW:
            return {
                ...state,
                selectRow:action.temp
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
        case SET_MODAL_VIEW:
            return {
                ...state,
                modalView:action.temp
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