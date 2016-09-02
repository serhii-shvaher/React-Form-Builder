import React from 'react';
import PageThumbnail from './page-thumbnail';
import './pages-panel.scss';

export default React.createClass({
    propTypes: {
        pages: React.PropTypes.object,
        selectedPageIndex: React.PropTypes.number,
        addPage: React.PropTypes.func,
        deletePage: React.PropTypes.func,
        selectPage: React.PropTypes.func
    },
    getInitialState() {
        return {
            minPagesNumber: this.props.pages.size
        }
    },
    onPageCountChanged(event) {
        const { pages } = this.props;
        const pageAmount = event.target.valueAsNumber;

        if (pageAmount > pages.size) {
            this.props.addPage();
        } else {
            this.props.deletePage();
        }
    },
    onPageClick(index) {
        this.props.selectPage(index);
    },
    getPagePreviews() {
        const { pages, selectedPageIndex } = this.props;

        return pages.map((page, index) => {

            return <PageThumbnail
                key={index}
                page={page}
                pageIndex={index}
                isSelected={index === selectedPageIndex}
                onClick={this.onPageClick}
            /> })

    },
    render() {
        const { pages } = this.props;
        const { minPagesNumber } = this.state;

        const pagesCount = pages.size;

        return (
            <div>
                <h3>Pages</h3>
                <input type="range" min={minPagesNumber} max="10" step="1" value={pagesCount} onChange={this.onPageCountChanged}/>
                <span>{pagesCount}</span>
                <div className="page-thumbnails">
                    {this.getPagePreviews()}
                </div>
            </div>
        );
    }
});
