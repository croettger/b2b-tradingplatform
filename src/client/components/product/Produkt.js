/**
 * Created by Igci on 01.12.2016.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactStars from 'react-stars'
import NumericInput from 'react-numeric-input';
import FontIcon from 'material-ui/FontIcon';
import ProductPictures from './ProductPictures';
import LabelInput from '../../LabelInput';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';


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
            status: this.props.status

        };
    }


    render() {

        let anzeige;
        let einkaufen;
        let warenkorb;
        let gekauft;
        let veröffentlicht;
        let unveröffentlicht;

        // Styling für den Paper
        const paperStyle = {
            borderRadius: '15px', // abgerundete Ecken
            padding: '10px',  // Innenabstand
        };

        const componentCSS = {
            border:'1px solid',
            padding: '10',
        };

        const ueberschriftCSS = {
            position: 'relative',
            margin: '10px'
        };

        const bewertungCSS = {
            position: 'relative',
            margin: '10px'
        };

        const preisCSS = {
            position: 'relative',
            padding: '10px',
        };

        const warenkorbCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            padding: '10px',
            marginRight: '10px',
            marginLeft: '10px'

        };

        const buttonsCSS = {
            position: 'relative',
            width: '200px',
            margin: '10px'
        };

        const einkaufenCSS = {
            position: 'relative',
            float: 'left',
            display: 'block',
            marginLeft: '10px'

        };

        const iconStyles = {
            marginRight: 24,
        };

        /* Wenn Einkaufen(EINKAUFEN) (Ergänzt Anzeige um Einkaufsbutton) */
        if(this.state.status == 'EINKAUFEN') {
            einkaufen = <div> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                <IconButton><ShoppingCartIcon/></IconButton>
                <RaisedButton label="Bestellen"  primary={true} style={buttonsCSS}/>
            </div>
        }

        /* Wenn Warenkorb(WARENKORB) (Ergänzt Anzeige um Menge) */

        if(this.state.status == 'WARENKORB') {
            warenkorb =
                <div style={warenkorbCSS}> {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <NumericInput size={2} />
                </div>
        }

        /* Wenn Gekauft(GEKAUFT) (Ergänzt Anzeige um Bewertungsmöglichkeit) */
        if(this.state.status == 'GEKAUFT') {
            gekauft = <RaisedButton label="Bewerten"  primary={true} style={buttonsCSS}/>
        }

        /* Wenn Veröffentlicht(VEROEFFENTLICHT) (Ergänzt Anzeige um Bearbeit- und Löschmöglichkeit) */
        if(this.state.status == 'ONLINE') {
            veröffentlicht = (
                <div > {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <RaisedButton label="Bearbeiten"  primary={true} style={buttonsCSS}/>
                    <RaisedButton label="Löschen"  primary={true} style={buttonsCSS}/>
                </div>
            )
        }

        /* Wenn Unveröffentlicht(UNVEROEFFENTLICHT) (Ergänzt Anzeige um Veröffentlich-, Bearbeit-, und Löschmöglichkeit */
        if(this.state.status == 'OFFLINE') {
            unveröffentlicht = (
                <div > {/* Div für Warenkorb. Soll Später ein Icon statt einem Button sein */}
                    <RaisedButton label="Veröffentlichen"  primary={true} style={buttonsCSS}/>
                    <Link to="/createproduct">
                        <RaisedButton label="Bearbeiten"  primary={true} style={buttonsCSS}/>
                    </Link>
                    <RaisedButton label="Löschen"  primary={true} style={buttonsCSS}/>
                </div>
            )
        }

        /* Wenn Anzeige(ANZEIGE) (Standardaufbau) */
         anzeige = (
            <div style={componentCSS}>
                <MuiThemeProvider>
                    <div style={{display: 'flex'}}>
                        <ProductPictures anzBilder="1"/>
                        <div style={{display: 'inline-block',width: '300px'}}>
                            <div style={{display: 'flex'}}>
                                <div style={ueberschriftCSS}>Überschrift</div>
                                <ReactStars count={5} size={24} color2={'#ffd700'} />
                                <div style={ueberschriftCSS}>Preis</div>
                            </div>
                            <div>
                                 <LabelInput labelTitle = {'Beschreibung:'}
                                             inputMultiLine={true}
                                             rows = {6}
                                             fullWidth = {true}
                                             style={{marginLeft: '10px'}}
                                 />
                            </div>

                        </div>
                        <div style={buttonsCSS}>
                            {warenkorb}
                            {einkaufen}
                            {gekauft}
                            {veröffentlicht}
                            {unveröffentlicht}
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )

        return (
            <div>
                <Paper id="paper" zDepth={1} style={paperStyle}>
                {anzeige}
                </Paper>
            </div>
        )
    }
}