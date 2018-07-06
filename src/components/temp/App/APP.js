// import React, {Component} from 'react';
// import {BrowserRouter as Router, Route, Switch, Link,Redirect} from 'react-router-dom';
// import '../../css/App.css';
// import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
// import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
// // import Page404 from 'pages/Page404/Page404';
// import Bundle from '../../router/Bundle';
//
// // import Nav from 'components/Nav/Nav';
// // import getRouter from 'router/router';
//
//
// const Loading = function () {
//     return <div>Loading...</div>
// };
// const createComponent = (component) => () => (
//     <Bundle load={component}>
//         {
//             (Component) => Component ? <Component/> : <Loading/>
//         }
//     </Bundle>
// );
//
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Router>
//                     <Switch>
//                         <Route path="/home" component={createComponent(Home)}/>
//                         <Route exact path="/page1" component={createComponent(Page1)}/>
//                         <Route path="/counter" component={createComponent(Counter)}/>
//                         <Route path="/userinfo" component={createComponent(UserInfo)}/>
//                         {/*<Route exact path="/404" name="Page 404" component={Page404}/>*/}
//                         {/*<Route path="/home/buttons" name="Buttons" component={Buttons}/>*/}
//                         {/*<Route path="/home/forms" name="Forms" component={Forms}/>*/}
//                         <Redirect from="/" to="/home"/>
//                         <Route component={createComponent(NotFound)}/>
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }
//
// // export default class App extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 {/*<Nav/>*/}
// //                 {/*<Header />*/}
// //                 {/*<Main />*/}
// //                 {/*<leftSide />*/}
// //                 {/*<rightSide />*/}
// //                 {getRouter()}
// //             </div>
// //         )
// //     }
// // }