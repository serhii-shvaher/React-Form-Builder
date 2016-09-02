import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    products: (state) => {
        return state.products;
    }
});
