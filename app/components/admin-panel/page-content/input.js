import React from 'react';

export default React.createClass({
    onPlaceholderChange(event) {

    },
    render() {
        const { title, placeholder } = this.props;
        return (
            <div className="page-content_input">
                <label>{title}</label>
                <input value={placeholder} onChange={this.onPlaceholderChange}/>
            </div>
        );
    }
});