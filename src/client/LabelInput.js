/**
 * Created by Igor Stellmach on 10.12.2016.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Komponente für Label und TextField
export default class LabelInput extends React.Component {
    constructor() {
        super();
        this.state = {zeichen: ''} // Zustand --> Anzahl eingegebener Zeichen
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
        this.setState({zeichen: event.target.value});
    }

    render() {
        return <div>
            <label htmlFor="label" style={{color: '#006064'}}>{this.props.labelTitle}</label><br/>
            <MuiThemeProvider>
                <TextField id="textfield"
                           hintText={this.props.labelText}      // Hinweis in dem Textfield
                           type={this.props.type}               // Typ des TextFields --> text/password
                           maxLength = {this.props.maxLength}   // Länge der Eingabe
                           fullWidth={this.props.fullWidth}     // Gesamtbreite für TextField

                           /* floatingLabelText --> Ist der TextField leer, so ist auch floatingLabelText nicht aktiv. Wenn mind. 1 Zeichen
                            * eingegeben wird, dann erscheint floatingLabelText und zeigt die Anzahl noch zu verbleidenen Zeichen
                            * Die isNaN-Funktion prüft dabei auch noch, ob Parameter maxLength gesetzt wurde(bei true --> NaN).
                            * Ist maxLength nicht gesetzt so wird die Eigenschaft floatingLabelText garnicht aktiv!*/
                           floatingLabelText={this.getCharsRemaining()==this.props.maxLength || isNaN(this.props.maxLength) ? '' : 'Noch ' + this.getCharsRemaining() + ' zeichen: ' }

                           /* Eigenschaften des mehrzeiligen TextFields. Dafür muss multiLine = true gesetzt werden.
                            * Mit rows kann Anzahl der sichtbaren Zeilen angegeben werden.
                            * textareaStyle funktioniert nur wenn multiLine = true ist und ist für Styling zuständig!!!*/
                           multiLine = {this.props.inputMultiLine}  // Mehrere Zeilen.
                           rows = {this.props.rows}
                           textareaStyle={{borderStyle: 'solid', borderWidth: '1px', display: 'inline-block'}} // Rahmen

                           onChange={(e)=>this.charCountChange(e)}  // Verwaltung der Zeichenanzahl bei der Eingabe
                />
            </MuiThemeProvider>
        </div>;
    }
}