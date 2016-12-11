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

    render() {
        // Styling für GridList
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
            },
            titleStyle: {
                color: 'rgb(0, 188, 212)',
            },
        };

        // Test Bilder
        const tilesData = [
            {
                img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                title: 'Produktfoto 1',
            },
            {
                img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                title: 'Produktfoto 2',
            },
            {
                img: 'http://www.caravanparkproducts.co.uk/advtiserlogos/no-image.jpg',
                title: 'Produktfoto 3',
            }
        ];

        return <div>
        <GridList style={styles.gridList} cols={2.2}>
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
            <AddFoto hoverColor={'red'}/>
        </div>
    }
}