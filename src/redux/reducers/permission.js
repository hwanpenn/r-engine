import {GET_PERMISSION_INFO_REQUEST, GET_PERMISSION_INFO_SUCCESS, GET_PERMISSION_INFO_FAIL} from 'actions/permission';
import {ADD_PERMISSION_REQUEST, ADD_PERMISSION_SUCCESS, ADD_PERMISSION_FAIL} from 'actions/permission';
import {MODIFY_PERMISSION_REQUEST, MODIFY_PERMISSION_SUCCESS, MODIFY_PERMISSION_FAIL} from 'actions/permission';
import {DELETE_PERMISSION_REQUEST, DELETE_PERMISSION_SUCCESS, DELETE_PERMISSION_FAIL} from 'actions/permission';
import {SET_PERMISSION_REQUEST, SET_PERMISSION_SUCCESS, SET_PERMISSION_FAIL} from 'actions/permission';
import {showModel} from 'actions/permission';
import {SET_SHOW_MODEL} from 'actions/permission';
import { message } from 'antd';
message.config({
    duration: 1,
});

const initState = {
    addOrModify:'',
    showModel:false,
    isLoading: false,
    permission: {},
    msg: '',
    isLoadingAdd: false,
    permissionAdd: {},
    msgAdd: '',
    isLoadingModify: false,
    permissionModify: {},
    msgModify: '',
    isLoadingDelete: false,
    permissionDelete: {},
    msgDelete: '',
    isLoadingSet: false,
    permissionSet: {},
    msgSet: '',
    row:'',
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_PERMISSION_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                permission: {},
                msg: '请求中'
            };
        case GET_PERMISSION_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                permission: action.result.data,
                msg: '请求成功'
            };
        case GET_PERMISSION_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                permission: {},
                msg: '请求错误'
            };

            case ADD_PERMISSION_REQUEST:
            return {
                ...state,
                isLoadingAdd: true,
                permissionAdd: {},
                msgAdd: '请求中'
            };
            case ADD_PERMISSION_SUCCESS:
                let tempShowModel = true;
                if(action.result.data.success===true){
                    tempShowModel = false;
                    message.info('请求成功');
                }else {
                    message.info(action.result.data.msg);
                }
            return {
                ...state,
                isLoadingAdd: false,
                permissionAdd: action.result.data,
                msgAdd: '请求成功',
                showModel:tempShowModel
            };
            case ADD_PERMISSION_FAIL:
            return {
                ...state,
                isLoadingAdd: false,
                permissionAdd: {},
                msgAdd: '请求错误'
            };

            case MODIFY_PERMISSION_REQUEST:
            return {
                ...state,
                isLoadingModify: true,
                permissionModify: {},
                msgModify: '请求中'
            };
            case MODIFY_PERMISSION_SUCCESS:
                let tempShowModel1 = true;
                if(action.result.data.success===true){
                    tempShowModel1 = false;
                    message.info('请求成功');
                }else {
                    message.info(action.result.data.msg);
                }
            return {
                ...state,
                isLoadingModify: false,
                permissionModify: action.result.data,
                msgModify: '请求成功',
                showModel:tempShowModel1
            };
            case MODIFY_PERMISSION_FAIL:
            return {
                ...state,
                isLoadingModify: false,
                permissionModify: {},
                msgModify: '请求错误'
            };

            case DELETE_PERMISSION_REQUEST:
            return {
                ...state,
                isLoadingDelete: false,
                permissionDelete: {},
                msgDelete: '请求错误'
            };
            case DELETE_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoadingDelete: false,
                permissionDelete: action.result.data,
                msgDelete: '请求错误'
            };
            case DELETE_PERMISSION_FAIL:
            return {
                ...state,
                isLoadingDelete: false,
                permissionDelete: {},
                msgDelete: '请求错误'
            };

            case SET_PERMISSION_REQUEST:
            return {
                ...state,
                isLoadingSet: false,
                permissionSet: {},
                msgSet: '请求错误'
            };
            case SET_PERMISSION_SUCCESS:
            return {
                ...state,
                isLoadingSet: false,
                permissionSet: action.result.data,
                msgSet: '请求错误'
            };
            case SET_PERMISSION_FAIL:
            return {
                ...state,
                isLoadingSet: false,
                permissionSet: {},
                msgSet: '请求错误'
            };
            case SET_SHOW_MODEL:
            return {
                ...state,
                showModel:action.boolean,
                addOrModify:action.addOrModify,
                row:action.row
            };

        default:
            return state;
    }
}