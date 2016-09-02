import assign from 'lodash/assign';
import omit from 'lodash/omit';
import { routerReducer } from 'react-router-redux';
import productsReducer from './products';
import adminPanelReducer from './admin-panel';
import uuid from 'uuid';
import Immutable from 'immutable';

const defaultState = {
    adminPanel: Immutable.fromJS({
        product: {
            id: uuid.v4(),
            name: 'Product name',
            pages: [{
                title: 'First page',
                elements: []
            }]
        },
        selectedPageIndex: 0
    }),
    products: Immutable.List()
};

const rootReducer = (state:Object = defaultState, action:Object) => {
    return assign({}, state, {
        routing: routerReducer(state.routing, action),
        products: productsReducer(state.products, action),
        adminPanel: adminPanelReducer(state, action)
    });
};

export default rootReducer;
