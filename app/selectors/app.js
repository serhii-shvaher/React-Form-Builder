import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    products: (state) => {
        console.log('selector ', state.products);
        return state.products;
    }
});
