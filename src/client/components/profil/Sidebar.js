/**
 * Created by Christoph on 21.12.2016.
 */
import React from 'react';

/*Components */
import Address from './../person_data/Address';
import EditPassword from './EditPassword';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

export default class Sidebar extends React.Component
{

    render()
    {
        /* Abstand zwischen EditPassword und Adress */
        const style = {marginTop: '20px',};

        return <Paper zDepth={1} style={this.props.style}>
            <center><Avatar src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" size={200} /></center>
            <Address labelTitle="Name des Unternehmens"/>
            <EditPassword style={style}/>
        </Paper>;

    }
}