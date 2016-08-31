import React from 'react';

export default React.createClass({
    render() {
        return <button onClick={this.props.onClick}>Input</button>
    }
});