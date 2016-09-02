import React from 'react';

import InputElement from './elements/input';
import TextareaElement from './elements/textarea';

const elements = {
    'input': InputElement,
    'textarea': TextareaElement
};

export default React.createClass({
    propTypes: {
        page: React.PropTypes.object,
        isLastPage: React.PropTypes.bool,
        nextPage: React.PropTypes.func

    },
    getElementComponent(element) {
        return elements[element.type];
    },
    getNextButton() {
        if (!this.props.isLastPage) {
            return (<button onClick={this.props.nextPage}>Next</button>);
        }

        return null;
    },
    getElements() {
        const { page } = this.props;

        if (!page.elements.length) {
            return <p>No elements, no cry (^.^)</p>
        }

        return page.elements.map((element, index) => {
            const Element = this.getElementComponent(element);
            return <Element {...element} key={index}/>
        })
    },
    render() {
        return (
            <div className="product-page">
                {this.getElements()}
                {this.getNextButton()}
            </div>
        );
    }
});