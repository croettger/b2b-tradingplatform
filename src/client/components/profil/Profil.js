/**
 * Created by Christoph on 13.12.2016.
 */
import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adress from '../person_data/Address';
import RaisedButton from 'material-ui/RaisedButton';
import LabelInput from '../../LabelInput';
import Avatar from 'material-ui/Avatar';



import {Card, CardMedia, CardTitle} from 'material-ui/Card';
export default class Profil extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            oldpassword: '',
            newpassword: '',
            repeatpassword: '',
        }
    }

    render() {


        const border = {width: '1000px'};
        const header = {backgroundColor: 'green', height: '250px'};
        const sidebar = {float: 'left', width: '270px'};
        const main = { display: 'inline-block', width: '700px', height: '100%'};
        const bottom = {clear: 'both', textAlign: 'center', paddingBottom:'15px'};
        // const nature = require('file-loader!./../../images/nature.jpg');
        // const titanic = require('file-loader!./../../images/titanic.jpg');
        const borderStyle = {border:'1px solid',height: '25px',marginTop: '15px'};
        const cardStyle = {width:'100%', height: '250px'};
        const CardExample = () => (
            <Card >
                <CardMedia style={cardStyle} overlay={<CardTitle title="Unternehmen XY" subtitle="Slogan des Unternehmen" />}>
                    <img src="http://martyredangelsmc.com/wp-content/uploads/2015/01/open-road1-1000x250.jpg"/>
                </CardMedia>
            </Card>
                );
        
        function validateInput() {
            console.log('-> Validation');
           if(this.state.oldpassword != '')
           {
               window.alert(`OldPasswort ist nicht leer: ${this.state.oldpassword}`);
           }
        }

        function handleChange(event)
        {
            console.log(event.target.value);
            this.setState({
                oldpassword: event.target.value
            });
        }

        return (
            <MuiThemeProvider>
                <div id="borderID" style={border}>
                    <Paper zDepth={2}>
                        <div id="top" style={header}><CardExample /></div>
                        <div id="column-left" style={sidebar}>
                            <Avatar src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" size={200} />
                            <Adress labelTitle="Name des Unternehmens"/>
                            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} labelTitle="Altes Passwort" value={this.state.oldpassword} onChange={(e) => handleChange(e)} labelText="Altes Passwort"  />
                            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} labelTitle="Neues Passwort" labelText="Neues Passwort"/>
                            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} labelTitle="Passwort wiederholen" labelText="Passwort wiederholen"  />
                        </div>
                        <div id="column-right" style={main}><LabelInput underlineShow={false} inputMultiLine={true} rows={10} fullWidth={true} labelTitle="Unternehmensbeschreibung"/></div>
                        <div id="bottom" style={bottom}><RaisedButton primary={true} label="Speichern" onClick={this.validateInput}/></div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );

    }
}