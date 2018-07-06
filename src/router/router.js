import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bundle from './Bundle';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

const getRouter = () => (
    <Router>
        <Switch>
            <Route path="/rule/home" component={createComponent(Home)}/>
            <Route path="/rule/login" component={createComponent(MyLogin)}/>
            <Redirect from="/" to="/rule/home/guiz/ku/clk"/>
            <Route path="*" component={createComponent(NotFound)}/>
        </Switch>
    </Router>
);

export default getRouter;
// import React from 'react';
//
// import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
// import Bundle from './Bundle';
//
// import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
// import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
// // import Forms from 'components/Forms/Forms';
// // import Buttons from 'components/Buttons/Buttons';
//
// const Loading = function () {
//     return <div>Loading...</div>
// };
//
// const createComponent = (component) => () => (
//     <Bundle load={component}>
//         {
//             (Component) => Component ? <Component/> : <Loading/>
//         }
//     </Bundle>
// );
//
// const getRouter = () => (
//     <Router>
//         {/*<div>*/}
//             {/*<ul>*/}
//                 {/*<li><Link to="/">首页</Link></li>*/}
//                 {/*<li><Link to="/page1">Page1</Link></li>*/}
//                 {/*<li><Link to="/counter">Counter</Link></li>*/}
//                 {/*<li><Link to="/userinfo">UserInfo</Link></li>*/}
//             {/*</ul>*/}
//             <Switch>
//                 <Route path="/home" component={createComponent(Home)}/>
//                 <Route exact path="/page1" component={createComponent(Page1)}/>
//                 <Route path="/counter" component={createComponent(Counter)}/>
//                 <Route path="/rule/userinfo" component={createComponent(UserInfo)}/>
//                     {/*<Route path="/home/buttons" name="Buttons" component={Buttons}/>*/}
//                     {/*<Route path="/home/forms" name="Forms" component={Forms}/>*/}
//                 <Redirect from="/" to="/home"/>
//                 <Route component={createComponent(NotFound)}/>
//             </Switch>
//         {/*</div>*/}
//     </Router>
// );
//
// export default getRouter;
//
// const routes = {
//     '/': 'login/home',
//     '/rule/login': 'login',
//     '/rule/home': 'home',
//     '/rule/home/guizhe': 'guizhe',
//     '/rule/home/quanxian': 'quanxian',
//     '/components/social-buttons': 'Social Buttons',
//     '/components/cards': 'Cards',
//     '/components/forms': 'Forms',
//     '/components/modals': 'Modals',
//     '/components/switches': 'Switches',
//     '/components/tables': 'Tables',
//     '/components/tabs': 'Tabs',
//     '/icons': 'Icons',
//     '/icons/font-awesome': 'Font Awesome',
//     '/icons/simple-line-icons': 'Simple Line Icons',
//     '/widgets': 'Widgets'
// };
// export default routes;

