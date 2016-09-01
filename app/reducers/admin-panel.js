import uuid from 'uuid';
import findIndex from 'lodash/findIndex';

import {
    PRODUCT_ADD_PAGE,
    PRODUCT_DELETE_PAGE,
    PRODUCT_SELECT_PAGE,
    PRODUCT_PAGE_SET_TITLE,
    PRODUCT_PAGE_ADD_INPUT,
    PRODUCT_PAGE_ADD_TEXTAREA
} from './../actions/product';

import { ELEMENT_SET_TITLE, ELEMENT_SET_PLACEHOLDER } from './../actions/element';

const defaultState = {
    product: {
        pages: [{
            title: 'First page',
            elements: []
        }]
    },
    selectedPageIndex: 0
};

export default function (state = defaultState, action) {
    const pages = state.product.pages.slice();

    switch (action.type) {
        case PRODUCT_ADD_PAGE:
            return Object.assign({}, state, {
                product: {
                    pages: pages.concat({
                        title: `Page ${state.product.pages.length + 1}`,
                        elements: []
                    })
                }
            });

        case PRODUCT_DELETE_PAGE:
            const index = action.index || pages.length - 1;

            pages.splice(index, 1);

            return Object.assign({}, state, {
                product: {
                    pages
                },
                selectedPageIndex: Math.min(pages.length - 1, state.selectedPageIndex)
            });

        case PRODUCT_SELECT_PAGE:
            return Object.assign({}, state, {
                selectedPageIndex: action.index
            });

        case PRODUCT_PAGE_SET_TITLE:
            pages[action.pageIndex].title = action.title;

            return Object.assign({}, state, {
                product: {
                    pages
                }
            });

        case PRODUCT_PAGE_ADD_INPUT:
        case PRODUCT_PAGE_ADD_TEXTAREA:
            pages[state.selectedPageIndex].elements.push({
                id: uuid.v4(),
                type: action.elementType,
                title: 'title',
                placeholder: 'placeholder'
            });

            return Object.assign({}, state, {
                product: {
                    pages
                }
            });

        case ELEMENT_SET_TITLE:
        case ELEMENT_SET_PLACEHOLDER:
            const elementIndex = findIndex(pages[state.selectedPageIndex].elements, { id: action.elementID });
            pages[state.selectedPageIndex].elements[elementIndex][action.option]= action[action.option];

            return Object.assign({}, state, {
                product: {
                    pages
                }
            });




        default:
            return state;
    }
}