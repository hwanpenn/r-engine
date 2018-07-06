import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from '../../router/Bundle';
import Login from "components/temp/Login/Login";
import Regist from "components/temp/Regist/Regist";

// const { main } = Layout;
const Loading = function () {
    return <div>Loading...</div>
};
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

export default class MyRegist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                <Regist/>
            </div>
        )
    }
}