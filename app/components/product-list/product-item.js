import React from 'react';

export default React.createClass({
    propTypes: {
        product: React.PropTypes.object.isRequired
    },

    render() {
        const { product } = this.props;
        return (
            <div>{product.id} - {product.name}</div>
        );
    }
});