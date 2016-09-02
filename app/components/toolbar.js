import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <Link to="/product/">
                    <button>Create new product</button>
                </Link>
            </div>
        );
    }
});
