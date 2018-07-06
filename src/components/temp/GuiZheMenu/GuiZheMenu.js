import React, {Component} from 'react';
import {getUserInfo} from "actions/userInfo";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
import SearchNew from "components/temp/Search/Search";
import MyTree from "components/temp/MyTree/MyTree";
import Clk from "components/temp/Clk/Clk";
import Jiaoben from "components/temp/Jiaoben/Jiaoben";
import Jueceji from "components/temp/Jueceji/Jueceji";
import {getProjectInfo} from "actions/projectInfo";
// import {connect} from 'react-redux';
// import Grade from "components/Grade/Grade";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Input } from 'antd';
import MyTable from "components/temp/Mytable/MyTable";
import Pfk from "components/temp/Pfk/Pfk";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// const Search = Input.Search;

class GuiZheMenu extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('测试测试： '+this.props.borderRight);
        // console.log('测试获取props ');
        // console.dir(this.props.borderRight);
        let par = {id : '123'};
        this.props.getProjectInfo(par);
    }

    render() {
        // let projectArray1 = [1,2,3];
        // const projectArray = this.props.projectInfo.resInfo.resultList;
        // projectArray1.map(function(item){
        //     console.dir('1212');
        // });
        // console.dir(projectArray);
        // const SubMenuTemp = projectArray.map(function(project){
        //     return <SubMenu key="sub1" title={<span><Icon type="user" />项目 1{project.name}</span>}>
        //             <SubMenu key="childSub1" title={<span><Icon type="laptop" />库</span>}>
        //                 <Menu.Item key="1" ><Link to="/rule/home/guiz/ku/clk">常量库</Link></Menu.Item>
        //                 {/*<Menu.Item key="2">option6</Menu.Item>*/}
        //                 {/*<Menu.Item key="3">option7</Menu.Item>*/}
        //                 {/*<Menu.Item key="4">option8</Menu.Item>*/}
        //             </SubMenu>
        //             <SubMenu key="childSub2" title={<span><Icon type="setting" />项目资源</span>}>
        //                 <Menu.Item key="5" ><Link to="/rule/home/guiz/xmzy/jiaoeben">脚本</Link></Menu.Item>
        //                 <Menu.Item key="6" ><Link to="/rule/home/guiz/xmzy/jueceji">决策集</Link></Menu.Item>
        //                 <Menu.Item key="7" ><Link to="/rule/home/guiz/xmzy/pfk">评分卡</Link></Menu.Item>
        //                 {/*<Menu.Item key="8">option8</Menu.Item>*/}
        //             </SubMenu>
        //             {/*<Menu.Item key="1">库</Menu.Item>*/}
        //             {/*<Menu.Item key="2">项目资源</Menu.Item>*/}
        //             {/*<Menu.Item key="3">option3</Menu.Item>*/}
        //             {/*<Menu.Item key="4">option4</Menu.Item>*/}
        //         </SubMenu>
        // })  ;
        // console.log('测试获取props '+this.props.projectInfo.errorMsg);
        // const SubMenuTemp = this.props.projectInfo.resInfo.prototype.map((project) =>
        //     <SubMenu key="sub1" title={<span><Icon type="user" />项目 1{project.name}</span>}>
        //         <SubMenu key="childSub1" title={<span><Icon type="laptop" />库</span>}>
        //             <Menu.Item key="1" ><Link to="/rule/home/guiz/ku/clk">常量库</Link></Menu.Item>
        //             {/*<Menu.Item key="2">option6</Menu.Item>*/}
        //             {/*<Menu.Item key="3">option7</Menu.Item>*/}
        //             {/*<Menu.Item key="4">option8</Menu.Item>*/}
        //         </SubMenu>
        //         <SubMenu key="childSub2" title={<span><Icon type="setting" />项目资源</span>}>
        //             <Menu.Item key="5" ><Link to="/rule/home/guiz/xmzy/jiaoeben">脚本</Link></Menu.Item>
        //             <Menu.Item key="6" ><Link to="/rule/home/guiz/xmzy/jueceji">决策集</Link></Menu.Item>
        //             <Menu.Item key="7" ><Link to="/rule/home/guiz/xmzy/pfk">评分卡</Link></Menu.Item>
        //             {/*<Menu.Item key="8">option8</Menu.Item>*/}
        //         </SubMenu>
        //         {/*<Menu.Item key="1">库</Menu.Item>*/}
        //         {/*<Menu.Item key="2">项目资源</Menu.Item>*/}
        //         {/*<Menu.Item key="3">option3</Menu.Item>*/}
        //         {/*<Menu.Item key="4">option4</Menu.Item>*/}
        //     </SubMenu>
        // );
        return (
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SearchNew/>
                        {/*{SubMenuTemp}*/}
                        <SubMenu key="sub1" title={<span><Icon type="user" />项目 1{}</span>}>
                            <SubMenu key="childSub1" title={<span><Icon type="laptop" />库</span>}>
                                <Menu.Item key="1" ><Link to="/rule/home/guiz/ku/clk">常量库</Link></Menu.Item>
                                {/*<Menu.Item key="2">option6</Menu.Item>*/}
                                {/*<Menu.Item key="3">option7</Menu.Item>*/}
                                {/*<Menu.Item key="4">option8</Menu.Item>*/}
                            </SubMenu>
                            <SubMenu key="childSub2" title={<span><Icon type="setting" />项目资源</span>}>
                                <Menu.Item key="5" ><Link to="/rule/home/guiz/xmzy/jiaoeben">脚本</Link></Menu.Item>
                                <Menu.Item key="6" ><Link to="/rule/home/guiz/xmzy/jueceji">决策集</Link></Menu.Item>
                                <Menu.Item key="7" ><Link to="/rule/home/guiz/xmzy/pfk">评分卡</Link></Menu.Item>
                                {/*<Menu.Item key="8">option8</Menu.Item>*/}
                            </SubMenu>
                            {/*<Menu.Item key="1">库</Menu.Item>*/}
                            {/*<Menu.Item key="2">项目资源</Menu.Item>*/}
                            {/*<Menu.Item key="3">option3</Menu.Item>*/}
                            {/*<Menu.Item key="4">option4</Menu.Item>*/}
                        </SubMenu>
                        {
                            // projectArray.map(function(item){
                            //     return <li>{item.name}</li>
                            // })
                            // projectArray.map(function (item, i) {
                            //                    return (
                            //                         <li>
                            //                             <label>{item.name}</label>
                            //                         </li>
                            //                    );
                            //                  })
                        }
                        <SubMenu key="sub2" title={<span><Icon type="notification" />项目 2</span>}>
                            <SubMenu key="childSub1" title={<span><Icon type="laptop" />库</span>}>
                                <Menu.Item key="1">常量库</Menu.Item>
                                {/*<Menu.Item key="2">option6</Menu.Item>*/}
                                {/*<Menu.Item key="3">option7</Menu.Item>*/}
                                {/*<Menu.Item key="4">option8</Menu.Item>*/}
                            </SubMenu>
                            <SubMenu key="childSub2" title={<span><Icon type="setting" />项目资源</span>}>
                                <Menu.Item key="5">脚本</Menu.Item>
                                <Menu.Item key="6">决策集</Menu.Item>
                                <Menu.Item key="7">评分卡</Menu.Item>
                                {/*<Menu.Item key="8">option8</Menu.Item>*/}
                            </SubMenu>
                        </SubMenu>
                        {/*{SubMenuTemp}*/}
                    </Menu>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        projectInfo: state.projectInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProjectInfo: (params) => {
            dispatch(getProjectInfo(params))
        }
    }
};

const GuiZheMenuTemp = connect(mapStateToProps, mapDispatchToProps)(GuiZheMenu);
export default GuiZheMenuTemp;
// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(LeftSide);