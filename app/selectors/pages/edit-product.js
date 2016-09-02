import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    product: (state) => {

        return state.adminPanel.get('product'); },
    selectedPageIndex: (state) => state.adminPanel.get('selectedPageIndex')
});