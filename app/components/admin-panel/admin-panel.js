import React from 'react';
import PagesPanel from './pages-panel/pages-panel';
import PageContent from './page-content/page-content';
import ElementsPanel from './page-element/page-elements';
import { Link, hashHistory } from 'react-router';
import './admin-panel.scss';

export default React.createClass({
    name: 'AdminPanel',
    propTypes: {
        product: React.PropTypes.object,
        addPage: React.PropTypes.func,
        deletePage: React.PropTypes.func,
        selectedPageIndex: React.PropTypes.number,
        selectPage: React.PropTypes.func,
        setTitle: React.PropTypes.func,
        addInput: React.PropTypes.func
    },

    render() {
        const { addPage, deletePage, product, selectedPageIndex, selectPage, setPageTitle, addInput } = this.props;
        const page = product.pages[selectedPageIndex];

        return (
            <div className="admin-view">
                <div className="left-side">
                    <div className="left-top">
                        <PagesPanel
                            pages={product.pages}
                            addPage={addPage}
                            deletePage={deletePage}
                            selectedPageIndex={selectedPageIndex}
                            selectPage={selectPage}
                        />
                    </div>
                    <div className="left-bottom">
                        <ElementsPanel addInput={addInput} />
                    </div>
                </div>
                <div className="right-side">
                    <PageContent page={page} pageIndex={selectedPageIndex} setTitle={setPageTitle} />
                </div>
            </div>
        );
    }
})
