import {URL} from 'config/config';
import {withRouter} from "react-router-dom";
 const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";
export const GET_USER_INFO_LOCAL = "GET_USER_INFO_LOCAL";


function getUserInfoLocal() {
    return {
        type: GET_USER_INFO_LOCAL
    }
}
export function getUserInfo(values,myRoute) {
    let param = new URLSearchParams();
    param.append("username",values.userName);
    param.append("password",values.password);
    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.post(URL+'/login',param),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.status==='success'){
                    sessionStorage.setItem('name',response.data.name);
                    sessionStorage.setItem('userId',response.data.userid);
                    sessionStorage.setItem('role',response.data.role);
                myRoute.push("/");
            }
        }
    }
}

