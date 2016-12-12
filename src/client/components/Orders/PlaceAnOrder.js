/**
 * Created by Micha on 04.12.2016.
 */
import React from 'react';
import Address from '../person_data/Address';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import LabelInput from '../../LabelInput';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class PlaceAnOrder extends React.Component {

    render() {

        // Styling für die Buttons
        const style = {
            position: 'relative',
            left: '50%',
            marginLeft: '-15%',
            textAlign: 'center',
            display: 'inline-block'
        };

        // Styling für den Paper
        const paperStyle = {
            width: '50%',
            position: 'relative',
            left: '50%',
            marginLeft: '-25%',
            display: 'inline-block',
            borderRadius: '10px', // abgerundete Ecken
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px'  // Innenabstand
        };

        const checkboxstyle = {marginLeft: '-5px'};
        const textAreaStyle= {width: '90%'};

        return  <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Bestellung aufgeben</h2><br/>
                    <Address labelTitle={'Vor- und Nachname'} text={'Lieferadresse'} name='Lieferadresse'></Address>
                    <Checkbox label="Als Rechnungsadresse übernehmen" style={checkboxstyle}/><br/><br/>

                    <Address labelTitle={'Vor- und Nachname'} text={'Rechnungsadresse'} name='Rechnungsadresse'></Address>
                    <LabelInput underlineShow={false} inputMultiLine={true} rows={3} fullWidth = "true"></LabelInput>
                    <RaisedButton label="Bestellung ausführen" primary={true} style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}