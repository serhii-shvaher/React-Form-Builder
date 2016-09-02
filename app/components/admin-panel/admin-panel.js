import React from 'react';
import PagesPanel from './pages-panel/pages-panel';
import PageContent from './page-content/page-content';
import ElementsPanel from './page-element/page-elements';
import Toolbar from './toolbar';
import { Link, hashHistory } from 'react-router';
import './admin-panel.scss';

export default React.createClass({
    name: 'AdminPanel',
    propTypes: {
        addPage: React.PropTypes.func,
        addInput: React.PropTypes.func,
        addTextarea: React.PropTypes.func,
        deletePage: React.PropTypes.func,
        product: React.PropTypes.object,
        saveProduct: React.PropTypes.func,
        selectedPageIndex: React.PropTypes.number,
        selectPage: React.PropTypes.func,
        setPageTitle: React.PropTypes.func,
        setProductName: React.PropTypes.func,
        setElementTitle: React.PropTypes.func,
        setElementPlaceholder: React.PropTypes.func
    },

    onSaveProduct() {
        this.props.saveProduct(this.props.product);
    },

    onProductNameChange(event) {
        this.props.setProductName(event.target.value);
    },

    render() {
        const {
            addPage,
            addInput,
            addTextarea,
            deletePage,
            product,
            selectedPageIndex,
            selectPage,
            setPageTitle,
            setElementTitle,
            setElementPlaceholder
        } = this.props;

        const page = product.pages[selectedPageIndex];

        return (
            <div className="admin-view">
                <div className="left-side">
                    <div className="left-top">
                        <Toolbar saveProduct={this.onSaveProduct} />
                        <div className="admin-view__product-settings">
                            <label>Page name</label>
                            <input
                                type="text"
                                value={product.name}
                                onChange={this.onProductNameChange}
                            />

                            <PagesPanel
                                pages={product.pages}
                                addPage={addPage}
                                deletePage={deletePage}
                                selectedPageIndex={selectedPageIndex}
                                selectPage={selectPage}
                            />
                        </div>


                    </div>
                    <div className="left-bottom">
                        <ElementsPanel
                            addInput={addInput}
                            addTextarea={addTextarea}
                        />
                    </div>
                </div>
                <div className="right-side">
                    <PageContent
                        page={page}
                        pageIndex={selectedPageIndex}
                        setPageTitle={setPageTitle}
                        setElementTitle={setElementTitle}
                        setElementPlaceholder={setElementPlaceholder}
                    />
                </div>
            </div>
        );
    }
})
