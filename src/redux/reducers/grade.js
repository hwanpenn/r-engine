import {GET_GRADE_DATA_REQUEST,GET_GRADE_DATA_SUCCESS,GET_GRADE_DATA_FAIL,GET_GRADE_DATA_TEMP} from 'actions/grade';
import {ADD_GRADE_DATA_REQUEST,ADD_GRADE_DATA_SUCCESS,ADD_GRADE_DATA_FAIL} from 'actions/grade';
import {DELETE_GRADE_VARIABLE,ADD_GRADE_VARIABLE} from 'actions/grade';
import {DELETE_CONDITION_VARIABLE,ADD_CONDITION_VARIABLE} from 'actions/grade';
import {SET_DATASOURCE1,SET_DATASOURCE2} from 'actions/grade';
import {SET_KEYNUM,SET_KEYNUM1} from 'actions/grade';
import {GET_VARIABLEITEM_INFO_REQUEST_OPTION, GET_VARIABLEITEM_INFO_SUCCESS_OPTION, GET_VARIABLEITEM_INFO_FAIL_OPTION} from 'actions/grade';
import React, {Component} from 'react';
import { Row, Col,Icon } from 'antd';
import { Input  } from 'antd';
import { Select } from 'antd';
/*
* 初始化state
 */
const testTemp1 = {
    "variable":["变量1","变量2","变量3"],
    "weight":[0.5,0.5,0.5],
    "score":[100,100,100,100,100,100,100],
    "condition":[
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":30},{"logic":"&&","sign":"<=","value":60}
                ]
            },
            {"score":200,"condition":
                [
                    {"sign":"<","value":30}
                ]
            },
            {"score":300,"condition":
                [
                    {"sign":">","value":60}
                ]
            }
        ],
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":30},{"logic":"&&","sign":"<=","value":60}
                ]
            },
            {"score":200,"condition":
                [
                    {"sign":"<","value":30}
                ]
            },
            {"score":300,"condition":
                [
                    {"sign":">","value":60}
                ]
            }
        ],
        [
            {"score":100,"condition":
                [
                    {"sign":">=","value":10},{"logic":"&&","sign":"<=","value":20}
                ]
            }
        ]
    ]
}
const initState = {
    isLoading:'',
    errorMsg:'',
    testTemp : [],
    testTemp1 : [],
    testTemp11 : [],
    columnsTemp:[],
    columns:[],
    keyNum: 0,
    keyNum1: 0,
    dataSource1:[],
    dataSource2:[],
    variableNames:''
};

const baseTempNew1 = {"variable":"", "weight":"","conditions":
    [
        {"score":0,"condition":
            [
                {"sign":"","value":""},{"logic":"","sign":"","value":""}
            ]
        }
    ]
};
const baseCondition = {"score":"","condition":
    [
        {"sign":"","value":""},{"logic":"","sign":"","value":""}
    ]
};
/*
* reducer
 */

function changeData(testTemp){
    const columnsTemp = [];
    let keyTemp = 0;
    let keyTemp1 = 0;
    testTemp.map((variable) =>{
        let variableBm = variable.variable;
        let variableName = variable.variableName;
        let weightNum = variable.weight;
        let conditions = variable.conditions;
        conditions.map((condition) =>{

            let conditionTexts = condition.condition;
            let conditionValue = [];
            let scoreText = condition.score;
            conditionTexts.map((item) =>{
                if(item.logic===''||item.logic===null||item.logic===undefined){
                    conditionValue.push({
                        sign: item.sign,
                        value: item.value,
                    })
                }else {
                    conditionValue.push({
                        sign: item.sign,
                        value: item.value,
                        logic: item.logic,
                    })
                }
            });
            columnsTemp.push({
                key:keyTemp1,
                key1:keyTemp,
                variable: variableBm,
                variableName: variableName,
                weight: weightNum,
                score: scoreText,
                conditions: conditionValue,
            })
            keyTemp1++
        });
        keyTemp++
    });
    return columnsTemp;
}
function changeData3(testTemp){
    let i=0;
    const end = testTemp.length;
    let result = [];
    let keyTemp =testTemp[0].key1;
    let startIndex = 0;
    testTemp.map((item,index)=>{
        if(index===0){
            result.push({"variable":item.variable,"variableName":item.variableName,"weight":item.weight,
                "conditions":[{"score":item.score,"condition":item.conditions}]}) ;

        }else {
            if(item.key1===keyTemp){
                result[startIndex].conditions.push({"score":item.score,"condition":item.conditions})
            }else{
                result.push({"variable":item.variable,"variableName":item.variableName,"weight":item.weight,"conditions":[{"score":item.score,"condition":item.conditions}]}) ;
                keyTemp=item.key1;
                startIndex++;
            }

        }
    })
    return result;
}
function changeData1(indexTemp,testTemp) {
    let valueTemp = 0 ;
    let tempCount = 0 ;
    testTemp.map((variable,index) =>{


        if(tempCount===indexTemp){
            valueTemp = index;
        }
        tempCount += variable.conditions.length;


    });
    return valueTemp;
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_GRADE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
            case ADD_GRADE_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
                testTemp11 : action.result.data
            };
            case ADD_GRADE_DATA_FAIL:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
            case GET_VARIABLEITEM_INFO_REQUEST_OPTION:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
            case GET_VARIABLEITEM_INFO_SUCCESS_OPTION:
                const variableLiTemp =  action.result.data.resultList;
                const children11 = [];
                variableLiTemp.map((lib,index)=>{
                    children11.push(<Select.Option value={lib.bm}> {lib.mc} </Select.Option>);
                });
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
                childrenCell:children11,
                variableNames:variableLiTemp
            };
            case GET_VARIABLEITEM_INFO_FAIL_OPTION:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
            case GET_GRADE_DATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                msg:'请求中',
            };
            case GET_GRADE_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                msg:'请求成功',
                testTemp : action.result.data
            };
            case GET_GRADE_DATA_FAIL:
            return {
                ...state,
                isLoading:false,
                msg:'请求失败',
            };
            case DELETE_GRADE_VARIABLE:
                let testTempNew1 = state.testTemp;

                const indexValue = changeData1(action.indexTemp,testTempNew1);
                testTempNew1.splice(indexValue,1);
                let columnsTempDelete =  changeData(testTempNew1);
            return {
                ...state,
                columnsTemp:columnsTempDelete,
                testTemp:testTempNew1,
            };
            case ADD_GRADE_VARIABLE:
                let testTempNew = state.testTemp;
                testTempNew.push(baseTempNew1);
                let columnsTempAdd =  changeData(testTempNew);
            return {
                ...state,
                columnsTemp:columnsTempAdd,
                testTemp:testTempNew,
            };
            case DELETE_CONDITION_VARIABLE:
            return {
                ...state,
            };
            case SET_KEYNUM:
            return {
                ...state,
                keyNum:action.testTemp
            };
            case SET_KEYNUM1:
            return {
                ...state,
                keyNum1:action.testTemp
            };
            case SET_DATASOURCE1:
            return {
                ...state,
                dataSource1:action.testTemp
            };
            case SET_DATASOURCE2:
            return {
                ...state,
                dataSource2:action.testTemp
            };
            case ADD_CONDITION_VARIABLE:
                let testTempNew2 = state.testTemp;

                testTempNew2[action.indexTemp].conditions.push(baseCondition);
                let columnsTempAdd2 =  changeData(testTempNew2);
            return {
                ...state,
                columnsTemp:columnsTempAdd2
            };
        case GET_GRADE_DATA_TEMP:
                let testTemp11 = action.testTemp1;
                let testTemp1 = [];
                if(testTemp11.length===0){
                }else {
                    testTemp1 = JSON.parse(testTemp11);
                }

            let columnsTempAdd3 =  changeData(testTemp1);
            let keyTemp1 = 0;
            let keyTemp = 0;
            if(testTemp1.length!==0){
                 keyTemp1 = columnsTempAdd3[columnsTempAdd3.length-1].key1;
                 keyTemp = columnsTempAdd3[columnsTempAdd3.length-1].key;
            }
            return {
                ...state,
                columnsTemp:columnsTempAdd3,
                testTemp1:testTemp1,
                dataSource1:columnsTempAdd3,
                dataSource2:testTemp1,
                keyNum1: keyTemp1,
                keyNum: keyTemp,
            };
        default:
            return state
    }
}