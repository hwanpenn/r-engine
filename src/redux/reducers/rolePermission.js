import {GET_CONSTANT_INFO_REQUEST, GET_CONSTANT_INFO_SUCCESS, GET_CONSTANT_INFO_FAIL} from 'actions/permission';

const initState = {
    isLoading: false,
    permission: {},
    msg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_CONSTANT_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                permission: {},
                msg: '请求中'
            };
        case GET_CONSTANT_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                permission: action.result.data,
                msg: '请求成功'
            };
        case GET_CONSTANT_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                permission: {},
                msg: '请求错误'
            };
        default:
            return state;
    }
}