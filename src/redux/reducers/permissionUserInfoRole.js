import {SET_PERMISSION_USER_TYPE,SET_PERMISSION_USER_USERNAME,SET_PERMISSION_USER_PASSWORD,SET_PERMISSION_USER_PASSWORD_COMFIRM,SET_PERMISSION_USER_CAPTION} from 'actions/permissionUserInfo';
import {SET_OLD_PASSWORD_MODIFY,SET_NEW_PASSWORD_MODIFY,SET_NEW_PASSWORD_COMFIRM_MODIFY,SET_CAPTION_MODIFY} from 'actions/permissionUserInfo';
/*
* 初始化state
 */
const initState = {
    type:'',
    username:'',
    password:'',
    passwordComfirm:'',
    caption:'',
    newPasswordModify:'',
    oldPasswordModify:'',
    newPasswordComfirmModify:'',
    captionModify:'',
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
            case SET_PERMISSION_USER_TYPE:
            return {
                ...state,
                type: action.temp
            };
            case SET_PERMISSION_USER_USERNAME:
            return {
                ...state,
                username: action.temp
            };
            case SET_PERMISSION_USER_PASSWORD:
            return {
                ...state,
                password: action.temp
            };
            case SET_PERMISSION_USER_PASSWORD_COMFIRM:
            return {
                ...state,
                passwordComfirm: action.temp
            };
            case SET_PERMISSION_USER_CAPTION:
            return {
                ...state,
                caption: action.temp
            };

        case SET_OLD_PASSWORD_MODIFY:
            return {
                ...state,
        oldPasswordModify: action.temp
            };
        case SET_NEW_PASSWORD_MODIFY:
        return {
            ...state,
        newPasswordModify: action.temp
        };
        case SET_NEW_PASSWORD_COMFIRM_MODIFY:
        return {
            ...state,
        newPasswordComfirmModify: action.temp
        };
        case SET_CAPTION_MODIFY:
        return {
            ...state,
        captionModify: action.temp
        };
            default:
            return state
    }
}