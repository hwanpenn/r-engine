import {URL} from 'config/config';
export const GET_CONSTANT_INFO_REQUEST = "GET_CONSTANT_INFO_REQUEST";
export const GET_CONSTANT_INFO_SUCCESS = "GET_CONSTANT_INFO_SUCCESS";
export const GET_CONSTANT_INFO_FAIL = "GET_CONSTANT_INFO_FAIL";
export const GET_CONSTANT_INFO_LOCAL = "GET_CONSTANT_INFO_LOCAL";




function getUserInfoLocal() {
    return {
        type: GET_USER_INFO_LOCAL
    }
}
export function getUserInfo(values,myRoute) {
    return {

        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: client => client.post(URL+'/login',{
            username: values.userName,
            password: values.password
        }),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.status==='success'){
                    sessionStorage.setItem('token','token');
                    sessionStorage.setItem('userName',values.userName);
                    sessionStorage.setItem('userId',response.data.userId);
                myRoute.push("/");
            }
        }
    }
}

