import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './../components/app';
import { createProduct } from './../actions/product';

import appSelector from './../selectors/app';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
    createProduct
}, dispatch));

export default connect(appSelector, mapDispatchToProps)(App);
