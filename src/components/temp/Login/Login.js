import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import  {withRouter}  from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo,receiveData} from "actions/userInfo";
import {getInfo} from "actions/getInfo";
import {withRouter} from "react-router-dom";
// import { Router, browserHistory } from 'react-router'
// import routes from './app/routes'
import { bindActionCreators } from 'redux';
// import { fetchData, receiveData } from '@/action';
// import * as testActions from 'actions/index';
import axios from 'axios';
import {URL} from 'config/config';
import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
const FormItem = Form.Item;


class NormalLoginForm extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     filterText: '',
        //     inStockOnly: false
        // };
        console.log('这里是测试：----constructor')
    }
    componentWillMount() {
        console.log('这里是测试：----componentWillMount')
        // const { receiveData } = this.props;
        // receiveData(null);
        // console.log('componentWillMount ', values.username);
        // console.log('componentWillMount ');
    }
    componentDidMount() {
        // console.log('componentDidMount ');
        console.log('这里是测试：----componentDidMount')
    }
    componentWillReceiveProps(nextProps) {
        // prevState上一个状态值  nextProps下一个属性值
        // const { auth: nextAuth = {} } = nextProps;
        // const { router } = this.props;
        // if (nextAuth.data) {   // 判断是否登陆
        //     localStorage.setItem('user', JSON.stringify(nextAuth.data));
            // webStorage.setItem('user', JSON.stringify(nextAuth.data));
            // sessionStorage.setItem('user', JSON.stringify(nextAuth.data));
            // const token = sessionStorage.getItem('token')
            // router.push('/');
        // }
        console.log('这里是测试：----componentWillReceiveProps')
    }
    componentWillUnmount () {
        console.log('这里是测试：----componentWillUnmount')
    }
    shouldComponentUpdate () {
        console.log('这里是测试：----shouldComponentUpdate')
    }
    componentWillUpdate (prevProps) {
        console.log('这里是测试：----componentWillUpdate')
    }
    componentDidUpdate (prevProps) {
        console.log('这里是测试：----componentDidUpdate')
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // this.props.history.push("/");
                let myRoute = this.props.history;
                this.props.getUserInfo(values,myRoute);
                // console.log("返回状态值" +this.props.userInfo.userInfo.status);
                // console.dir(this.props);


                // console.log('Received values of form: ', values);
                // this.props.getUserInfo(values);
                // if(values.userName==='admin'&& values.password==='1234'){
                //     // console.log('1111111 ');
                //     sessionStorage.setItem('userSession', 'yes');

                // }
                // return <Redirect push to="/" />

                // axios.post(URL+'/login',{
                //     username: values.userName,
                //     password: values.password
                // })
                //     .then(function(res){
                //         console.log("ajax，fetch，axios请求成功" +values.userName+values.password);
                //         console.log("返回状态值" +res.data.status);
                //         if(res.data.status==='success'){
                //                 sessionStorage.setItem('token','token');
                //                 sessionStorage.setItem('userName',values.userName);
                //                 // this.props.history.push("/");
                //             // return (<Redirect to="/"/>)
                //         }
                //     })
                //     .catch(function(err){
                //         console.log('异常'+err);
                //     });

                // console.log('1111'+this.props.userInfo.userInfo.status);
                // if(this.props.userInfo.userInfo.status==='success'){
                //     sessionStorage.setItem('token','token');
                //     sessionStorage.setItem('userName',values.userName);
                //     this.props.history.push("/");
                // }

                // (values) => getUserInfo();
                // (values) =>this.props.getUserInfo();
                // const { fetchData } = this.props;
                // if (values.userName === 'admin' && values.password === 'admin') fetchData({funcName: 'admin', stateName: 'auth'});
                // if (values.userName === 'guest' && values.password === 'guest') fetchData({funcName: 'guest', stateName: 'auth'});

                // this.props.push('/');
                // console.log('---------------'+values.username+values.password);
                // const userSession = sessionStorage.getItem('userSession');
                // if(userSession===null||userSession===undefined||userSession===''){
                //     console.log("session里没有用户信息");
                //     if(values.userName==='admin'&& values.password==='1234'){
                //         // console.log('1111111 ');
                //         sessionStorage.setItem('userSession', 'yes');
                //         this.props.history.push("/");
                //     }
                // }else {
                //     // alert('已经登录过了');
                //     console.log("session里有用户信息")
                // }

            }
            // console.log(this.props.userInfo.userInfo.status);
        });
    };

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.load !== this.props.load) {
    //         if (this._isMounted) {
    //             this.load(nextProps)
    //         }
    //     }
    // }



    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{ marginLeft: '41%' ,marginTop: '16%'}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" onClick={()=>{alert('有问题找刘波波!')}}>有问题？</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    {/*Or <a href="">register now!</a>*/}
                </FormItem>
                {/*<p>请求状态：{this.props.userInfo.userInfo.status}</p>*/}
                {/*<p>返回信息：{this.props.userInfo.userInfo.msg}</p>*/}
                {/*<p>请求信息：{this.props.userInfo.msg}</p>*/}
                {/*<button onClick={() => this.props.getUserInfo()}>请求用户信息</button>*/}
            </Form>
        );
    }
}
const Login = Form.create()(NormalLoginForm);
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(Login);




const mapStateToProps = (state) => {

    return {
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (values,myRoute) => {
            dispatch(getUserInfo(values,myRoute))
        }
    }
};

const LoginTemp = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(LoginTemp);






