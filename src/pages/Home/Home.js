import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Head from './Head/Head';
import Down from "./Down/Down";
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
import {withRouter} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Head/>
                <Down />
            </div>
        )
    }
}
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
const TempHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export default withRouter(TempHome);