import assign from 'lodash/assign';
import { routerReducer } from 'react-router-redux';
import productsReducer from './products';
import adminPanelReducer from './admin-panel';

const defaultState = {
    adminPanel: {},
    products: []
};

const rootReducer = (state:Object = defaultState, action:Object) => {
    return assign({}, state, {
        routing: routerReducer(state.routing, action),
        products: productsReducer(state.products, action),
        adminPanel: adminPanelReducer(state.adminPanel, action)
    });
};

export default rootReducer;
