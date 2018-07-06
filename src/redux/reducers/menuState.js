import {SET_MENU_FIRST, SET_MENU_SECOND, SET_MENU_THIRD,SET_CLOSE_MODEL,SET_SHOW_MODEL} from 'actions/menuState';
import {SET_OPEN_KEYS, SET_REFLASH} from 'actions/menuState';
/*
* 初始化state
 */

const initState = {
    showModel:false,
    first: '规则',
    second:'项目一',
    third:'常量库',
    openKeys:'',
    reflash:'',
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_OPEN_KEYS:
            return {
                ...state,
                openKeys:action.temp,
            };
        case SET_REFLASH:
            return {
                ...state,
                reflash:action.temp,
            };
        case SET_CLOSE_MODEL:
            return {
                ...state,
                showModel:false,
            };
            case SET_SHOW_MODEL:
            return {
                ...state,
                showModel:true,
            };

            case SET_MENU_FIRST:
            return {
                ...state,
                first: action.firstTemp
            };
        case SET_MENU_SECOND:
            return {
                ...state,
                second: action.secondTemp,
            };
        case SET_MENU_THIRD:
            return {
                ...state,
                third: action.thirdTemp
            };
        default:
            return state
    }
}