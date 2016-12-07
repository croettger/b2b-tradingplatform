/**
 * Created by Christoph on 01.12.2016.
 * Edited by Igor Stellmach on 05.12.2016.
 */
import React from 'react';
import LabelInput from '../../LabelInput';
import LabelInputPass from '../../LabelInputPass';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

//Komponente für die Anmeldung
<<<<<<< HEAD
export default class Login extends React.Component {


    render() {
=======
export default class Login extends React.Component
{
    render()
    {
        // Styling für die Buttons
>>>>>>> 5014475188c268a9ffbf9309ed87eecd82a20081
        const style = {
            position: 'relative',
            textAlign: 'center',
            display: 'block'
        };
<<<<<<< HEAD
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
=======

        // Styling für den Paper
        const paperStyle = {
            position: 'relative',
            marginTop: '50px',
            marginBottom: '50px',
            marginLeft: '-150px',
            left:'50%', /* in die Mitte verschieben */
            display: 'inline-block',
            borderRadius: '10px', // abgerundete Ecken
            backgroundColor:'#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        };

        return <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Anmelden</h2>
                    <LabelInput labelTitle="Email-Adresse" labelText="Please input your e-mail"></LabelInput>
                    <LabelInputPass labelTitle="Passwort" labelText="Please input your Password"></LabelInputPass>
                    <RaisedButton label="Anmelden" primary = 'true' style={style}/>
                    <p style={style}>----- Neu bei b2b? -----</p>
                    <RaisedButton label="Registrieren" primary = 'true' style={style}/>
>>>>>>> 5014475188c268a9ffbf9309ed87eecd82a20081
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}