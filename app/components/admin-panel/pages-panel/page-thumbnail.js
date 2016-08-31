import React from 'react';
import classnames from 'classnames';

export default React.createClass({
    propTypes: {
        page: React.PropTypes.object,
        pageIndex: React.PropTypes.number,
        onClick: React.PropTypes.func,
        isSelected: React.PropTypes.bool
    },
    onClick() {
        this.props.onClick(this.props.pageIndex);
    },
    render() {
        const { page, isSelected } = this.props;
        const classNames = classnames(
            'page-thumbnail',
            {
                'page-thumbnail--selected': isSelected
            }
        );

        return <div className={classNames} onClick={this.onClick}>{page.title}</div>
    }
});