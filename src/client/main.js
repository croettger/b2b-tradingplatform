import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation/Navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Login from './components/login/Login';
import BottomNavi from './BottomNavi';


//Wird für das Aufklappen von Menüs verwendet z.B in Navigation.js
injectTapEventPlugin();

ReactDOM.render(<Navigation title="b2b"/>, document.getElementById('header'));
ReactDOM.render(<Login />, document.getElementById('anmelden'));
ReactDOM.render(<BottomNavi />, document.getElementById('footer'));
