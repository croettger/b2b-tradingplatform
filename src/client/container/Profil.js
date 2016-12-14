/**
 * Created by Christoph on 13.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adress from './../components/person_data/Address';
import RaisedButton from 'material-ui/RaisedButton';
import LabelInput from './../LabelInput';
import TextArea from 'material-ui/TextField';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';
export default class Profil extends React.Component {
    render() {
        const border = {backgroundColor: 'yellow', marginLeft: '10%', marginRight: '10%'};
        const header = {backgroundColor: 'grey', height: '300px'};
        const sidebar = {float: 'left', width: '30%'};
        const main = {backgroundColor: 'darkred', display: 'inline-block', width: '70%', height: '100%' };
        const smallpic = {backgroundColor: 'blue', height:'100px', width:'100%'};
        const bottom = {clear: 'both', textAlign: 'center'};

        const borderStyle = {border:'1px solid',height: '25px',marginTop: '15px'};

        const CardExample = () => (
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Unternehmen XY" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature.jpg"/>
                </CardMedia>
            </Card>
                );

        const CardSmall = () => (
            <Card>
                <CardMedia>
                    <img src="./../images/titanic.jpg"/>
                </CardMedia>
            </Card>

        );

        return (
            <MuiThemeProvider>
                <div id="borderID" style={border}>
                    <Paper zDepth={2}>
                        <div id="top" style={header}><CardExample/></div>
                        <div id="column-left" style={sidebar}>
                            <CardSmall/>
                            <Adress labelTitle="Name des Unternehmens"/>
                            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} labelTitle="Altes Passwort" labelText="Altes Passwort"  />
                            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} labelTitle="Neues Passwort" labelText="Neues Passwort"/>
                            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} labelTitle="Passwort wiederholen" labelText="Passwort wiederholen"  />
                        </div>
                        <div id="column-right" style={main}><LabelInput underlineShow={false} inputStyle={borderStyle} labelTitle="Unternehmensbeschreibung" multiLine="true" /></div>
                        <div id="bottom" style={bottom}><RaisedButton label="Speichern"/></div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );

    }
}