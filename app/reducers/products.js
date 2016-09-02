import { PRODUCT_SAVE } from './../actions/product';
import findIndex from 'lodash/findIndex';
import cloneDeep from 'lodash/clone';
import uuid from 'uuid';
export default function (state = [], action) {
    switch (action.type) {
        case PRODUCT_SAVE:
            const products = cloneDeep(state);
            let productIndex;
            const product = cloneDeep(action.product);

            if (!product.id) {
                product.id = uuid.v4();
                products.push(product);
            } else {
                productIndex = findIndex(products, { id: product.id });
                products[productIndex] = product;
            }

            return products;

        default:
            return state;
    }
};