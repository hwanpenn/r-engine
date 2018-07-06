import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL, GET_USER_INFO_LOCAL} from 'actions/userInfo';

const initState = {
    isLoading: false,
    userInfo: {},
    msg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                msg: '请求中'
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                msg: '请求成功'
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                msg: '请求错误'
            };
        case GET_USER_INFO_LOCAL:
            return {
                state
            };
        default:
            return state;
    }
}