import React from 'react';
import findIndex from 'lodash/findIndex';
import ProductPages from './product-pages';
import ProductPagesNavigation from './product-pages-navigation';
import { Link } from 'react-router';
import './preview-product.scss';

export default React.createClass({
    propTypes: {
        products: React.PropTypes.object
    },
    getInitialState() {
        const { products, params } = this.props;

        const productIndex = findIndex(products, { id: params.id });
        const product = products.get(productIndex);

        return {
            selectedPageIndex: 0,
            product
        };
    },
    nextPage() {
        const { product, selectedPageIndex } = this.state;

        if (selectedPageIndex < product.get('pages').size - 1) {
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

        const pages = product.get('pages');

        const isLastPage = (selectedPageIndex === pages.size - 1);

        return (
            <div className="preview-product-view">
                <Link to="/">
                    <button>&#8672; Product List</button>
                </Link>

                <h1>{product.get('name')}</h1>

                <ProductPagesNavigation
                    pages={pages}
                    selectedPageIndex={selectedPageIndex}
                />

                <ProductPages
                    pages={pages}
                    selectedPageIndex={selectedPageIndex}
                    isLastPage={isLastPage}
                    nextPage={this.nextPage}
                />
            </div>
        );
    }
});
