/**
 * Created by Igci on 18.12.2016.
 */

import Produkt from './components/product/Produkt';

export default class MeineProdukte extends React.Component {

    render() {
        return (
            <div>
                <Produkt status="OFFLINE"/>
                <Produkt status="ONLINE"/>
                <Produkt status="GEKAUFT"/>
            </div>
        );
    }


}