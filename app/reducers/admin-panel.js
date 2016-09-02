import uuid from 'uuid';
import findIndex from 'lodash/findIndex';
import cloneDeep from 'lodash/clone';
import merge from 'lodash/merge';
import { LOCATION_CHANGE } from 'react-router-redux';
import Immutable from 'immutable';

import {
    PRODUCT_ADD_PAGE,
    PRODUCT_SET_NAME,
    PRODUCT_DELETE_PAGE,
    PRODUCT_SELECT_PAGE,
    PRODUCT_PAGE_SET_TITLE,
    PRODUCT_PAGE_ADD_INPUT,
    PRODUCT_PAGE_ADD_TEXTAREA
} from './../actions/product';

import { ELEMENT_SET_TITLE, ELEMENT_SET_PLACEHOLDER } from './../actions/element';

const defaultState = {
    adminPanel: Immutable.fromJS({
        product: {
            name: 'Product name',
            pages: [{
                title: 'First page',
                elements: []
            }]
        },
        selectedPageIndex: 0
    })
};

export default function (state = defaultState, action) {
    const pages = state.adminPanel.get('product').get('pages');
    const selectedPageIndex = state.adminPanel.get('selectedPageIndex');
    const updatedProduct = {};
    const updatedPages = {};
    const updatedPage = {};
    const updatedPageElements = {};

    switch (action.type) {

        // WARNING: this case is tricky, because I don't have access to route params here.
        // To make it beautiful, I need to rewrite routing reducer ,
        // but to be honest this task too big for a test task.

        case LOCATION_CHANGE:
            const pathname = action.payload.pathname;

            // /product/:id
            const editProductRoute = /\/product\/(.*)$/;
            const productIdMatch = pathname.match(editProductRoute);
            let productId;
            let productIndex;

            if (productIdMatch) {
                productId = productIdMatch[1];

                // if productID is null than we create new product
                if (!productId) {
                    return defaultState.adminPanel;
                }

                // check if product with productId exists
                productIndex = state.products.findEntry((p => p.get('id') === productId));

                if (!productIndex) {
                    alert('Product not found');
                    return state.adminPanel;
                }

                return Immutable.fromJS({
                    product: state.products.get(productIndex[0]),
                    selectedPageIndex: 0
                });
            }

            return state.adminPanel;

        case PRODUCT_SET_NAME:
            updatedProduct.v1 = state.adminPanel.get('product').set('name', action.name);

            return state.adminPanel.set('product', updatedProduct.v1);

        case PRODUCT_ADD_PAGE:
            updatedPages.v1 = pages.push(Immutable.fromJS({
                title: `Page ${state.adminPanel.get('product').get('pages').size + 1}`,
                elements: []
            }));

            updatedProduct.v1 = state.adminPanel.get('product').set('pages', updatedPages.v1);

            return state.adminPanel.set('product', updatedProduct.v1);

        case PRODUCT_DELETE_PAGE:
            updatedPages.v1 = pages.pop();

            updatedProduct.v1 = state.adminPanel.get('product').set('pages', updatedPages.v1);


            return state.adminPanel.merge({
                product: updatedProduct.v1,
                selectedPageIndex: Math.min(pages.size - 1, selectedPageIndex)
            });

        case PRODUCT_SELECT_PAGE:
            return state.adminPanel.set('selectedPageIndex', action.index);

        case PRODUCT_PAGE_SET_TITLE:
            updatedPage.v1 = pages.get(action.pageIndex).set('title', action.title);
            updatedPages.v1 = pages.set(action.pageIndex, updatedPage.v1);
            updatedProduct.v1 = state.adminPanel.get('product').set('pages', updatedPages.v1);

            return state.adminPanel.set('product', updatedProduct.v1);

        case PRODUCT_PAGE_ADD_INPUT:
        case PRODUCT_PAGE_ADD_TEXTAREA:
            updatedPageElements.v1 = pages
                .get(selectedPageIndex)
                .get('elements')
                .push(Immutable.fromJS({
                    id: uuid.v4(),
                    type: action.elementType,
                    title: 'title',
                    placeholder: 'placeholder'
                }));

            updatedPage.v1 = pages
                .get(selectedPageIndex)
                .set('elements', updatedPageElements.v1);

            updatedPages.v1 = pages.set(selectedPageIndex, updatedPage.v1);
            updatedProduct.v1 = state.adminPanel.get('product').set('pages', updatedPages.v1);

            return state.adminPanel.set('product', updatedProduct.v1);

        case ELEMENT_SET_TITLE:
        case ELEMENT_SET_PLACEHOLDER:
            const updatedElement = {};
            updatedElement.v1 = pages
                .get(selectedPageIndex)
                .get('elements')
                .findEntry((e => (e.get('id') === action.elementID)));

            updatedElement.v2 = updatedElement.v1[1].set(action.option, action[action.option]);
            
            updatedPageElements.v1 = pages.get(selectedPageIndex).get('elements').set(updatedElement.v1[0], updatedElement.v2);
            updatedPage.v1 = pages.get(selectedPageIndex).set('elements', updatedPageElements.v1);
            updatedPages.v1 = state.adminPanel.get('product').get('pages').set(selectedPageIndex, updatedPage.v1);
            updatedProduct.v1 = state.adminPanel.get('product').set('pages', updatedPages.v1);

            return state.adminPanel.set('product', updatedProduct.v1);

        default:
            return state.adminPanel;
    }
}