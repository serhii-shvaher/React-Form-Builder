import React from 'react';

export default React.createClass({
    render() {
        const { title, placeholder } = this.props;
        return (
            <div>
                <label>{title}</label>
                <textarea placeholder={placeholder} />
            </div>
        )
    }
});