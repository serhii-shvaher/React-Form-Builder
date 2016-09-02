import React from 'react';
import findIndex from 'lodash/findIndex';
import ProductPages from './product-pages';
import ProductPagesNavigation from './product-pages-navigation';
import { Link } from 'react-router';
import './preview-product.scss';

export default React.createClass({
    propTypes: {
        products: React.PropTypes.array
    },
    getInitialState() {
        const { products, params } = this.props;

        const productIndex = findIndex(products, { id: params.id });
        const product = products[productIndex];

        return {
            selectedPageIndex: 0,
            product
        };
    },
    nextPage() {
        const { product, selectedPageIndex } = this.state;

        if (selectedPageIndex < product.pages.length - 1) {
            this.setState({
                selectedPageIndex: selectedPageIndex + 1
            });
        }
    },

    render() {
        const { selectedPageIndex, product } = this.state;

        if (!product) {
            return <h2 className="preview-product-view">Product not found /(~.~)\</h2>
        }

        const isLastPage = (selectedPageIndex === product.pages.length - 1);

        return (
            <div className="preview-product-view">
                <Link to="/">
                    <button>&#8672; Product List</button>
                </Link>

                <h1>{product.name}</h1>

                <ProductPagesNavigation
                    pages={product.pages}
                    selectedPageIndex={selectedPageIndex}
                />

                <ProductPages
                    pages={product.pages}
                    selectedPageIndex={selectedPageIndex}
                    isLastPage={isLastPage}
                    nextPage={this.nextPage}
                />
            </div>
        );
    }
});
