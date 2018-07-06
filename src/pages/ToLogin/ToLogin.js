import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Login from "./Login/Login";

export default class ToLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Login/>
            </div>
        )
    }
}