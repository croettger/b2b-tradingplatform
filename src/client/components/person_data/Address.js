/**
 * Created by Micha on 04.12.2016.
 */
import React from 'react';
import LabelInput from '../../LabelInput';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Address extends React.Component {

    constructor(props){
        super(props);
        this.state={errorName: '',errorStrasse: '',errorStadt: '', errorNr: '', errorPlz: '', title: props.labelTitle,head: props.text, value: 1}
    }

    handleChange = (event, index, value) => this.setState({value});

    //Erlaubt nur Buchstaben und Leerzeichen, wird eine Zahl eingegeben, kommt eine Meldung und die Eingabe wird zurückgesetzt
    allowOnlyLetters(event) {
        let id=event.target.id;
        let errorText='Nur Buchstaben eingeben!'
        if (!event.target.value.match(/^[a-zA-Z\s.]+$/) && event.target.value !='')
        {
            //Zahl wird am Ende der Zeichenkette gelöscht
            event.target.value=event.target.value.substring(0,event.target.value.length-1);

            event.target.focus();
            this.setState(id.endsWith(1)?{errorName: errorText}:
                     id.endsWith(2)?{errorStrasse: errorText}:{errorStadt: errorText})
        }
        else {
            this.setState(id.endsWith(1)?{errorName: ''}:
                id.endsWith(2)?{errorStrasse: ''}:{errorStadt: ''})
        }
    }

    //Erlaubt nur Zahle und Leerzeichen, wird ein Buchstabe eingegeben, kommt eine Meldung und die Eingabe wird zurückgesetzt
    allowOnlyNumbers(event) {
        let id=event.target.id;
        let errorText='Nur Zahlen eingeben!'
        if (!event.target.value.match(/^[0-9]+$/) && event.target.value !='')
        {
            //Buchstabe wird am Ende der Zeichenkette gelöscht
            event.target.value=event.target.value.substring(0,event.target.value.length-1);

            event.target.focus();
            this.setState(id.endsWith(3)?{errorNr: errorText}:{errorPlz: errorText})
        }
        else {
            this.setState(id.endsWith(3)?{errorNr: ''}:{errorPlz: ''})
        }
    }

    render() {
        let title=this.state.title;
        let head=this.state.head;

        // Styling für den Border
        const borderStyle = {border:'1px solid',height: '25px',marginTop: '10px'};
        const dropBorderStyle = {border:'1px solid',height:'25px', width:'253', marginTop: '10px'};

        return  <div>
            <font size="4">
                <strong>
                    <label>{head}</label>
                </strong>
            </font><br/>

            <LabelInput id ={this.props.name+'1'} labelTitle={title} labelText={title} underlineShow={false} errorText={this.state.errorName} errorStyle={{top: '3px'}} inputStyle={borderStyle} onChange={(e)=>this.allowOnlyLetters(e)}></LabelInput>
            <div style={{display: 'flex'}}>
                <LabelInput id ={this.props.name +'2'} style={{width: '190px'}} labelTitle="Strasse" labelText="Strasse" underlineShow={false} errorText={this.state.errorStrasse} errorStyle={{top: '3px'}} inputStyle={borderStyle} onChange={(e)=>this.allowOnlyLetters(e)}></LabelInput>
                <LabelInput id ={this.props.name +'3'} style={{width: '60px', marginLeft: '5px'}} labelTitle="Nr." labelText="Nr." underlineShow={false} errorText={this.state.errorNr} errorStyle={{top: '3px'}} inputStyle={borderStyle} maxLength={5} onChange={(e)=>this.allowOnlyNumbers(e)}></LabelInput>
            </div>
            <div style={{display: 'flex'}}>
                <LabelInput id ={this.props.name +'4'} style={{width: '190px'}} labelTitle="Stadt" labelText="Stadt" underlineShow={false} errorText={this.state.errorStadt} errorStyle={{top: '3px'}} inputStyle={borderStyle} onChange={(e)=>this.allowOnlyLetters(e)}></LabelInput>
                <LabelInput id ={this.props.name +'5'} style={{width: '60px', marginLeft: '5px'}} labelTitle="PLZ" labelText="PLZ" underlineShow={false} errorText={this.state.errorPlz} errorStyle={{top: '3px'}} inputStyle={borderStyle} maxLength={5} onChange={(e)=>this.allowOnlyNumbers(e)}></LabelInput>
            </div>
            <label>Land</label><br/>
            <DropDownMenu id ={this.props.name +'6'} style={dropBorderStyle} value={this.state.value} labelStyle={{height:'0px', marginTop: '-15px'}} listStyle={{width:'233'}} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="Deutschland" />
                <MenuItem value={2} primaryText="England" />
                <MenuItem value={3} primaryText="Frankreich" />
            </DropDownMenu>
        </div>
    }
}