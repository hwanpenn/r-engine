import Mock from 'mockjs';
import {URL} from 'config/config';

let Random = Mock.Random;

Mock.mock(URL+'/api/user', {
    'name': '@cname',
    'intro': '@word(20)'
});
Mock.mock(URL+'/login', {"status":"success","role":"管理员","userid":1,"name":"璐璐"});
Mock.mock(URL+'/logout', {
    'msg': '退出成功---@cname'
});
Mock.mock(URL+'/userOrRule/addUserOrRole', {
    'success': true,
    'msg': '获取成功---@word(20)'
});
Mock.mock(URL+'/rule/userOrRule/addUserOrRole', {
    'success': true,
    'msg': '添加---@word(20)'
});
Mock.mock(URL+'/rule/userOrRule/setUserOrRole', {
    'success': true,
    'msg': '设置---@word(20)'
});
Mock.mock(URL+'/rule/userOrRule/ updateUserOrRole', {
    'success': true,
    'msg': '更新---@word(20)'
});
Mock.mock(URL+'/rule/userOrRule/getUsers', {
    'success': true,
    'totalcount': 200,
    'resultList':  [{
        "userId": 1,
        "roleId": 111,
        "caption": "用户",
        "rolename": '角色1'
    },{
        "userId": 2,
        "roleId": 222,
        "caption": "管理员",
        "rolename": '角色2'
    }]
});
Mock.mock(URL+'/rule/userOrRule/getRoles', {
    'success': true,
    'totalcount': 22,
    'resultList':  [{
        "id": 1,
        "name": '角色1'
    },{
        "id": 2,
        "name": '角色2'
    }]
});
Mock.mock(URL+'/rule/project/getproject', {"success":true,"totalcount":0,"resultList":[{"id":"2","name":"项目2"},{"id":"1","name":"项目1"},{"id":"3","name":"测试项目"}]});
Mock.mock(URL+'/rule/variable/queryVariableProjects?mc=&start=1&size=5&projectId=2',
    {"success":true,"totalcount":1,"resultList":[{"id":"986063763767558144","mc":"个人信用","projectId":2}]});
Mock.mock(URL+'/rule/variable/queryVariables?mc=&key=986063763767558144&start=1&size=5',
    {"success":true,"totalcount":9,"resultList":[{"id":"986064662149726208","key":"986063763767558144","bm":"age","mc":"年龄","type":"Integer"},{"id":"986064663663869952","key":"986063763767558144","bm":"birthday","mc":"出生日期","type":"Date"},{"id":"986064663689035776","key":"986063763767558144","bm":"car","mc":"是否有车","type":"Boolean"},{"id":"986064663697424384","key":"986063763767558144","bm":"gender","mc":"性别","type":"Boolean"},{"id":"986064663701618688","key":"986063763767558144","bm":"house","mc":"是否有房","type":"Boolean"}]});
Mock.mock(URL+'/rule/userOrRule/getUsers?username=&start=1&size=5', {"success":true,"totalcount":4,"resultList":[{"userId":1,"roleId":1,"caption":"璐璐","roleName":"管理员"},{"userId":2,"roleId":1,"caption":"妖姬","roleName":"管理员"},{"userId":3,"roleId":2,"caption":"刘伯伯1","roleName":"普通用户"},{"userId":4,"roleId":null,"caption":"卡牌","roleName":null}]});
Mock.mock(URL+'/rule/userOrRule/getRoles?name=&start=1&size=5', {"success":true,"totalcount":3,"resultList":[{"id":5,"name":"超级用户"},{"id":1,"name":"管理员"},{"id":2,"name":"普通用户"}]});
Mock.mock(URL+'/rule/scoreCard/queryScoreCards?mc=&projectId=2&start=1&size', {"success":false,"totalcount":0,"resultList":[{"name":"常量库7788","description":"描述78","nodes":null,"projectid":"2","key":"7788","modelid":"986782440305459200","variableProjectId":"986063763767558144","variableProjectName":"个人信用","weight":false},{"name":"个人信用","description":"个人信用","nodes":"[{\"variable\":\"age\",\"variableName\":\"年龄\",\"weight\":0.5,\"conditions\":[{\"score\":\"20\",\"condition\":[{\"sign\":\">\",\"value\":\"10\"}]},{\"score\":\"10\",\"condition\":[{\"sign\":\"<\",\"value\":\"5\"}]}]},{\"variable\":\"gender\",\"variableName\":\"性别\",\"weight\":0.5,\"conditions\":[{\"score\":\"30\",\"condition\":[{\"sign\":\"==\",\"value\":\"2\"}]},{\"score\":\"40\",\"condition\":[{\"sign\":\"==\",\"value\":\"1\"}]}]}]    ","projectid":"2","key":"person_card","modelid":"984675246487371776","variableProjectId":"984611019315740672","variableProjectName":null,"weight":false},{"name":"评分等级","description":"评分等级","nodes":null,"projectid":"2","key":"scoreCadr2","modelid":"984687641163202560","variableProjectId":"984611019315740672","variableProjectName":null,"weight":false}]});
Mock.mock(URL+'/rule/project/getPorjectNumber', {
    'success': 'true',
    'resultMap': {'porjectNumber':'123'}
});
Mock.mock(URL+'/rule/project/add', {
    'success': 'true',
    'msg': '添加成功'
});
Mock.mock(URL+'/rule/project/update', {
    'success': 'true',
    'msg': '修改成功'
});
Mock.mock(URL+'/rule/project/del', {
    'success': 'true',
    'msg': '删除成功'
});
Mock.mock(URL+'/rule/variable/addVariableProject', {
    'success': true,
    'msg': '库增加成功'
});
Mock.mock(URL+'/rule/variable/updateVariableProject', {
    'success': true,
    'msg': '库修改成功'
});
Mock.mock(URL+'/rule/variable/deleteVariableProject', {
    'success': true,
    'msg': '库删除成功'
});
Mock.mock(URL+'/rule/variable/queryVariableProjects?mc=&projectId=123&start=1&size=5', {
    'success': 'true',
    'totalcount': 3,
    'resultList':[{
        "id": 957833715084427264,
        "mc": "测试变量项目2",
        "projectId": 1
    },{
        "id": 957833715084427264,
        "mc": "测试变量项目2",
        "projectId": 1
    },{
        "id": 957833715084427264,
        "mc": "测试变量项目2",
        "projectId": 1
    }]
});
Mock.mock(URL+'/rule/variable/{variableId}/importXml', {
    'success': 'true',
    'msg': '批量导入成功'
});
Mock.mock(URL+'/rule/variable/addVariable', {
    'success': 'true',
    'msg': '变量增加成功'
});
Mock.mock(URL+'/rule/variable/updateVariable', {
    'success': 'true',
    'msg': '变量修改成功'
});
Mock.mock(URL+'/rule/variable/deleteVariable', {
    'success': 'true',
    'msg': '变量删除成功'
});
Mock.mock(URL+'/rule/variable/queryVariables?mc=%E6%B5%8B%E8%AF%95%E5%8F%98%E9%87%8F%E9%A1%B9%E7%9B%AE2&key=957833715084427300&start=1&size=5', {
    'success': 'true',
    'totalcount': 77,
    'resultList':[{
        "id": 957852859200700416,
        "key": "957841809382309888",
        "bm": "birtyday",
        "mc": "出生日期",
        "type": "Date"
    },{
        "id": 957852859200700416,
        "key": "957841809382309888",
        "bm": "birtyday",
        "mc": "出生日期",
        "type": "Date"
    },{
        "id": 957852859200700416,
        "key": "957841809382309888",
        "bm": "birtyday",
        "mc": "出生日期",
        "type": "Date"
    },{
        "id": 957852859200700416,
        "key": "957841809382309888",
        "bm": "birtyday",
        "mc": "出生日期",
        "type": "Date"
    },{
        "id": 957852859200700416,
        "key": "957841809382309888",
        "bm": "birtyday",
        "mc": "出生日期",
        "type": "Date"
    }]
});
Mock.mock('/api/user1', {
    "array|5": [
        {
            "key|+1": 1,
            name: '@word(8)',
            time: '@date',
            user: '@cname',
        }
    ]
});

Mock.mock(URL+'/rule/grade/addVariableProject', {
    'success': 'true',
    'msg': '评分卡增加成功'
});
Mock.mock(URL+'/rule/grade/updateVariableProject', {
    'success': 'true',
    'msg': '评分卡修改成功'
});
Mock.mock(URL+'/rule/grade/deleteVariableProject', {
    'success': 'true',
    'msg': '评分卡删除成功'
});
Mock.mock(URL+'/rule/grade/queryVariableProjects', {
    'success': 'true',
    'totalcount': 3,
    'resultList':[{
        key: '1',
        id: '1',
        name: 'card-demo.sc',
        time: '2017-12-29 15:36',
        user: '刘波波',
        isOrNot:false
    }, {
        key: '2',
        id: '1',
        name: 'card-demo.sc',
        time: '2017-12-29 15:36',
        user: '刘波波',
        isOrNot:false
    }, {
        key: '3',
        id: '1',
        name: 'card-demo.sc',
        time: '2017-12-29 15:36',
        user: '刘波波',
        isOrNot:true
    }]
});
Mock.mock(URL+'/rule/decision/addVariableProject', {
    'success': 'true',
    'msg': '决策集增加成功'
});
Mock.mock(URL+'/rule/decision/updateVariableProject', {
    'success': 'true',
    'msg': '决策集修改成功'
});
Mock.mock(URL+'/rule/decision/deleteVariableProject', {
    'success': 'true',
    'msg': '决策集删除成功'
});
Mock.mock(URL+'/rule/decision/queryVariableProjects', {
    'success': 'true',
    'totalcount': 3,
    'resultList':[{
        key: '1',
        id: '1',
        name: 'hwanpenn.js',
        time: '9999-99-99 99:99',
        user: '刘波波',
        isOrNot:false
    }, {
        key: '2',
        id: '1',
        name: 'hwanpenn.js',
        time: '9999-99-99 99:99',
        user: '刘波波',
        isOrNot:false
    }, {
        key: '3',
        id: '1',
        name: 'hwanpenn.js',
        time: '9999-99-99 99:99',
        user: '刘波波',
        isOrNot:true
    }]
});
Mock.mock(URL+'/rule/decision/jihuo', {
    'success': 'true',
    'msg': '激活成功'
});
Mock.mock(URL+'/rule/decision/zantin', {
    'success': 'true',
    'msg': '暂停成功'
});
Mock.mock(URL+'/rule/grade/activate', {
    'success': 'true',
    'msg': '激活成功'
});
Mock.mock(URL+'/rule/grade/stop', {
    'success': 'true',
    'msg': '暂停成功'
});