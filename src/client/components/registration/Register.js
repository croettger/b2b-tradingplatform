/**
 * Created by Igor Stellmach on 05.12.2016.
 */

import React from 'react';
import LabelInput from '../../LabelInput';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

//Komponente für die Registrierung
export default class Register extends React.Component
{
    render()
    {
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
            left:'50%',
            display: 'inline-block',
            borderRadius: '10px', // abgerundete Ecken
            backgroundColor:'#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        };

        return <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Registrieren</h2>
                    <LabelInput labelTitle="Ihr Name" labelText="Please input your name"></LabelInput>
                    <LabelInput labelTitle="Email-Adresse" labelText="Please input your e-mail"></LabelInput>
                    <LabelInput labelTitle="Passwort" labelText="Please input your Password" type="password"></LabelInput>
                    <LabelInput labelTitle="Noch mal Passwort" labelText="Please input your Password again" type="password"></LabelInput>
                    <RaisedButton label="Konto erstellen" primary = 'true' style={style}/>
                    <p style={style}>Sie haben bereits ein Konto?</p>
                    <RaisedButton label="Anmelden" primary = 'true' style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}
