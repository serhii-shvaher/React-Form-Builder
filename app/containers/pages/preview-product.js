import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PreviewProduct from './../../components/preview-product/preview-product';
import PreviewProductSelector from './../../selectors/pages/preview-product';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
}, dispatch));

export default connect(PreviewProductSelector, mapDispatchToProps)(PreviewProduct);