import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import ShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoCompleteTextField from '../../AutoCompleteTextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Paper from 'material-ui/Paper';
import {cyan500} from 'material-ui/styles/colors';

import styles from './navigation.css.js';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    render() {

        const muiTheme = getMuiTheme({
            toolbar: {
                backgroundColor: '#00BCD4',
                margin: 0,
                width:'100%'
            },
        });
        const marginComponents = {};

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Paper zDepth={1}>
                    <Toolbar>
                        <ToolbarGroup firstChild={true}>
                            <ToolbarTitle style={styles.titleColor} text={this.props.title}/>
                        </ToolbarGroup>
                        <ToolbarGroup style={marginComponents}>
                            <AutoCompleteTextField hintText="Produktsuche"/>
                            <SearchIcon />
                        </ToolbarGroup>
                        <ToolbarGroup lastChild={true}>
                            <IconButton><ShoppingCartIcon/></IconButton>
                            <AccountIcon />
                            <p>BenutzerXY</p>
                            <IconMenu className={styles.lastElement}
                                      iconButtonElement={
                                          <IconButton touch={true}>
                                              <NavigationExpandMoreIcon />
                                          </IconButton>
                                      }
                            >
                                <MenuItem primaryText="Anmelden" href="#/login" />
                                <MenuItem primaryText="Ausloggen" href="#/logout"/>
                                <MenuItem primaryText="Mein Profil" href="#/profil"/>
                            </IconMenu>
                        </ToolbarGroup>
                    </Toolbar>
                </Paper>
            </MuiThemeProvider>
        );
    }
}