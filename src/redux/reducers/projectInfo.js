import {GET_PROJECT_INFO_REQUEST, GET_PROJECT_INFO_SUCCESS, GET_PROJECT_INFO_FAIL,SET_PROJECT_INFO} from 'actions/projectInfo';
import {GET_PROJECT_NUMBER_INFO_REQUEST, GET_PROJECT_NUMBER_INFO_SUCCESS, GET_PROJECT_NUMBER_INFO_FAIL} from 'actions/projectInfo';
import {ADD_PROJECT, MODIFY_PROJECT} from 'actions/projectInfo';
import {DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAIL} from 'actions/projectInfo';
import {SET_SHOW_MODAL, SET_MODAL_VIEW} from 'actions/projectInfo';
import {SET_PROJECT_MODIFY_NAME, SET_PROJECT_ADD_NAME} from 'actions/projectInfo';
import {SET_SELECT_PROJECT_NAME} from 'actions/projectInfo';
import {SET_SELECT_PROJECT} from 'actions/projectInfo';
import {SET_PROJECT_ID} from 'actions/projectInfo';
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
    selectProject:'',
    rootSubmenuKeys:[],
    projectId:''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_PROJECT_ID:
            return {
                ...state,
                projectId:action.temp
            };
        case SET_SELECT_PROJECT:
            return {
                ...state,
                selectProject:action.temp
            };
            case SET_SELECT_PROJECT_NAME:
            return {
                ...state,
                selectProjectName:action.temp
            };
            case SET_PROJECT_MODIFY_NAME:
            return {
                ...state,
                projectModifyName:action.temp
            };
        case SET_PROJECT_ADD_NAME:
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
        case GET_PROJECT_NUMBER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                resInfo: {},
                errorMsg: '请求中',
                temp:''
            };
        case GET_PROJECT_NUMBER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                resInfo: action.result.data,
                errorMsg: '请求成功',
            };
        case GET_PROJECT_NUMBER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误',
                temp:''
            };

            case GET_PROJECT_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                resInfo: {},
                errorMsg: '请求中',
                temp:''
            };
        case GET_PROJECT_INFO_SUCCESS:
            const projectArray = action.result.data.resultList;
            let rootSubmenuKeys = [];
            projectArray.map((project,index)=>{
                rootSubmenuKeys.push('sub'+index)
            })
            return {
                ...state,
                isLoading: false,
                resInfo: action.result.data,
                errorMsg: '请求成功',
                rootSubmenuKeys:rootSubmenuKeys,
            };
        case GET_PROJECT_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误',
                temp:''
            };
            case ADD_PROJECT:
                if(action.result.data.success===true){
                    message.info('操作成功');

                }else {
                    message.info(action.result.data.msg);
                }
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误',
                temp:''
            };
            case MODIFY_PROJECT:
                if(action.result.data.success===true){
                    message.info('操作成功');
                }else {
                    message.info(action.result.data.msg);
                }
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误',
                temp:''
            };
        case DELETE_PROJECT_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMsg: '请求中',
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求成功',
            };
        case DELETE_PROJECT_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMsg: '请求错误',
            };
        default:
            return state;
    }
}