import uuid from 'uuid';

import { PRODUCT_ADD_PAGE, PRODUCT_DELETE_PAGE, PRODUCT_SELECT_PAGE, PRODUCT_PAGE_SET_TITLE, PRODUCT_PAGE_ADD_INPUT } from './../actions/product';
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
                }
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
            pages[state.selectedPageIndex].elements.push({
                id: uuid.v4(),
                type: 'input',
                title: 'title',
                placeholder: 'placeholder'
            });

            return Object.assign({}, state, {
                product: {
                    pages
                }
            });

        default:
            return state;
    }
}