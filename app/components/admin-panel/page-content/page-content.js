import React from 'react';
import InputElement from './input';
import './page-content.scss';

export default React.createClass({
    propTypes: {
        page: React.PropTypes.object,
        pageIndex: React.PropTypes.number,
        setTitle: React.PropTypes.func
    },
    onPageTitleChange(event) {
        const { value } = event.target;

        this.props.setTitle(this.props.pageIndex, event.target.value);
    },
    getElement(elementType) {
        switch (elementType) {
            case 'input':
                return InputElement;
        }
    },
    render() {
        const { page } = this.props;
        return (
            <div className="page-content">
                <h3>Page settings</h3>

                <label htmlFor="page-title">Page title</label>
                <input id="page-title" value={page.title} onChange={this.onPageTitleChange}/>
                <div className="page-content_elements">
                    <h4>Page elements</h4>
                    {page.elements.map((element, index) => {
                        const ElementComponent = this.getElement(element.type);
                        return <ElementComponent key={index} {...element} />;
                    })}
                </div>
            </div>
        );
    }
});
