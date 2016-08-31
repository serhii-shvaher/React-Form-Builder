// @flow
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { routerReducer } from 'react-router-redux';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);


function configureStore(initialState: Object) {

    const reducers = combineReducers({
        reducer
    });
    const store = createStoreWithMiddleware(reducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

export default configureStore;
