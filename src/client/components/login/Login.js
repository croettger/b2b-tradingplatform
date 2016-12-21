/**
 * Created by Igor Stellmach on 05.12.2016.
 */
import React from 'react';
import LabelInput from '../../LabelInput';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

//Komponente für die Anmeldung
export default class Login extends React.Component {

    render() {
        // Styling für die Buttons
        const style = {
            position: 'relative',
            textAlign: 'center',
            display: 'block'
        };

        // Styling für den Paper
        const paperStyle = {
            display: 'inline-block',
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        };

        return <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={2} style={paperStyle}>
                    <h2>Anmelden</h2>
                    <LabelInput labelTitle="Login" labelText="Bitte Email-Adresse eingeben"/>
                    <LabelInput labelTitle="Passwort" labelText="Bitte ein Passwort eingeben" type="password"/>
                    <RaisedButton label="Anmelden" primary={true} style={style}/>
                    <p style={style}>----- Neu bei b2b? -----</p>
                    <RaisedButton label="Registrieren" primary={true} href="#/register" style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}