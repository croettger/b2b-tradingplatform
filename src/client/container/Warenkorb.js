/**
 * Created by Igci on 18.12.2016.
 */
import React from 'react';
import Produkt from './../components/product/Produkt';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Warenkorb extends React.Component {

    render() {
        return (
            <div>
                <Produkt status="WARENKORB"/>
                <Produkt status="WARENKORB"/>
                <Produkt status="WARENKORB"/>
            </div>
        );
    }


}