import React from 'react';
import InputElement from './input';
import TextareaElement from './textarea';
import './page-content.scss';

export default React.createClass({
    propTypes: {
        page: React.PropTypes.object,
        pageIndex: React.PropTypes.number,
        setPageTitle: React.PropTypes.func,
        setElementTitle: React.PropTypes.func
    },
    onPageTitleChange(event) {
        const { value } = event.target;

        this.props.setPageTitle(this.props.pageIndex, event.target.value);
    },
    getElement(elementType) {
        switch (elementType) {
            case 'input':
                return InputElement;
            case 'textarea':
                return TextareaElement;
        }
    },
    render() {
        const { page, setElementTitle, setElementPlaceholder } = this.props;
        return (
            <div className="page-content">
                <h3>Page settings</h3>

                <label htmlFor="page-title">Page title</label>
                <input id="page-title" value={page.title} onChange={this.onPageTitleChange}/>
                <div className="page-content_elements">
                    <h4>Page elements</h4>
                    {page.elements.map((element, index) => {
                        const ElementComponent = this.getElement(element.type);
                        return (
                            <ElementComponent
                                key={index}
                                {...element}
                                setElementTitle={setElementTitle}
                                setElementPlaceholder={setElementPlaceholder}
                            />);
                    })}
                </div>
            </div>
        );
    }
});
