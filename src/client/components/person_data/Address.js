/**
 * Created by Micha on 04.12.2016.
 */
import React from 'react';
import LabelInput from '../../LabelInput';
import { blue500} from 'material-ui/styles/colors';

export default class Address extends React.Component {

    constructor(props){
        super(props);
        this.state={title: props.labelTitle,head: props.text}// prints out whatever is inside props
    }

    render() {
        let title=this.state.title;
        let head=this.state.head;

        // Styling für den Border
        const borderStyle = {border:'1px solid',height: '30px',marginTop: '33px'};
        const strasseStyle={width: '45%',  marginBottom: '-75px'};
        const nrStyle={width: '14%',marginLeft: '200px'};
        const plzStyle={width: '15%',  marginBottom: '-75px'};
        const stadtStyle={width: '45%',marginLeft: '78px'};

        return  <div>
            <font size="4">
                <strong>
                    <label>{head}</label>
                </strong>
            </font><br/>

            <LabelInput labelTitle={title} labelText={title} floatingLabelStyle={{color: '#000000'}} floatingLabelFocusStyle={{color: blue500}} underlineShow={false} inputStyle={borderStyle}></LabelInput>
            <LabelInput labelTitle="Strasse" labelText="Strasse" floatingLabelStyle={{color: '#000000'}} floatingLabelFocusStyle={{color: blue500}} underlineShow={false} inputStyle={borderStyle} style ={strasseStyle}></LabelInput>
            <LabelInput labelTitle="Nr." labelText="Nr." floatingLabelStyle={{color: '#000000'}} floatingLabelFocusStyle={{color: blue500}} underlineShow={false} inputStyle={borderStyle} style ={nrStyle}></LabelInput>
            <LabelInput labelTitle="PLZ" labelText="PLZ" floatingLabelStyle={{color: '#000000'}} floatingLabelFocusStyle={{color: blue500}} underlineShow={false} inputStyle={borderStyle} style ={plzStyle}></LabelInput>
            <LabelInput labelTitle="Stadt" labelText="Stadt" floatingLabelStyle={{color: '#000000'}} floatingLabelFocusStyle={{color: blue500}} underlineShow={false} inputStyle={borderStyle} style ={stadtStyle}></LabelInput>
            <LabelInput labelTitle="Land" labelText="Land" floatingLabelStyle={{color: '#000000'}} floatingLabelFocusStyle={{color: blue500}} underlineShow={false} inputStyle={borderStyle}></LabelInput>

        </div>
    }
}
