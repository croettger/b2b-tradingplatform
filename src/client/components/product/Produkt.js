/**
 * Created by Igci on 01.12.2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class Produkt extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            /**
             * Beispiel für einen möglichen Aufruf: ReactDOM.render(<Produkt status="WARENKORB"/>, document.getElementById('produkt'));
             * Mögliche Stati:
             * OFFLINE. Nichtveröffentlicht : wenn der Artikel hinzugefügt wurde aber noch nicht veröffentlicht wurde. Veröffentlichen, bearbeiten und löschen Button verfügbar und keine Bewertung vorhanden.
             * ONLINE. Veröffentlicht : Wenn der Artikel veröffentlicht wurde. Nur noch bearbeiten und löschen Button verfügbar und Bewertung vorhanden
             * GEKAUFT. Gekauft : Wenn der Artikel gekauft wurde. Nur der Bewerten Button verfügbar. Bewertung vorhanden.
             * WARENKORB. Einkaufswagen : Wenn der Artikel in den Einkaufswagen hinzugefügt wurde. Keine Buttons vorhanden. Dafür Menge einstellbar + Preis sichtbar. Der Preis = Artikelpreis*Menge
             * Standardmäßig. Anzeige : Wenn der Artikel angezeigt wird. Wie Einkaufswagen mit dem Unterschied, dass ein Button vorhanden ist, um in den Warenkorb zu legen.
             * */
            status: 'ANZEIGE'

        };
    }




    render() {
        let anzeige;
        let einkaufen;
        let warenkorb;
        let gekauft;
        let veroeffentlicht;
        let unveroeffentlicht;



        let actualState;
        actualState = this.props.status;

        if(actualState.length > 0){
            actualState = actualState.substr(0, 5);
        }else{
            actualState = 'ANZEIGE';
        }

        const bildCSS = {
            position: 'relative',
            float: 'left',
            color: 'blue',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };


        const ueberschriftCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'
        };


        const bewertungCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };

        const preisCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };

        const warenkorbCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };


        const textCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px',
            left: '10px'

        };

        const buttonsCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };

        const einkaufenCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };

        /* Wenn Einkaufen(EINKAUFEN) (Ergänzt Anzeige um Einkaufsbutton) */
        if('EINKAUFEN'.includes(actualState)) {
            einkaufen = (
                <div style={einkaufenCSS}> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <MuiThemeProvider>
                        <RaisedButton label="In den Warenkorb" primary={true}/>
                    </MuiThemeProvider>
                </div>
            )
        }else{
            einkaufen = '';
        }


        /* Wenn Warenkorb(WARENKORB) (Ergänzt Anzeige um Menge) */

        if('WARENKORB'.includes(actualState)) {
            warenkorb = (
                <div style={warenkorbCSS}> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    Menge
                </div>
            )
        }else{
            warenkorb = '';
        }


        /* Wenn Gekauft(GEKAUFT) (Ergänzt Anzeige um Bewertungsmöglichkeit) */
        if('GEKAUFT'.includes(actualState)) {
            gekauft = (
                <div> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <MuiThemeProvider>
                        <RaisedButton label="Bewerten"  primary={true}/>
                    </MuiThemeProvider>
                </div>
            )
        }else{
            gekauft = '';
        }


        /* Wenn Veröffentlicht(VEROEFFENTLICHT) (Ergänzt Anzeige um Bearbeit- und Löschmöglichkeit) */
        if('ONLINE'.includes(actualState)) {
            veroeffentlicht = (
                <div> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <MuiThemeProvider>
                        <RaisedButton label="Bearbeiten"  primary={true}/>
                    </MuiThemeProvider><br/>

                    <MuiThemeProvider>
                        <RaisedButton label="Löschen"  primary={true}/>
                    </MuiThemeProvider><br/>
                </div>
            )
        }else{
            veroeffentlicht = '';
        }


        /* Wenn Unveröffentlicht(UNVEROEFFENTLICHT) (Ergänzt Anzeige um Veröffentlich-, Bearbeit-, und Löschmöglichkeit */
        if('OFFLINE'.includes(actualState)) {
            unveroeffentlicht = (
                <div> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <MuiThemeProvider>
                        <RaisedButton label="Veröffentlichen"  primary={true}/>
                    </MuiThemeProvider><br/>

                    <MuiThemeProvider>
                        <RaisedButton label="Bearbeiten"  primary={true}/>
                    </MuiThemeProvider><br/>

                    <MuiThemeProvider>
                        <RaisedButton label="Löschen"  primary={true}/>
                    </MuiThemeProvider><br/>
                </div>
            )
        }else{
            unveroeffentlicht = '';
        }



        /* Wenn Anzeige(ANZEIGE) (Standardaufbau) */
        anzeige = (
            <div>
                <div style={bildCSS}>Bild</div>
                <div>
                    <div style = {ueberschriftCSS}>Überschrift</div>
                    <div style = {bewertungCSS}>Bewertung</div>
                    {warenkorb}
                    <div style = {preisCSS}>Preis</div>
                </div>

                <div style={textCSS}>TEXT BESCHREIBUNG</div>

                {einkaufen}

                <div style={buttonsCSS}>
                    {gekauft}
                    {veroeffentlicht}
                    {unveroeffentlicht}
                </div>
            </div>
        )


        return (
            <div>
                {anzeige}
            </div>
        )
    }

}