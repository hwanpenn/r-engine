import {SET_SCRIPT} from 'actions/counter';
import {UPDATE_SCRIPT} from 'actions/counter';
import { message } from 'antd';

/*
* 初始化state
 */

const initState = {
    script: 'function findSequence(goal) {\n' +
    '  function find(start, history) {\n' +
    '    if (start == goal)\n' +
    '      return history;\n' +
    '    else if (start > goal)\n' +
    '      return null;\n' +
    '    else\n' +
    '      return find(start + 5, "(" + history + " + 5)") ||\n' +
    '             find(start * 3, "(" + history + " * 3)");\n' +
    '  }\n' +
    '  return find(1, "1");\n' +
    '}',
    updateScriptRes:''
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
    switch (action.type) {
        case SET_SCRIPT:
            return {
                script: action.script
            };
            case UPDATE_SCRIPT:
                if(action.result.data.success===true){
                    message.info('提交成功');
                }else {
                    message.info(action.result.data.msg);
                }
            return {
                updateScriptRes: action.result.data
            };

        default:
            return state
    }
}