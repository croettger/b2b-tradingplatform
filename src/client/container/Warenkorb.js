/**
 * Created by Igci on 18.12.2016.
 */

import Produkt from './components/product/Produkt';

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