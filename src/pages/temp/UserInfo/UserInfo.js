import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
import Header from 'components/temp/Header/Header';
import {withRouter} from "react-router-dom";
// import { BrowserRouter  } from 'react-router-dom';
// import { browserHistory } from 'react-router';
// import  hashHistory from 'react-router';
// import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
// browserHistory.push('/some/path')
// import Grade from 'components/Grade/Grade';

const logOut = () => {
    // this.props.history.push("/rule/home");
    // sessionStorage.removeItem('usercode')
    // sessionStorage.removeItem('userpwd')
    // sessionStorage.removeItem('token')
    // sessionStorage.removeItem('userid')
    // sessionStorage.removeItem('divisionid')
    // sessionStorage.removeItem('userinfo')
    // sessionStorage.removeItem('tabList')
    // sessionStorage.removeItem('alarmCall')
    // hashHistory.push('/')
    // BrowserRouter.push('/')
    // BrowserRouter.push('/')
}

class UserInfo extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // let params = {
        //     id: 23
        // }
        // this.props.postTest(params) //发送post请求
        //
        // let id = 23
        // this.props.getTest(id) //发送get请求
    }

    componentDidMount() {
        // this.props.getUserInfo();
        // const {userInfo, isLoading, msg} = this.props.userInfo;
        // console.log('UserInfo---DidMount：'+this.props.userInfo.userInfo.statuss);
        // console.log('Grade---DidMount：'+JSON.stringify(this.props.userInfo1.userInfo.array));
    }

    render() {
        // const {userInfo, isLoading, msg} = this.props.userInfo;
        console.log('UserInfo---render：'+this.props.userInfo.name);
        // console.log('Grade---render：'+JSON.stringify(this.props.userInfo1.userInfo.array));

        return (
            <div>
                <Header/>
                {
                    this.props.userInfo.isLoading ? '请求信息中......' :
                        (
                            this.props.userInfo.msg ? this.props.userInfo.msg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{this.props.userInfo.userInfo.name}</p>
                                    <p>介绍：{this.props.userInfo.userInfo.intro}</p>
                                    {/*<p>请求状态：{this.props.userInfo.status}</p>*/}
                                    <p>请求信息：{this.props.userInfo.msg}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
                <button onClick={() => logOut()}>跳转</button>
                <p>请求状态：{this.props.userInfo.userInfo.status}</p>
                <p>请求信息：{this.props.userInfo.msg}</p>
                {/*<Grade/>*/}
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);




