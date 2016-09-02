import React from 'react';
import ProductItem from './product-item';

export default React.createClass({
    propTypes: {
        products: React.PropTypes.object
    },

    render() {
        const { products } = this.props;

        if (!products.size) {
            return (<p>No products yet...</p>);
        }
        return (
            <div className="product-list">
                <h2>Product list</h2>
                {products.map((product, index) => <ProductItem key={index} product={product} />)}
            </div>
        );
    }
});