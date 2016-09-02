import React from 'react';

export default React.createClass({
    propTypes: {
        element: React.PropTypes.object,
        setElementTitle: React.PropTypes.func,
        setElementPlaceholder: React.PropTypes.func
    },
    getInitialState() {
        return {
            isLabelEditing: false
        }
    },
    getLabel() {
        const { isLabelEditing } = this.state;
        const { element } = this.props;

        if (isLabelEditing) {
            return <input autoFocus type="text" value={element.get('title')} onBlur={this.onTitleBlur} onChange={this.onTitleChange} />;
        }

        return <label onFocus={this.editLabel} onClick={this.editLabel}>{element.get('title')}</label>;

    },
    onPlaceholderChange(event) {
        this.props.setElementPlaceholder(this.props.element.get('id'), event.target.value);
    },

    onTitleBlur(e) {
        this.setState({
            isLabelEditing: false
        });
    },

    onTitleChange(event) {
        this.props.setElementTitle(this.props.element.get('id'), event.target.value);
    },

    editLabel(e) {
        this.setState({
            isLabelEditing: true
        });
    },
    render() {
        const { element } = this.props;

        return (
            <div className="page-content_input">
                {this.getLabel()}
                <input type="text" value={element.get('placeholder')} onChange={this.onPlaceholderChange}/>
            </div>
        );
    }
});