import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    products: (state) => state.products

});