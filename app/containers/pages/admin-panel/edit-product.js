import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditProduct from './../../../components/admin-panel/admin-panel';
import EditProductSelector from './../../../selectors/pages/admin-panel/edit-product';
import { addPage, deletePage, selectPage, setPageTitle, addInput, addTextarea } from './../../../actions/product';
import { setElementTitle, setElementPlaceholder } from './../../../actions/element';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    addPage,
    addInput,
    addTextarea,
    deletePage,
    selectPage,
    setPageTitle,
    setElementTitle,
    setElementPlaceholder
}, dispatch));
export default connect(EditProductSelector, mapDispatchToProps)(EditProduct);