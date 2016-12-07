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
import {
    cyan500, cyan700,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    render() {

        const backgroundColor = {color:cyan500};
        const titleColor = {color:white};

        return (
            <MuiThemeProvider>
                <Paper zDepth={1}>
                    <Toolbar style={backgroundColor}>
                        <ToolbarGroup firstChild={true}>
                            <ToolbarTitle style={titleColor} text={this.props.title}/>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <AutoCompleteTextField hintText="Produktsuche"/>
                            <FontIcon><SearchIcon /></FontIcon>
                        </ToolbarGroup>
                        <ToolbarGroup lastChild={true}>
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