import React, {Component} from 'react';
import { Breadcrumb } from 'antd';
import { Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setMenuFirst,setMenuSecond,setMenuThird} from "actions/menuState";

class MyBreadCrumb extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="#">{this.props.menuState.first}</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="#">{this.props.menuState.second}</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="#">{this.props.menuState.third}</Link></Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        menuState: state.menuState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMenuFirst: () => {
            dispatch(setMenuFirst())
        },
        setMenuSecond: () => {
            dispatch(setMenuSecond())
        },
        setMenuThird: () => {
            dispatch(setMenuThird())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBreadCrumb);
