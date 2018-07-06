import {GET_CONSTANT_INFO_REQUEST, GET_CONSTANT_INFO_SUCCESS, GET_CONSTANT_INFO_FAIL} from 'actions/constant';

const initState = {
    isLoading: false,
    constant: {},
    msg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_CONSTANT_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                constant: {},
                msg: '请求中'
            };
        case GET_CONSTANT_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                constant: action.result.data,
                msg: '请求成功'
            };
        case GET_CONSTANT_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                constant: {},
                msg: '请求错误'
            };
        default:
            return state;
    }
}