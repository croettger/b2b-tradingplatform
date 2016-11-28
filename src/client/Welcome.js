import React from 'react';
export default class Welcome extends React.Component {
    render() {
        return <div>
                <h1>Hello YOU, {this.props.name}</h1><br/>
                <p>Noch ein weiteres Element</p>
                </div>;
    }

}