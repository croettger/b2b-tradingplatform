/**
 * Created by Christoph on 04.12.2016.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'


export default class BottomNavi extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <Paper zDepth={1}>
                    <BottomNavigation>
                    </BottomNavigation>
                </Paper>
            </MuiThemeProvider>
        );
    }
}