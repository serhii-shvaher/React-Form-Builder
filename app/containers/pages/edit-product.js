import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EditProduct from './../../components/admin-panel/admin-panel';
import EditProductSelector from './../../selectors/pages/edit-product';
import { addPage, deletePage, selectPage, setPageTitle, addInput } from './../../actions/product';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    addPage,
    deletePage,
    selectPage,
    setPageTitle,
    addInput
}, dispatch));
export default connect(EditProductSelector, mapDispatchToProps)(EditProduct);