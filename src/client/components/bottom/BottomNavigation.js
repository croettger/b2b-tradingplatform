/**
 * Created by Igor Stellmach on 06.12.2016.
 * Diese JavaScript-Datei kümmert sich um die Footer-Navigation. Die Icons wurden von Materials UI übernommen.
 */

import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Profile from 'material-ui/svg-icons/Action/account-box';
import Settings from 'material-ui/svg-icons/Action/settings-applications';
import MyProducts from 'material-ui/svg-icons/Action/home';
import Help from 'material-ui/svg-icons/Communication/live-help';
import Kontakt from 'material-ui/svg-icons/Communication/contact-mail';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';

import styles from './bottomnavigation.css';

const profil = <Profile/>;
const products = <MyProducts/>;
const settings = <Settings/>;
const help = <Help/>;
const kontakt = <Kontakt/>;


export default class BottomNavigationTest extends React.Component {

    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <MuiThemeProvider>
                 <Paper zDepth={1} className={styles.paper}>
                    <BottomNavigation id="bottomnav" className={styles.bottomnav} selectedIndex={this.state.selectedIndex}>
                        <Link to="/profil" className={styles.item}>
                        <BottomNavigationItem
                            label="Profil"
                            icon={profil}
                            onTouchTap={() => this.select(0)}
                        />
                        </Link>
                        <a href="#/createProduct" className={styles.item}>
                                <BottomNavigationItem
                                    label="Meine Produkte"
                                    icon={products}
                                    onTouchTap={() => this.select(1)}
                                />
                        </a>
                        <Link to="/bestellungaufgeben" className={styles.item}>
                        <BottomNavigationItem
                            label="Einstellungen"
                            icon={settings}
                            onTouchTap={() => this.select(2)}
                        />
                        </Link>
                            <Link to="/createProduct" className={styles.item}>
                        <BottomNavigationItem
                            label="Kontakt"
                            icon={kontakt}
                            onTouchTap={() => this.select(3)}
                        />
                            </Link>
                        <Link to="#/createProduct" className={styles.item}>
                        <BottomNavigationItem
                            label="Hilfe"
                            icon={help}
                            onTouchTap={() => this.select(4)}
                        />
                        </Link>
                    </BottomNavigation>
                </Paper>
            </MuiThemeProvider>
        );
    }
}
