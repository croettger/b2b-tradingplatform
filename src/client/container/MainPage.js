/**
 * Created by Christoph on 04.12.2016.
 */
import React from 'react';
import Produkt from './../components/product/Produkt';

export default class MainPage extends React.Component {

    render() {
        return (
            <div>
                <Produkt status="EINKAUFEN"/>
                <Produkt status="EINKAUFEN"/>
                <Produkt status="EINKAUFEN"/>
            </div>
        );
    }


}