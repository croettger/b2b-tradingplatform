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
        // Styling für den Paper
        const paperStyle = {
            position: 'relative',
            marginTop: '10px', /* Damit die Navigation ein Bischen Abstand vom Body hat.*/
            display: 'block'
        };
        // Styling für Navigation
        const hintergrund = {
            backgroundColor:'#efefef', // grauer Hintergrund
        };

        const Item = {
            position: 'relative',
            left: '7%', // grauer Hintergrund
            //display: 'flex'
        };



        return (
            <MuiThemeProvider>
                 <Paper zDepth={1}>
                    <BottomNavigation style={hintergrund} selectedIndex={this.state.selectedIndex}>
                        <a href="#/createProduct" style={Item}>
                        <BottomNavigationItem
                            label="Profil"
                            icon={profil}
                            onTouchTap={() => this.select(0)}
                        />
                        </a>
                        <a href="#/createProduct" style={Item}>
                                <BottomNavigationItem
                                    label="Meine Produkte"
                                    icon={products}
                                    onTouchTap={() => this.select(1)}
                                />
                        </a>
                        <a href="#/createProduct" style={Item}>
                        <BottomNavigationItem
                            label="Einstellungen"
                            icon={settings}
                            onTouchTap={() => this.select(2)}
                        />
                        </a>
                            <a href="#/createProduct" style={Item}>
                        <BottomNavigationItem
                            label="Kontakt"
                            icon={kontakt}
                            onTouchTap={() => this.select(3)}
                        />
                            </a>
                        <a href="#/createProduct" style={Item}>
                        <BottomNavigationItem
                            label="Hilfe"
                            icon={help}
                            onTouchTap={() => this.select(4)}
                        />
                        </a>
                    </BottomNavigation>
                </Paper>
            </MuiThemeProvider>
        );
    }
}
