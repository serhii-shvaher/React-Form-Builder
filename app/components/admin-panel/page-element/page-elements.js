import React from 'react';

export default React.createClass({
    propTypes: {
        addInput: React.PropTypes.func,
        addTextarea: React.PropTypes.func
    },
    render() {
        return (
            <div>
                <h3>Elements</h3>
                <button onClick={this.props.addInput}>Input</button>
                <button onClick={this.props.addTextarea}>Textarea</button>

            </div>
        );
    }
});
