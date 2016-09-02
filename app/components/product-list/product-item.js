import React from 'react';
import { Link } from 'react-router';
export default React.createClass({
    propTypes: {
        product: React.PropTypes.object.isRequired
    },

    render() {
        const { product } = this.props;
        return (
            <div className="product-list-item">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
                <Link to={`/product-preview/${product.id}`}>
                    <button>Preview</button>
                </Link>
            </div>
        );
    }
});