import React, {Component} from 'react';
import { Layout } from 'antd';
import Constant from "bundle-loader?lazy&name=constant!./ContentRoute/Constant/Constant";
import Script from "bundle-loader?lazy&name=Script!./ContentRoute/Script/Script";
import Decision from "bundle-loader?lazy&name=Decision!./ContentRoute/Decision/Decision";
const { Content } = Layout;
import EditableTable from "bundle-loader?lazy&name=MyTable!./ContentRoute/Mytable/MyTable1";
import MyTable1 from "bundle-loader?lazy&name=MyTable1!./ContentRoute/Mytable1/MyTable1";
import Grade from "bundle-loader?lazy&name=Grade!./ContentRoute/Grade/Grade";
import Permission from "bundle-loader?lazy&name=Permission!./ContentRoute/Permission/Permission";
import RolePermission from "bundle-loader?lazy&name=RolePermission!./ContentRoute/RolePermission/RolePermission";
import { Route, Switch, Link} from 'react-router-dom';
import { Spin } from 'antd';
import Bundle from 'router/Bundle';



const Loading = function () {
    return <div className="loading"><Spin size="large"/>Loading...</div>
};
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);
class MyContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <Switch>
                    <Route path="/rule/home/rule/library/constant"  component={createComponent(Constant)}/>
                    <Route path="/rule/home/rule/resource/script"  component={createComponent(Script)}/>
                    <Route exact path="/rule/home/rule/resource/decision"  component={createComponent(Decision)}/>
                    <Route exact path="/rule/home/rule/resource/grade"  component={createComponent(Grade)}/>
                    <Route path="/rule/home/permission/userSetting"  component={createComponent(Permission)}/>
                    <Route path="/rule/home/permission/roleSetting"  component={createComponent(RolePermission)}/>
                    <Route path="/rule/home/rule/resource/grade/item"  component={createComponent(EditableTable)}/>
                    {/*<Route path="/rule/home/rule/resource/grade/item"  component={createComponent(MyTable)}/>*/}
                    <Route path="/rule/home/rule/resource/decision/item"  component={createComponent(MyTable1)}/>
                </Switch>
            </Content>
        )
    }
}

export default MyContent;