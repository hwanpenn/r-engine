import {URL} from 'config/config';
import {withRouter} from "react-router-dom";
 const GET_INFO_REQUEST = "GET_INFO_REQUEST";
export const GET_INFO_SUCCESS = "GET_INFO_SUCCESS";
export const GET_INFO_FAIL = "GET_INFO_FAIL";




export function getInfo(url,getOrPost,params) {
    if(getOrPost=="get"){
        return {
            types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
            promise: client => client.get(URL+url,params),
            afterSuccess:(dispatch,getState,response)=>{

            },
        }
    }else if(getOrPost=="post"){
        return {

            types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
            promise: client => client.post(URL+url,params),
            afterSuccess:(dispatch,getState,response)=>{

            }
        }
    }else {
    }

}

