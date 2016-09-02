import React from 'react';
import ProductList from './product-list/product-list';
import Toolbar from './toolbar';
import { Link, hashHistory } from 'react-router';
import './app.scss';

export default React.createClass({
    name: 'App',

    propTypes: {
        products: React.PropTypes.array.isRequired
    },

    render() {
        const { products } = this.props;

        return (
            <div className="product-list-view">
                <Toolbar />
                <ProductList products={products} />
            </div>
        );
    }
})
