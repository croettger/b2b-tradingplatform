/**
 * Created by Igor Stellmach on 10.12.2016.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Komponente für Label und TextField
export default class LabelInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {zeichen: '', errorText: props.errorText, num: props.num} // Zustand --> Anzahl eingegebener Zeichen
    }

    //Erlaubt nur Zahle und Leerzeichen, wird ein Buchstabe eingegeben, kommt eine Meldung und die Eingabe wird zurückgesetzt
    allowOnlyNumbers(event) {

        let errorText1='Nur Zahlen eingeben!'
            if (!event.target.value.match(/^[0-9]+$/) && event.target.value !='')
            {
                //Buchstabe wird am Ende der Zeichenkette gelöscht
                event.target.value=event.target.value.substring(0,event.target.value.length-1);

                event.target.focus();
                this.setState({errorText: errorText1});
            }
    }
    allowOnlyLetters(event) {
        let errorText='Nur Buchstaben eingeben!'
        if (!event.target.value.match(/^[a-zA-Z\s.]+$/) && event.target.value !='')
        {
            //Zahl wird am Ende der Zeichenkette gelöscht
            event.target.value=event.target.value.substring(0,event.target.value.length-1);

            event.target.focus();
            this.setState({errorText: errorText})
        }
    }

    // Methode liefert die Anzahl der noch verbleibenden Zeichen.
    getCharsRemaining() {
        return this.props.maxLength-this.state.zeichen.length;
    }

    // Methode liefert true wenn die Zeichen noch eingegeben werden können.
    hasRemainingChars() {
        return this.getCharsRemaining() >= 0;
    }

    // Methode verwaltet den Zustand --> Anzahl der Zeichen.
    charCountChange(event) {
        {(this.state.num)? this.allowOnlyNumbers(event) : this.allowOnlyLetters(event) }
        this.setState({zeichen: event.target.value});
    }
    //Prüft ob onChange gesetzt ist. Wenn nicht dann wird methode charCountChange zurückgeliefert
    checkOnChange() {
        if(this.props.onChange!=null)
            return this.props.onChange;
        else
            return (e)=>this.charCountChange(e);
    }

    render() {

        return <div>
            <label htmlFor="label" style={this.props.style}>{this.props.labelTitle}</label><br/>
            <MuiThemeProvider>
                <TextField
                           hintText={this.props.labelText}      // Hinweis in dem Textfield
                           type={this.props.type}               // Typ des TextFields --> firstSecondName/password
                           maxLength = {this.props.maxLength}   // Länge der Eingabe
                           fullWidth={this.props.fullWidth}     // Gesamtbreite für TextField

                           /* floatingLabelText --> Ist der TextField leer, so ist auch floatingLabelText nicht aktiv. Wenn mind. 1 Zeichen
                            * eingegeben wird, dann erscheint floatingLabelText und zeigt die Anzahl noch zu verbleidenen Zeichen
                            * Die isNaN-Funktion prüft dabei auch noch, ob Parameter maxLength gesetzt wurde(bei true --> NaN).
                            * Ist maxLength nicht gesetzt so wird die Eigenschaft floatingLabelText garnicht aktiv!*/
                           floatingLabelText={this.getCharsRemaining()==this.props.maxLength || isNaN(this.props.maxLength) ? '' : 'Noch ' + this.getCharsRemaining() + ' zeichen: ' }
                           floatingLabelStyle={this.props.floatingLabelStyle}
                           floatingLabelFocusStyle={this.props.floatingLabelFocusStyle}
                           underlineShow={this.props.underlineShow}
                           inputStyle={this.props.inputStyle}
                           style={this.props.style}
                           //style ={this.props.style}
                           /* Eigenschaften des mehrzeiligen TextFields. Dafür muss multiLine = true gesetzt werden.
                            * Mit rows kann Anzahl der sichtbaren Zeilen angegeben werden.
                            * textareaStyle funktioniert nur wenn multiLine = true ist und ist für Styling zuständig!!!*/
                           multiLine = {this.props.inputMultiLine}  // Mehrere Zeilen.
                           rows = {this.props.rows}
                           textareaStyle={{borderStyle: 'solid', borderWidth: '1px', display: 'inline-block'}} // Rahmen
                           errorStyle={this.props.errorStyle}
                           errorText={(this.props.errorText!=null) ? this.props.errorText : this.state.errorText}
                           id = {this.props.id}
                           onChange={this.checkOnChange()}  // Verwaltung der Zeichenanzahl bei der Eingabe
                />
            </MuiThemeProvider>
        </div>;
    }
}