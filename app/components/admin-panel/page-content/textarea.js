import React from 'react';

export default React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        setElementTitle: React.PropTypes.func,
        setElementPlaceholder: React.PropTypes.func,
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

        return <label onClick={this.onLabelClick}>{element.get('title')}</label>;

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

    onLabelClick(e) {
        this.setState({
            isLabelEditing: true
        });
    },
    render() {
        const { element } = this.props;
        return (
            <div className="page-content_input">
                {this.getLabel()}
                <textarea value={element.get('placeholder')} onChange={this.onPlaceholderChange}/>
            </div>
        );
    }
});