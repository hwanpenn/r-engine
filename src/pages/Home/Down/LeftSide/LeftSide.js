import React, {Component} from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;
import RuleMenu from "bundle-loader?lazy&name=RuleMenu!./MenuRoute/RuleMenu/RuleMenu";
import PermissionMenu from "bundle-loader?lazy&name=PermissionMenu!./MenuRoute/PermissionMenu/PermissionMenu";
import { Route, Switch, Link} from 'react-router-dom';
import Bundle from 'router/Bundle';
import { Spin } from 'antd';

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
class LeftSide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }} >
                <Switch>
                    <Route path="/rule/home/rule"   component={createComponent(RuleMenu)}/>
                    <Route path="/rule/home/permission"  component={createComponent(PermissionMenu)}/>
                </Switch>
            </Sider>
        )
    }
}
export default LeftSide;