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
        const { title } = this.props;

        if (isLabelEditing) {
            return <input autoFocus value={title} onBlur={this.onTitleBlur} onChange={this.onTitleChange} />;
        }

        return <label onClick={this.onLabelClick}>{title}</label>;

    },
    onPlaceholderChange(event) {
        this.props.setElementPlaceholder(this.props.id, event.target.value);
    },

    onTitleBlur(e) {
        this.setState({
            isLabelEditing: false
        });
    },

    onTitleChange(event) {
        this.props.setElementTitle(this.props.id, event.target.value);
    },

    onLabelClick(e) {
        this.setState({
            isLabelEditing: true
        });
    },
    render() {
        const { placeholder } = this.props;
        return (
            <div className="page-content_input">
                {this.getLabel()}
                <textarea value={placeholder} onChange={this.onPlaceholderChange}/>
            </div>
        );
    }
});