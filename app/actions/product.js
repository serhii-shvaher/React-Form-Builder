export const PRODUCT_ADD_PAGE            = 'PRODUCT_ADD_PAGE';
export const PRODUCT_DELETE_PAGE         = 'PRODUCT_DELETE_PAGE';
export const PRODUCT_SELECT_PAGE         = 'PRODUCT_SELECT_PAGE';
export const PRODUCT_PAGE_SET_TITLE      = 'PRODUCT_PAGE_SET_TITLE';
export const PRODUCT_PAGE_ADD_INPUT      = 'PRODUCT_PAGE_ADD_INPUT';
export const PRODUCT_PAGE_ADD_TEXTAREA   = 'PRODUCT_PAGE_ADD_TEXTAREA';
export const PRODUCT_SAVE                = 'PRODUCT_SAVE';
export const PRODUCT_CREATE              = 'PRODUCT_CREATE';
export const PRODUCT_SET_NAME            = 'PRODUCT_SET_NAME';

export function addPage() {
    return {
        type: PRODUCT_ADD_PAGE
    };
}


export function deletePage() {
    return {
        type: PRODUCT_DELETE_PAGE
    };
}

export function selectPage(index) {
    return {
        type: PRODUCT_SELECT_PAGE,
        index
    };
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

export function createProduct() {
    return {
        type: PRODUCT_CREATE
    }
}

export function saveProduct(product) {
    return {
        type: PRODUCT_SAVE,
        product
    }
}

export function setProductName(name) {
    return {
        type: PRODUCT_SET_NAME,
        name
    };
}