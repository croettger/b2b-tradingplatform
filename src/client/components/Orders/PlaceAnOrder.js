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

    constructor() {
        super();
        this.state = {
            // Zustand für Lieferadresse
            firstSecondName: '',
            street: '',
            nr: '',
            city: '',
            plz: '',
            country: '',
            // Zustand für Rechnungsadresse
            firstSecondNameR: '',
            streetR: '',
            nrR: '',
            cityR: '',
            plzR: '',
            countryR: '',

            checkbox: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.hideInOrOut = this.hideInOrOut.bind(this);
    }

    //Speichert die Eingaben aus den Textfeldern in die Zustandsvariablen
    handleChange(event)  {
        if(event.target.id == 'Lieferadresse1')
            this.setState({firstSecondName: event.target.value});
        else if (event.target.id == 'Lieferadresse2')
            this.setState({street: event.target.value});
        else if (event.target.id == 'Lieferadresse3')
            this.setState({nr: event.target.value});
        else if (event.target.id == 'Lieferadresse4')
            this.setState({city: event.target.value});
        else if (event.target.id == 'Lieferadresse5')
            this.setState({plz: event.target.value});
        else if (event.target.id == 'Lieferadresse6')
            this.setState({country: event.target.value});
        else if (event.target.id == 'Rechnungsadresse1')
            this.setState({firstSecondNameR: event.target.value});
        else if (event.target.id == 'Rechnungsadresse2')
            this.setState({streetR: event.target.value});
        else if (event.target.id == 'Rechnungsadresse3')
            this.setState({nrR: event.target.value});
        else if (event.target.id == 'Rechnungsadresse4')
            this.setState({cityR: event.target.value});
        else if (event.target.id == 'Rechnungsadresse5')
            this.setState({plzR: event.target.value});
        else if (event.target.id == 'Rechnungsadresse6'){
            this.setState({countryR: event.target.value});
        }
    }

    //Versteckt die Rechnungsadresse
    hideInOrOut()  {
        if(this.state.checkbox)
            this.setState({checkbox: false})
        else
            this.setState({checkbox: true})
    }


    //
    boxOnCheck(event) {
        if(event.target.checked==true)
        {

        }
    }

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

        let address = null;
        const isChecked = this.state.checkbox;
        if(!isChecked)
            address = <Address labelTitle={'Vor- und Nachname'} text={'Rechnungsadresse'} name='Rechnungsadresse'></Address>
        else
            address = <p>Folgende Rechnungsadresse wird berücksichtigt:<br/>
                {this.state.firstSecondName}<br/>
                {this.state.street} {this.state.nr}<br/>
                {this.state.city} {this.state.plz}<br/>
                {this.state.country}</p>


        return  <div>
            <MuiThemeProvider>
                <Paper id="paper" zDepth={5} style={paperStyle}>
                    <h2>Bestellung aufgeben</h2><br/>
                    <Address labelTitle={'Vor- und Nachname'} text={'Lieferadresse'} name='Lieferadresse'></Address><br/>
                    <Checkbox label="Als Rechnungsadresse übernehmen" style={checkboxstyle} onCheck={(e)=>this.hideInOrOut(e)} /><br/><br/>
                    {address}
                    <LabelInput underlineShow={false} inputMultiLine={true} rows={3} fullWidth = "true"></LabelInput>
                    <RaisedButton label="Bestellung ausführen" primary={true} style={style}/>
                </Paper>
            </MuiThemeProvider>
        </div>
    }
}