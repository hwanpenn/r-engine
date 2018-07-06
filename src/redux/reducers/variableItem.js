import {GET_VARIABLEITEM_INFO_REQUEST, GET_VARIABLEITEM_INFO_SUCCESS, GET_VARIABLEITEM_INFO_FAIL} from 'actions/variableItem';
import {DELETE_VARIABLEITEM_REQUEST, DELETE_VARIABLEITEM_SUCCESS, DELETE_VARIABLEITEM_FAIL} from 'actions/variableItem';
import {MODIFY_VARIABLEITEM_REQUEST, MODIFY_VARIABLEITEM_SUCCESS, MODIFY_VARIABLEITEM_FAIL} from 'actions/variableItem';
import {ADD_VARIABLEITEM_REQUEST, ADD_VARIABLEITEM_SUCCESS, ADD_VARIABLEITEM_FAIL} from 'actions/variableItem';
import {SET_SHOW_MODAL, SET_MODAL_VIEW} from 'actions/variableItem';
import {SET_RES_INFO} from 'actions/variableItem';
import {SET_VARIABLEITEM_MODIFY_NAME, SET_VARIABLEITEM_ADD_NAME} from 'actions/variableItem';
import {SET_SELECT_VARIABLEITEM_NAME,SET_SELECT_ROW_ITEM} from 'actions/variableItem';
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
    selectProjectName:'123123',
    selectRowItem:''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_SELECT_VARIABLEITEM_NAME:
            return {
                ...state,
                selectProjectName:action.temp
            };
            case SET_SELECT_ROW_ITEM:
            return {
                ...state,
                selectRowItem:action.temp
            };
            case SET_VARIABLEITEM_MODIFY_NAME:
            return {
                ...state,
                projectModifyName:action.temp
            };
        case SET_VARIABLEITEM_ADD_NAME:
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
        case SET_RES_INFO:
            return {
                ...state,
                resInfo: action.temp,
            };
            case GET_VARIABLEITEM_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                resInfo: {},
                errorMsg: '请求中',
                temp:''
            };
        case GET_VARIABLEITEM_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                resInfo: action.result.data,
                errorMsg: '请求成功',
            };

        case GET_VARIABLEITEM_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误',
                temp:''
            };
        case DELETE_VARIABLEITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case DELETE_VARIABLEITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case DELETE_VARIABLEITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        case MODIFY_VARIABLEITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case MODIFY_VARIABLEITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case MODIFY_VARIABLEITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        case ADD_VARIABLEITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case ADD_VARIABLEITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case ADD_VARIABLEITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        default:
            return state;
    }
}