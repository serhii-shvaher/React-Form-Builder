import React from 'react';

export default React.createClass({
    render() {
        const { title } = this.props;
        return (
            <div>
                <label>{title}</label>
                <input type="text" placeholder={placeholder} />
            </div>
        )
    }
});