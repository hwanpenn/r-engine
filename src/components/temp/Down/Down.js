import React, {Component} from 'react';
import {getUserInfo} from "actions/userInfo";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
import SearchNew from "components/temp/Search/Search";
import MyTree from "components/temp/MyTree/MyTree";
import Clk from "components/temp/Clk/Clk";
import Jiaoben from "components/temp/Jiaoben/Jiaoben";
import Jueceji from "components/temp/Jueceji/Jueceji";
// import Grade from "components/Grade/Grade";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Input } from 'antd';
import MyTable from "components/temp/Mytable/MyTable";
import MyTable1 from "components/temp/Mytable1/MyTable1";
import GuiZheMenu from "components/temp/GuiZheMenu/GuiZheMenu";
import GuiZheMenu1 from "components/temp/GuiZheMenu1/GuiZheMenu1";
import Pfk from "components/temp/Pfk/Pfk";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import Quanxian from "components/temp/Quanxian/Quanxian";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import RigthSide from "components/temp/Down/RightSide/RightSide";

// const Search = Input.Search;

class Down extends Component {
    // componentDidMount() {
    //     // console.log('componentDidMount ');
    //         axios.get(URL+'rule/porjecr/getPorject',{
    //             username: values.userName,
    //             password: values.password
    //         })
    //         .then(function(res){
    //             console.log("ajax，fetch，axios请求成功" +values.userName+values.password);
    //             console.log("返回状态值" +res.data.status);
    //             if(res.data.status==='success'){
    //                     sessionStorage.setItem('token','token');
    //                     sessionStorage.setItem('userName',values.userName);
    //                     // this.props.history.push("/");
    //                 // return (<Redirect to="/"/>)
    //             }
    //         })
    //         .catch(function(err){
    //             console.log('异常'+err);
    //         });
    // }
    render() {
        // console.log("down渲染");
        return (
            <Layout style={{ height: 624 }}>
                <LeftSide/>
                <RigthSide/>
            </Layout>
        );
    }
}

export default Down;
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(LeftSide);