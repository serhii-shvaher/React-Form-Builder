import React from 'react';

export default React.createClass({
    render() {
        const { title, placeholder } = this.props;
        return (
            <div>
                <label>{title}</label>
                <input type="text" placeholder={placeholder} />
            </div>
        )
    }
});