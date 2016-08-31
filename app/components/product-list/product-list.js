import React from 'react';
import ProductItem from './product-item';

export default React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render() {
        const { products } = this.props;
        return (
            <div>
                <h2>Product list</h2>
                {products.map(product => <ProductItem product={product} />)}
            </div>
        );
    }
});