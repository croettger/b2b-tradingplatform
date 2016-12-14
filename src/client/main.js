import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Navigation from './components/navigation/Navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './components/login/Login';
import BottomNavigationTest from './BottomNavigationTest';
import Register from './components/registration/Register';
import Profil from './container/Profil';
const history = createHashHistory({ queryKey: false });

injectTapEventPlugin();
// TODO: Der Router muss natürlich auf die Startseite "Produkte" zeigen
const router = <Router history={history}>
 <Redirect from='/' to='/profil'/>
 <Router path='/login' component={Login}/>
 <Router path='/register' component={Register}/>
 <Router path='/profil' component={Profil}/>
</Router>;

ReactDOM.render(<Navigation title="B2B-Trading Platform"/>, document.getElementById('header'));
ReactDOM.render(router, document.getElementById('mountingPoint'))
// ReactDOM.render(<CreateProduct/>, document.getElementById('mountingPoint'));
ReactDOM.render(<BottomNavigationTest/>, document.getElementById('footer'));
