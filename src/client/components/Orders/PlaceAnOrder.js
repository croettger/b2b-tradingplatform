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
        // Styling für den Paper
        const paperStyle = {
            position: 'relative',
            left: '35%',
            display: 'inline-block',
            // borderRadius: '10px', // abgerundete Ecken
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px'  // Innenabstand
        };

        const checkboxstyle = {marginLeft: '-5px'};
        const textAreaStyle={width: '90%'};

        return  <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Bestellung aufgeben</h2><br/>
                    <Address labelTitle={'Vor- und Nachname'} text={'Lieferadresse'}></Address>
                    <Checkbox label="Als Rechnungsadresse übernehmen" style={checkboxstyle}/><br/><br/>
                    <Address labelTitle={'Vor- und Nachname'} text={'Rechnungsadresse'}></Address>
                    <LabelInput style={textAreaStyle}  underlineShow={false} inputMultiLine={true} rows={3}></LabelInput>
                    <RaisedButton label="Bestellung ausführen" primary={true} style={{marginLeft: '85px'}}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}
