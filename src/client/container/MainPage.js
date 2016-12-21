/**
 * Created by Christoph on 04.12.2016.
 */

import React from 'react';
import Produkt from '../components/product/Produkt';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


export default class MainPage extends React.Component {

    render() {
        // Styling für den Paper
        const paperStyle = {
            position: 'relative',
            width: '100%',
            marginBottom: '50px',
            marginLeft: '-50%',
            left: '50%', /* in die Mitte verschieben */
            display: 'inline-block',
            borderRadius: '15px', // abgerundete Ecken
            backgroundColor: '#efefef', // grauer Hintergrund
            padding: '10px',  // Innenabstand
        }
        return ( <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Willkommen</h2><br/>
                    <Produkt status="EINKAUFEN"/>
                    <Produkt status="EINKAUFEN"/>
                    <Produkt status="EINKAUFEN"/>
                </Paper>
            </MuiThemeProvider>
        </div>
        );
    }


}