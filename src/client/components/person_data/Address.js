/**
 * Created by Micha on 04.12.2016.
 */
import React from 'react';
import LabelInput from '../../LabelInput';

export default class Address extends React.Component {

    constructor(props){
        super(props);
        this.state={title: props.labelTitle,head: props.text}
    }

    render() {
        let title=this.state.title;
        let head=this.state.head;

        // Styling für den Border
        const borderStyle = {border:'1px solid',height: '25px',marginTop: '15px'};

        return  <div>
            <font size="4">
                <strong>
                    <label>{head}</label>
                </strong>
            </font><br/>

            <LabelInput labelTitle={title} labelText={title} underlineShow={false} inputStyle={borderStyle}></LabelInput>
            <div style={{display: 'flex'}}>
                <LabelInput style={{width: '190px'}} labelTitle="Strasse" labelText="Strasse" underlineShow={false} inputStyle={borderStyle}></LabelInput>
                <LabelInput style={{width: '60px', marginLeft: '5px'}} labelTitle="Nr." labelText="Nr." underlineShow={false} inputStyle={borderStyle}></LabelInput>
            </div>
            <div style={{display: 'flex'}}>
                <LabelInput style={{width: '190px'}} labelTitle="Stadt" labelText="Stadt" underlineShow={false} inputStyle={borderStyle}></LabelInput>
                <LabelInput style={{width: '60px', marginLeft: '5px'}} labelTitle="PLZ" labelText="PLZ" underlineShow={false} inputStyle={borderStyle}></LabelInput>
            </div>
            <LabelInput labelTitle="Land" labelText="Land" underlineShow={false} inputStyle={borderStyle}></LabelInput>
        </div>
    }
}