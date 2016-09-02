import React from 'react';
import classnames from 'classnames';

export default React.createClass({
    propTypes: {
        page: React.PropTypes.object,
        pageIndex: React.PropTypes.number,
        isSelected: React.PropTypes.bool
    },
    render() {
        const { page, isSelected } = this.props;
        const classes = classnames('product-page__navigation-item', {
            'product-page__navigation-item--selected': isSelected
        });
        return (
            <div className={classes}>
                {page.get('title')}
            </div>
        );
    }
});