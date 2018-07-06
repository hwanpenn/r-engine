import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
import {withRouter} from "react-router-dom";
import { Route, Switch, Link,Redirect} from 'react-router-dom';
import { message } from 'antd';
message.config({
    duration: 1,
});

const FormItem = Form.Item;


class NormalLoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let myRoute = this.props.history;

                this.props.getUserInfo(values,myRoute);
            }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{ marginLeft: '41%' ,marginTop: '16%'}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
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
                    <a className="login-form-forgot" onClick={()=>{message.info('有问题找刘波')}}>有问题？</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const Login = Form.create()(NormalLoginForm);
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






