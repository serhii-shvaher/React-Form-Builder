import assign from 'lodash/assign';
import omit from 'lodash/omit';
import { routerReducer } from 'react-router-redux';
import productsReducer from './products';
import adminPanelReducer from './admin-panel';
import uuid from 'uuid';

export const localStorageKey = 'FormBuilder_store';

const defaultState = {
    adminPanel: {
        product: {
            id: uuid.v4(),
            name: 'Product name',
            pages: [{
                title: 'First page',
                elements: []
            }]
        },
        selectedPageIndex: 0
    },
    products: []
};

const rootReducer = (state:Object = defaultState, action:Object) => {
    return assign({}, state, {
        routing: routerReducer(state.routing, action),
        products: productsReducer(state.products, action),
        adminPanel: adminPanelReducer(state, action)
    });
};

export default rootReducer;
