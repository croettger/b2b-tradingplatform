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
            position: 'relative',
            marginTop: '50px',
            marginBottom: '50px',
            marginLeft: '-150px',
            left: '50%', /* in die Mitte verschieben */
            display: 'inline-block',
            borderRadius: '10px', // abgerundete Ecken
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        };

        return <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Anmelden</h2>
                    <LabelInput labelTitle="Login" labelText="Bitte Email-Adresse eingeben"></LabelInput>
                    <LabelInput labelTitle="Passwort" labelText="Bitte ein Passwort eingeben" type="password"></LabelInput>
                    <RaisedButton label="Anmelden" primary={true} style={style}/>
                    <p style={style}>----- Neu bei b2b? -----</p>
                    <RaisedButton label="Registrieren" primary={true} style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}