import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import getInfo from 'reducers/getInfo';
import userInfo1 from 'reducers/userInfo1';
import projectInfo from 'reducers/projectInfo';
import headMenuState from 'reducers/headMenuState';
import menuState from 'reducers/menuState';
import permission from 'reducers/permission';
import permissionUserInfo from 'reducers/permissionUserInfo';
import permissionRole from 'reducers/permissionRole';
import permissionUserInfoRole from 'reducers/permissionUserInfoRole';
import grade from 'reducers/grade';
import decision from 'reducers/decision';
import script from 'reducers/script';
import login from 'reducers/login';
import variableItem from 'reducers/variableItem';
import variableLib from 'reducers/variableLib';
import beforeGrade from 'reducers/beforeGrade';
import beforeDecision from 'reducers/beforeDecision';
import {combineReducers} from "redux";

export default combineReducers({
    counter,
    userInfo,
    userInfo1,
    login,
    getInfo,
    projectInfo,
    headMenuState,
    menuState,
    permission,
    permissionUserInfo,
    permissionRole,
    permissionUserInfoRole,
    script,
    grade,
    decision,
    variableItem,
    variableLib,
    beforeGrade,
    beforeDecision,
});