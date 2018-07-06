import {GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL} from 'actions/getInfo';


const initState = {
    isLoading: false,
    resInfo: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                resInfo: {},
                errorMsg: '请求中'
            };
        case GET_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                resInfo: action.result.data,
                errorMsg: '请求成功'
            };
        case GET_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                resInfo: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}