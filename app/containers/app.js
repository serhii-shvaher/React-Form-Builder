import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';

import appSelector from './../selectors/app';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
}, dispatch));

export default connect(appSelector, mapDispatchToProps)(App);
