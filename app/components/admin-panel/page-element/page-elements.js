import React from 'react';
import InputElement from './input';

export default React.createClass({
    propTypes: {
        addInput: React.PropTypes.func
    },
    render() {
        return (
            <div>
                <h3>Elements</h3>
                <InputElement onClick={this.props.addInput}/>
            </div>
        );
    }
});
