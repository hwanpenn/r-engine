import React, {Component} from 'react';
import { Layout} from 'antd';
import LeftSide from "./LeftSide/LeftSide";
import { Route, Switch, Link} from 'react-router-dom';
import RigthSide from "./RightSide/RightSide";

class Down extends Component {
    render() {
        return (
            <Layout style={{ height: 624 }}>
                <LeftSide/>
                <RigthSide/>
            </Layout>
        );
    }
}
export default Down;