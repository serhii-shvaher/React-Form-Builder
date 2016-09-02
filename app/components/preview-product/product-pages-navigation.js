import React from 'react';
import NavigationItem from './product-pages-navigation-item';

export default React.createClass({
    propTypes: {
        pages: React.PropTypes.array
    },
    render() {
        const { pages, selectedPageIndex } = this.props;

        return (
            <div>
                {pages.map((page, index) =>
                    <NavigationItem
                        page={page}
                        key={index}
                        pageIndex={index}
                        isSelected={index === selectedPageIndex}
                    />
                )}
            </div>
        )
    }
});