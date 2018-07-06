import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {withRouter} from "react-router-dom";
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import ToLogin from 'bundle-loader?lazy&name=toLogin!pages/ToLogin/ToLogin';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Bundle from 'router/Bundle';
import './css/App.css';
import { Spin } from 'antd';
// import 'mock/mock';

if (MOCK) {
    require('mock/mock');
}
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
class App extends Component {
    componentWillMount() {
        const userSession = sessionStorage.getItem('userId');
        // sessionStorage.setItem('mainMenu','177');
        if(userSession===null||userSession===undefined||userSession===''){
            this.props.history.push("/rule/login");
        }else {
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/rule/home" component={createComponent(Home)}/>
                        <Route path="/rule/login" component={createComponent(ToLogin)}/>
                        <Redirect from="/" to="/rule/home/rule/library/constant"/>
                        <Route path="*" component={createComponent(NotFound)}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
renderWithHotReload(withRouter(App));
if (module.hot) {
    module.hot.accept('./index', () => {
        const NextApp = require('./index').default;
        renderWithHotReload(NextApp);
    });
}
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}