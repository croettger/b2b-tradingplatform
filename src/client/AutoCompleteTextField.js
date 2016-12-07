/**
 * Created by Christoph on 30.11.2016.
 */
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';


export default class AutoCompleteTextField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
        };
    }

    handleUpdateInput = (value) => {
        this.setState({
            // TODO: Produkte suchen
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        return (
                <AutoComplete
                    hintText={this.props.hintText}
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                    fullWidth={false}
                    />
        );
    }
}