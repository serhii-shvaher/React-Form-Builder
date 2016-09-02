import uuid from 'uuid';
import findIndex from 'lodash/findIndex';
import cloneDeep from 'lodash/clone';
import merge from 'lodash/merge';
import { LOCATION_CHANGE } from 'react-router-redux';

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
    adminPanel: {
        product: {
            name: 'Product name',
            pages: [{
                title: 'First page',
                elements: []
            }]
        },
        selectedPageIndex: 0
    }
};

export default function (state = defaultState, action) {
    const pages = cloneDeep(state.adminPanel.product.pages);

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
                productIndex = findIndex(state.products, { id: productId });

                if (productIndex === -1) {
                    alert('Product not found');
                    return state.adminPanel;
                }

                return {
                    product: state.products[productIndex],
                    selectedPageIndex: 0
                };
            }

            return state.adminPanel;

        case PRODUCT_SET_NAME:
            const product = cloneDeep(state.adminPanel.product);

            product.name = action.name;

            return merge({}, state.adminPanel, {
                product: product
            });

        case PRODUCT_ADD_PAGE:
            return merge({}, state.adminPanel, {
                product: {
                    pages: pages.concat({
                        title: `Page ${state.adminPanel.product.pages.length + 1}`,
                        elements: []
                    })
                }
            });

        case PRODUCT_DELETE_PAGE:
            pages.pop();

            return Object.assign({}, state.adminPanel, {
                product: {
                    pages
                },
                selectedPageIndex: Math.min(pages.length - 1, state.adminPanel.selectedPageIndex)
            });

        case PRODUCT_SELECT_PAGE:
            return merge({}, state.adminPanel, {
                selectedPageIndex: action.index
            });

        case PRODUCT_PAGE_SET_TITLE:
            pages[action.pageIndex].title = action.title;

            return merge({}, state.adminPanel, {
                product: {
                    pages
                }
            });

        case PRODUCT_PAGE_ADD_INPUT:
        case PRODUCT_PAGE_ADD_TEXTAREA:
            pages[state.adminPanel.selectedPageIndex].elements.push({
                id: uuid.v4(),
                type: action.elementType,
                title: 'title',
                placeholder: 'placeholder'
            });

            return merge({}, state.adminPanel, {
                product: {
                    pages
                }
            });

        case ELEMENT_SET_TITLE:
        case ELEMENT_SET_PLACEHOLDER:
            const elementIndex = findIndex(pages[state.adminPanel.selectedPageIndex].elements, {id: action.elementID});
            pages[state.adminPanel.selectedPageIndex].elements[elementIndex][action.option] = action[action.option];

            return merge({}, state.adminPanel, {
                product: {
                    pages
                }
            });

        default:
            return state.adminPanel;
    }
}