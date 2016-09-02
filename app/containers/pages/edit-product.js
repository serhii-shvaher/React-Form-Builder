import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditProduct from './../../components/admin-panel/admin-panel';
import EditProductSelector from './../../selectors/pages/edit-product';
import { setElementTitle, setElementPlaceholder } from './../../actions/element';

import {
    addPage,
    addInput,
    addTextarea,
    deletePage,
    saveProduct,
    selectPage,
    setProductName,
    setPageTitle,
} from './../../actions/product';



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

export default connect(EditProductSelector, mapDispatchToProps)(EditProduct);