import React from 'react';
import { Link } from 'react-router';
export default React.createClass({
    propTypes: {
        saveProduct: React.PropTypes.func
    },
    render() {
        return (
            <div className="admin-panel__toolbar">
                <Link to="/">
                    <button>&#8672; Product List</button>
                </Link>
                <Link to="/" onClick={this.props.saveProduct}>
                    <button>&#9775; Save Product</button>
                </Link>

            </div>
        );
    }
});