/**
 * Created by Christoph on 13.12.2016.
 */
import React from 'react';

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/*Components */
import RaisedButton from 'material-ui/RaisedButton';
import LabelInput from '../../LabelInput';
import Sidebar from './Sidebar';


import {Card, CardMedia, CardTitle} from 'material-ui/Card';
export default class Profil extends React.Component {


    render() {
        const border = {width: '1000px'};
        const header = {backgroundColor: 'green', height: '250px'};
        const sidebar = {float: 'left', width: '270px'};
        const main = { display: 'inline-block', width: '700px', height: '100%'};
        const bottom = {clear: 'both', textAlign: 'center', paddingBottom:'15px'};
        const cardStyle = {width:'100%', height: '250px'};
        const CardExample = () => (
            <Card >
                <CardMedia style={cardStyle} overlay={<CardTitle title="Unternehmen XY" subtitle="Slogan des Unternehmen" />}>
                    <img src="http://martyredangelsmc.com/wp-content/uploads/2015/01/open-road1-1000x250.jpg"/>
                </CardMedia>
            </Card>
                );

        return (
            <MuiThemeProvider>
                <div id="borderID" style={border}>
                    <Paper zDepth={2}>
                        <div id="top" style={header}><CardExample /></div>
                        <Sidebar id="column-left" style={sidebar} />
                        <div id="column-right" style={main}><LabelInput underlineShow={false} inputMultiLine={true} rows={10} fullWidth={true} labelTitle="Unternehmensbeschreibung"/></div>
                        <div id="bottom" style={bottom}><RaisedButton primary={true} label="Speichern" onClick={this.validateInput}/></div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );

    }
}