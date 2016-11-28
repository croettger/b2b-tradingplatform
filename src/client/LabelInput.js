import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class LabelInput extends React.Component {
    render() {
        return <div>
            <label htmlFor="label">{this.props.labelTitle}</label>
            <br/>
            <MuiThemeProvider>
                <TextField id="textfield" />
            </MuiThemeProvider>
        </div>;
    }
}