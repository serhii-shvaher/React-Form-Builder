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

const store = configureStore({"adminPanel":{"product":{"name":"Third product","pages":[{"title":"First page","elements":[{"id":"87afc787-f426-44e7-be93-adc5c180858d","type":"input","title":"title","placeholder":"placeholder"}]},{"title":"Page 2","elements":[{"id":"bc8debbd-e27a-44b6-bfb4-232541218fa7","type":"textarea","title":"title","placeholder":"placeholder"}]},{"title":"Page 3","elements":[{"id":"f3e99b3f-bdb7-44de-b2fd-5d887abb5ea2","type":"input","title":"title","placeholder":"placeholder"},{"id":"36f227c9-c797-4cf5-b2b3-7d51304bd0bc","type":"input","title":"title","placeholder":"placeholder"}]}],"id":"137ff6b0-6ca5-4d2f-920b-6b2c162f5f20"},"selectedPageIndex":2},"products":[{"name":"Third product","pages":[{"title":"First page","elements":[{"id":"87afc787-f426-44e7-be93-adc5c180858d","type":"input","title":"title","placeholder":"placeholder"}]},{"title":"Page 2","elements":[{"id":"bc8debbd-e27a-44b6-bfb4-232541218fa7","type":"textarea","title":"title","placeholder":"placeholder"}]},{"title":"Page 3","elements":[{"id":"f3e99b3f-bdb7-44de-b2fd-5d887abb5ea2","type":"input","title":"title","placeholder":"placeholder"},{"id":"36f227c9-c797-4cf5-b2b3-7d51304bd0bc","type":"input","title":"title","placeholder":"placeholder"}]}],"id":"137ff6b0-6ca5-4d2f-920b-6b2c162f5f20"},{"name":"OOOOO","pages":[{"title":"First page","elements":[{"id":"fceb80c2-43d1-4fca-9954-b0cf5c11d2d7","type":"input","title":"title","placeholder":"placeholder"}]},{"title":"Page 2","elements":[{"id":"78039399-2d10-4c3e-8e66-9b188d67d48c","type":"textarea","title":"title","placeholder":"placeholder"}]}],"id":"de5f7b50-5b66-417f-a0c2-cbca2f741728"}]});

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
