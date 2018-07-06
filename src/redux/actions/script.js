export const SET_SCRIPT = "SET_SCRIPT";
export const UPDATE_SCRIPT = "UPDATE_SCRIPT";
import {URL} from 'config/config';


export function setScript(script) {
    return {type: SET_SCRIPT,
    script:script}
}
export function updateScript() {
    let params = {script:localStorage.getItem('script'),userId:sessionStorage.getItem('userId') };
    return {type: UPDATE_SCRIPT,
        promise: client => client.post(URL+'/rule/userOrRule/addUserOrRole',params),
        afterSuccess:(dispatch,getState,response)=>{
        },
    }
}