/**
 * Created by Christoph on 21.12.2016.
 */
import React from 'react';

/*Components*/
import LabelInput from './../../LabelInput';
import RaisedButton from 'material-ui/RaisedButton';

export default class EditPassword extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            repeatPassword: '',

            oldPWerrorText: '',
            newPWerrorText: '',
            rptPWerrorText: '',

        }
    }

    /* Functions  */

    // Speichert die Passworteingabe in die zugehörigen States!
    handleChange(event) {

    }

    validateInput() {
        console.log('-> Validation Passwort ');
        var oldpw = this.state.oldPassword;
        var newpw = this.state.newPassword;
        var rptpw = this.state.repeatPassword;

        var oldError = this.state.oldPWerrorText;
        var newError = this.state.newPWerrorText;
        var rptError = this.state.rptPWerrorText;

        //Wenn ein ErrorText gesetzt ist, dann Fehlermeldung (DIALOG?)
        if (oldError || newError || rptError) {
            window.alert('Passwörter sind noch fehlerhaft!');
        } else {
            //2. Schritt - Überprüfe ob die oldPW und newPW identisch sind!
            console.log('Alles OKAY!');

            // TODO: Überprüfen ob oldPW auch wirklich das alte Passwort ist
            // TODO: Gehasht zur DB schicken
            console.log('PWN: '+newpw + ' PWRPT: ' + rptpw);
            if (newpw == rptpw) {
                console.log('Passwörter sind identisch');
            } else {
                window.alert('Neues & Wiederholtes PW stimmen nicht überein');
            }
        }
    }


    /* Überprüft Passwortstärke */
    isMatching(password) {
        /*Minimum 8 characters at least 1 Alphabet and 1 Number*/
        return password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}/);
    }

    /*Überprüft die Inputfelder, wenn sich der Fokus ändert */
    onBlur(event) {
        this.setState({[event.target.name]: event.target.value});
        var errorText = 'mind. 8 Zeichen, sowie Buchstabe und Zahl';

        if(event.target.value) {
            if (this.isMatching(event.target.value)) {
                console.log('Passwort ist im richtigen Format');
            } else {
                this.settingErrorText(event, errorText);
            }
        }
    }

    /* Error Text für die Passwortfelder setzen */
    settingErrorText(e, errorText){
        if(e.target.name == 'oldPassword'){
            this.setState({oldPWerrorText: errorText});
        }else if(e.target.name == 'newPassword'){
            this.setState({newPWerrorText: errorText});
        }else{
            this.setState({rptPWerrorText: errorText});
        }
    }


    clearErrorText(e){
        this.settingErrorText(e, '');
    }

    /* Render */

    render() {
        const borderStyle = {border: '1px solid', height: '25px', marginTop: '15px'};
        const buttonStyle = {marginBottom: '5px'};

        return (<div style={this.props.style}>
            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} errorText={this.state.oldPWerrorText} onFocus={e =>this.clearErrorText(e)} name="oldPassword" labelTitle="Altes Passwort"
                        value={this.state.oldPassword} onChange={(e) => this.handleChange(e)} onBlur={e => this.onBlur(e)}
                        labelText="Altes Passwort"/>
            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} errorText={this.state.newPWerrorText} onFocus={e =>this.clearErrorText(e)} name="newPassword" labelTitle="Neues Passwort"
                        value={this.state.newPassword} onChange={(e) => this.handleChange(e)} onBlur={e => this.onBlur(e)}
                        labelText="Neues Passwort"/>
            <LabelInput type="password" underlineShow={false} inputStyle={borderStyle} errorText={this.state.rptPWerrorText} onFocus={e =>this.clearErrorText(e)} name="repeatPassword" labelTitle="Passwort wiederholen"
                        value={this.state.repeatPassword} onChange={(e) => this.handleChange(e)} onBlur={e => this.onBlur(e)}
                        labelText="Passwort wiederholen"/>
            <center><RaisedButton secondary={true} label="Passwort ändern" style={buttonStyle}
                                  onClick={() => this.validateInput()}/></center>
        </div>);
    }
}

