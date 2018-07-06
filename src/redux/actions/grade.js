import {URL} from 'config/config';
export const GET_GRADE_DATA_REQUEST = "GET_GRADE_DATA_REQUEST";
export const GET_GRADE_DATA_SUCCESS = "GET_GRADE_DATA_SUCCESS";
export const GET_GRADE_DATA_FAIL = "GET_GRADE_DATA_FAIL";
export const ADD_GRADE_DATA_REQUEST = "ADD_GRADE_DATA_REQUEST";
export const ADD_GRADE_DATA_SUCCESS = "ADD_GRADE_DATA_SUCCESS";
export const ADD_GRADE_DATA_FAIL = "ADD_GRADE_DATA_FAIL";
export const GET_GRADE_DATA_TEMP = "GET_GRADE_DATA_TEMP";
export const ADD_GRADE_VARIABLE = "ADD_GRADE_VARIABLE";
export const DELETE_GRADE_VARIABLE = "DELETE_GRADE_VARIABLE";
export const ADD_CONDITION_VARIABLE = "ADD_CONDITION_VARIABLE";
export const SET_DATASOURCE1 = "SET_DATASOURCE1";
export const SET_DATASOURCE2 = "SET_DATASOURCE2";
export const SET_KEYNUM = "SET_KEYNUM";
export const SET_KEYNUM1 = "SET_KEYNUM1";
export const DELETE_CONDITION_VARIABLE = "DELETE_CONDITION_VARIABLE"
export const GET_VARIABLEITEM_INFO_REQUEST_OPTION = "GET_VARIABLEITEM_INFO_REQUEST_OPTION";
export const GET_VARIABLEITEM_INFO_SUCCESS_OPTION = "GET_VARIABLEITEM_INFO_SUCCESS_OPTION";
export const GET_VARIABLEITEM_INFO_FAIL_OPTION = "GET_VARIABLEITEM_INFO_FAIL_OPTION";

const testTemp = [
    {"variable":"变量1", "weight":0.5,"conditions":
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":1},{"logic":"&&","sign":"<=","value":70}
                ]
            },
            {"score":200,"condition":
                [
                    {"sign":"<","value":2}
                ]
            },
            {"score":300,"condition":
                [
                    {"sign":">","value":3}
                ]
            }
        ]
    },
    {"variable":"变量2", "weight":0.5,"conditions":
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":4},{"logic":"&&","sign":"<=","value":60}
                ]
            },
            {"score":200,"condition":
                [
                    {"sign":"<","value":5}
                ]
            },
            {"score":300,"condition":
                [
                    {"sign":">","value":6}
                ]
            }
        ]
    },
    {"variable":"变量3", "weight":0.5,"conditions":
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":7},{"logic":"&&","sign":"<=","value":20}
                ]
            }
        ]
    }
];
const testTemp1 =
    [
    {"variable":"变量1", "weight":0.5,"conditions":
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":1},{"logic":"&&","sign":"<=","value":70}
                ]
            },
            {"score":200,"condition":
                [
                    {"sign":"<","value":2}
                ]
            },
            {"score":300,"condition":
                [
                    {"sign":">","value":3}
                ]
            }
        ]
    },
    {"variable":"变量2", "weight":0.5,"conditions":
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":4},{"logic":"&&","sign":"<=","value":60}
                ]
            },
            {"score":200,"condition":
                [
                    {"sign":"<","value":5}
                ]
            },
        ]
    },
    {"variable":"变量3", "weight":0.5,"conditions":
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":7},{"logic":"&&","sign":"<=","value":20}
                ]
            }
        ]
    }
];



export function setKeyNum(testTemp) {
    return {
        type: SET_KEYNUM,
        testTemp:testTemp,
    }
}
export function setKeyNum1(testTemp) {
    return {
        type: SET_KEYNUM1,
        testTemp:testTemp,
    }
}
export function setDataSource1(testTemp) {
    return {
        type: SET_DATASOURCE1,
        testTemp:testTemp,
    }
}
export function setDataSource2(testTemp) {
    return {
        type: SET_DATASOURCE2,
        testTemp:testTemp,
    }
}
export function addVariable() {
    return {
        type: ADD_GRADE_VARIABLE,
        testTemp:testTemp,
    }
}
export function deleteVariable(indexTemp) {
    return {
        type: DELETE_GRADE_VARIABLE,
        indexTemp:indexTemp,
        testTemp:testTemp,
    }
}
export function addCondition(indexTemp) {
    return {
        type: ADD_CONDITION_VARIABLE,
        testTemp:testTemp,
        indexTemp:indexTemp
    }
}
export function deleteCondition(indexTemp) {

    return {
        type: DELETE_CONDITION_VARIABLE,
        indexTemp:indexTemp,
        testTemp:testTemp,
    }
}
export function getGradeDataTemp(nodes) {
    return {
        type: GET_GRADE_DATA_TEMP,
        testTemp:'',
        testTemp1:nodes
    }
}
export function getGradeData(values) {
    return {
        types: [GET_GRADE_DATA_REQUEST, GET_GRADE_DATA_SUCCESS, GET_GRADE_DATA_FAIL],
        promise: client => client.post(URL+'/login',{
            username: '',
            password: ''
        }),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.status==='success'){
            }
        }
    }
}

export function addGradeData(params) {
    return {
        types: [ADD_GRADE_DATA_REQUEST, ADD_GRADE_DATA_SUCCESS, ADD_GRADE_DATA_FAIL],
        promise: client => client.post(URL+'/rule/scoreCard/update',params),
        afterSuccess:(dispatch,getState,response)=>{
            if(response.data.success===true){
                message.info("保存成功");
            }else {
                message.info(response.data.msg);
            }
        },
    }
}
export function getVariableItemInfoCell(params) {
    return {
        types: [GET_VARIABLEITEM_INFO_REQUEST_OPTION, GET_VARIABLEITEM_INFO_SUCCESS_OPTION, GET_VARIABLEITEM_INFO_FAIL_OPTION],
        promise: client => client.get(URL+'/rule/variable/queryVariables',{
            params: params
        }),
        afterSuccess:(dispatch,getState,response)=>{
        },
    }
}

