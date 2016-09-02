import React from 'react';
import { Link } from 'react-router';
import YAML from 'json2yaml';

export default React.createClass({
    propTypes: {
        product: React.PropTypes.object.isRequired
    },

    getExportUrl() {
        const { product } = this.props;
        const yamlText = YAML.stringify(product.toJS());

        const yamlTextBase64 = window.btoa(yamlText);

        return `data:attachment/yaml;base64,${yamlTextBase64}`;
    },

    render() {
        const { product } = this.props;

        return (
            <div className="product-list-item">
                <Link to={`/product/${product.get('id')}`}>{product.get('name')}</Link>
                <div>
                    <Link to={`/product-preview/${product.get('id')}`}>
                        <button>Preview</button>
                    </Link>
                    <a href={this.getExportUrl()} download={`${product.get('id')}.yaml`} target="_blank">
                        <button>Export</button>
                    </a>
                </div>

            </div>
        );
    }
});