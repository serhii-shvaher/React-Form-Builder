export const PRODUCT_ADD_PAGE       = 'PRODUCT_ADD_PAGE';
export const PRODUCT_DELETE_PAGE    = 'PRODUCT_DELETE_PAGE';
export const PRODUCT_SELECT_PAGE    = 'PRODUCT_SELECT_PAGE';
export const PRODUCT_PAGE_SET_TITLE = 'PRODUCT_PAGE_SET_TITLE';
export const PRODUCT_PAGE_ADD_INPUT = 'PRODUCT_PAGE_ADD_INPUT';
export const PRODUCT_PAGE_ADD_TEXTAREA   = 'PRODUCT_PAGE_ADD_TEXTAREA';

export function addPage() {
    return {
        type: PRODUCT_ADD_PAGE
    };
}


export function deletePage(index) {
    return {
        type: PRODUCT_DELETE_PAGE,
        index
    }
}

export function selectPage(index) {
    return {
        type: PRODUCT_SELECT_PAGE,
        index
    }
}

export function setPageTitle(pageIndex, title) {
    return {
        type: PRODUCT_PAGE_SET_TITLE,
        pageIndex,
        title
    }
}

export function addInput() {
    return {
        type: PRODUCT_PAGE_ADD_INPUT,
        elementType: 'input'
    };
}

export function addTextarea() {
    return {
        type: PRODUCT_PAGE_ADD_TEXTAREA,
        elementType: 'textarea'
    };
}

