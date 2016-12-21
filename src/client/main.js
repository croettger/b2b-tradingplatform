//React
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
//Components
import Navigation from './components/navigation/Navigation';
import Login from './components/login/Login';
import BottomNavigationTest from './components/bottom/BottomNavigation';
import Register from './components/registration/Register';
import Profil from './components/profil/Profil';
import CreateProduct from './components/product/CreateProduct';
import PlaceAndOrder from './components/Orders/PlaceAnOrder';
import Warenkorb from './container/Warenkorb';
import MainPage from './container/MainPage';
//Other
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
// // TODO: Der Router muss natürlich auf die Startseite "Produkte" zeigen

class App extends React.Component {
    render() {
        return (
            <div>
            <Navigation title="B2B-Trading Platform"/>
             {this.props.children}
            <BottomNavigationTest/>
            </div>
        )
    };
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} />
            <Route path="/register" component={Register} />
            <Route path="/profil" component={Profil} />
            <Route path="/login" component={Login} />
            <Route path="/createproduct" component={CreateProduct}/>
            <Route path="/bestellungaufgeben" component={PlaceAndOrder}/>
            <Route path="/marketbasket" component={Warenkorb} />
        </Route>
    </Router>
), document.getElementById('mountingPoint'));
