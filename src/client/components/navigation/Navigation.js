import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import ShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoCompleteTextField from '../../AutoCompleteTextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Paper from 'material-ui/Paper';


export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    render() {

        return (
            <MuiThemeProvider>
                <Paper zDepth={1}>
                    <Toolbar >
                        <ToolbarGroup>
                            <ToolbarTitle text={this.props.title}/>
                            <ToolbarSeparator/>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <AutoCompleteTextField hintText="Produktsuche"/>
                            <FontIcon><SearchIcon /></FontIcon>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <IconButton><ShoppingCartIcon/></IconButton>
                            <AccountIcon />
                            <p>BenutzerXY</p>
                            <IconMenu
                                iconButtonElement={
                                    <IconButton touch={true}>
                                        <NavigationExpandMoreIcon />
                                    </IconButton>
                                }
                            >
                                <MenuItem primaryText="Anmelden"/>
                                <MenuItem primaryText="Ausloggen"/>
                                <MenuItem primaryText="Mein Profil"/>
                            </IconMenu>
                        </ToolbarGroup>
                    </Toolbar>
                </Paper>
            </MuiThemeProvider>
        );
    }
}