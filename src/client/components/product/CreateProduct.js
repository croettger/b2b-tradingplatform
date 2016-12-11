/**
 * Created by Igor Stellmach on 10.12.2016.
 */

import React from 'react';
import LabelInput from '../../LabelInput';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ProductPictures from './ProductPictures';

//Komponente: CreateProduct
export default class CreateProduct extends React.Component {

    render() {

        // Styling für die Buttons
        const style = {
            position: 'relative',
            left: '50%',
            width: '30%',
            marginLeft: '-15%',
            textAlign: 'center',
            display: 'inline-block'
        };

        // Styling für den Paper
        const paperStyle = {
            position: 'relative',
            width: '50%',
            marginTop: '50px',
            marginBottom: '50px',
            marginLeft: '-25%',
            left: '50%', /* in die Mitte verschieben */
            display: 'inline-block',
            borderRadius: '15px', // abgerundete Ecken
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        };

        return <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>{this.props.ueberschrift}</h2><br/>
                    <ProductPictures/><br/>
                    <LabelInput labelTitle="Produktname" labelText="Bitte Produktname eingeben" maxLength = "100" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Artikelnummer" labelText="Bitte Artikelnummer eingeben" maxLength = "15" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Preis" labelText="Bitte den Preis eingeben" maxLength = "15" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Anzahl" labelText="Bitte die Anzahl eingeben" maxLength = "10" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Größe" labelText="Bitte die Größe eingeben" maxLength = "10" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Hersteller" labelText="Bitte den Hersteller eingeben" maxLength = "25" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Kategorie" labelText="Bitte Kategorie eingeben" maxLength = "30" fullWidth = "true"></LabelInput>
                    <LabelInput labelTitle="Produktbeschreibung" inputMultiLine="true" rows = "4" maxLength = "1024" fullWidth = "true"></LabelInput>
                    <RaisedButton label="Speichern" primary={true} style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}