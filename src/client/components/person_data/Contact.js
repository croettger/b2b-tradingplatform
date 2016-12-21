/**
 * Created by Igor Stellmach on 21.12.2016.
 */

import React from 'react';
import LabelInput from '../../LabelInput';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state={email: '', text: props.text}
    }

    render() {

        const style = {
            position: 'relative',
            textAlign: 'center',
            display: 'block'
        };
        // Styling für den Paper
        const paperStyle = {
            display: 'inline-block',
            width: '400px',
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        };

        return  <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={2} style={paperStyle}>
                <p>An dem Projekt arbeiten:<br/> Igor Stellmach <br/> Michael Stellmach <br/> Christof Roettger <br/> Hüsseyin Igci <br/> </p>

                    <LabelInput style={{width: '190px'}} labelTitle="Ihre Email-Adresse" labelText="Geben Sie Ihre Email ein" ></LabelInput>
                    <LabelInput labelTitle={'Ihre Nachricht:'}
                                inputMultiLine={true}
                                rows = {10}
                                maxLength = {1024}
                                fullWidth = {true}
                    />
                    <RaisedButton label="Absenden" primary={true} href="#/register" style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}