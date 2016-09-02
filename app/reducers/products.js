import { PRODUCT_SAVE } from './../actions/product';
import findIndex from 'lodash/findIndex';
import cloneDeep from 'lodash/clone';
import uuid from 'uuid';
import Immutable from 'immutable';

export default function (state = Immutable.List(), action) {
    switch (action.type) {
        case PRODUCT_SAVE:
            const updatedProducts = {};
            const updatedProduct = {};

            if (!action.product.get('id')) {
                const product = action.product.set('id', uuid.v4());

                updatedProducts.v1 = state.push(product);
            } else {
                updatedProduct.v1 = state.findEntry(p => (p.get('id') === action.product.get('id')));
                updatedProducts.v1 = state.set(updatedProduct.v1[0], Immutable.fromJS(action.product));
            }

            return updatedProducts.v1;

        default:
            return state;
    }
};