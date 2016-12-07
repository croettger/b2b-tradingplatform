/**
 * Created by Christoph on 01.12.2016.
 */
import React from 'react';
import LabelInput from '../../LabelInput';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

//Komponente für die Anmeldung
export default class Login extends React.Component {


    render() {
        const style = {
            align: 'center',
            display: 'inline-block',
        };
        const title = {color: 'red'};

        return <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={1} style={style}>
                    <h2 style={title}>Anmelden</h2>
                    <LabelInput labelTitle="Email-Adresse"></LabelInput>
                    <LabelInput labelTitle="Passwort"></LabelInput>
                    <RaisedButton label="Anmelden"/>
                    <p>----- Neu bei b2b? -----</p>
                    <RaisedButton label="Registrieren"/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }


}