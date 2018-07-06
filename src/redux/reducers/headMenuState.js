import {SET_RULE_CHIOCE, SET_PERMISSION_CHIOCE} from 'actions/headMenuState';

/*
* 初始化state
 */

const initState = {
    headMemuState: 'rule'
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_RULE_CHIOCE:
            return {
                ...state,
                headMemuState: "rule"
            };
        case SET_PERMISSION_CHIOCE:
            return {
                ...state,
                headMemuState: "permission"
            };
        default:
            return state
    }
}