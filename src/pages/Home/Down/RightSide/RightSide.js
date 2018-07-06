import React, {Component} from 'react';
import { Layout } from 'antd';
import MyContent from "./MyContent/MyContent";
import MyBreadCrumb from "./MyBreadCrumb/MyBreadCrumb";
import { Route, Switch, Link} from 'react-router-dom';

class RigthSide extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <MyBreadCrumb/>
                <MyContent/>
            </Layout>
        )
    }
}
export default RigthSide;