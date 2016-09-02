import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Immutable from 'immutable';
//import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';
import EditProduct from './containers/pages/edit-product';
import PreviewProduct from './containers/pages/preview-product';
import configureStore from './store/configure-store';
import 'es6-promise';

import './../assets/styles/main.scss';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

//injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
            <Route path="/product-preview/:id" component={PreviewProduct} />
            <Route path="/product/" component={EditProduct} />
            <Route path="/product/:id" component={EditProduct} />
        </Router>
    </Provider>, document.getElementById('app')
);
