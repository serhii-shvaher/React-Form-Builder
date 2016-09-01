import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
    product: (state) => state.adminPanel.product,
    selectedPageIndex: (state) => state.adminPanel.selectedPageIndex
});