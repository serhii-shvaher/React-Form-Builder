import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PreviewProduct from './../../../components/preview-product/preview-product';
import EditProductSelector from './../../../selectors/pages/admin-panel/edit-product';
import { setElementTitle, setElementPlaceholder } from './../../../actions/element';

import {
    addPage,
    addInput,
    addTextarea,
    deletePage,
    saveProduct,
    selectPage,
    setProductName,
    setPageTitle,
} from './../../../actions/product';



const mapDispatchToProps = (dispatch) => (bindActionCreators({
    addPage,
    addInput,
    addTextarea,
    deletePage,
    saveProduct,
    setProductName,
    selectPage,
    setPageTitle,
    setElementTitle,
    setElementPlaceholder
}, dispatch));

export default connect(EditProductSelector, mapDispatchToProps)(PreviewProduct);