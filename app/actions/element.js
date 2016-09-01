export const ELEMENT_SET_TITLE = 'ELEMENT_SET_TITLE';
export const ELEMENT_SET_PLACEHOLDER = 'ELEMENT_SET_PLACEHOLDER';

export function setElementTitle(elementID, title) {
    return {
        type: ELEMENT_SET_TITLE,
        option: 'title',
        elementID,
        title
    }
}



export function setElementPlaceholder(elementID, placeholder) {
    return {
        type: ELEMENT_SET_PLACEHOLDER,
        option: 'placeholder',
        elementID,
        placeholder
    }
}