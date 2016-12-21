/**
 * Created by Igor Stellmach on 11.12.2016.
 */

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AddFoto from 'material-ui/svg-icons/Image/add-a-photo';

//Komponente für Produktbilder
export default class ProductPictures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {anzBilder: props.anzBilder, add: props.add} // Zustand --> Anzahl eingegebener Zeichen
    }

    createTilesData() {
        var temp = null;
        if(this.props.anzBilder==1) {
            temp = [
                {
                    img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                    title: 'Produktfoto 1',
                }]
        }
        else if (this.props.anzBilder==2)
        {
            temp = [
                {
                    img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                    title: 'Produktfoto 1',
                },
                {
                    img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                    title: 'Produktfoto 1',
                }]
        }
        else
            temp = [
                {
                    img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                    title: 'Produktfoto 1',
                },
                {
                    img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                    title: 'Produktfoto 1',
                },
                {
                    img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                    title: 'Produktfoto 1',
                }
            ]
        return temp;
    }

    getAddButton()
    {
        if(this.state.add)
           return <AddFoto hoverColor={'red'}/>
    }

    render() {
        // Styling für GridList
        const styles = {
            gridList: {
                display: 'flex',
                border:'1px solid',
                flexWrap: 'nowrap',
                overflowX: 'auto',
            },
            titleStyle: {
                color: 'rgb(0, 188, 212)',
            },
        };

        // Test Bilder
        var tilesData = this.createTilesData()

        return <div>
        <GridList style={styles.gridList} cols={this.state.anzBilder}>
                        {tilesData.map((tile) => (
                            <GridTile
                                title={tile.title}
                                actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                                titleStyle={styles.titleStyle}
                                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                                <img src={tile.img}/>
                            </GridTile>
                        ))}
            </GridList>
            {this.getAddButton()}
        </div>
    }
}