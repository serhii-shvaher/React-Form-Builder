import React from 'react';
import { Link } from 'react-router';
import YAML from 'json2yaml';
export default React.createClass({
    propTypes: {
        product: React.PropTypes.object.isRequired
    },

    exportFile() {
        const { product } = this.props;
        const yamlText = YAML.stringify(product);

        const yamlTextBase64 = window.btoa(yamlText);

        const url = `data:text/yaml;base64,${yamlTextBase64}`;

        window.open(url);
    },

    render() {
        const { product } = this.props;
        return (
            <div className="product-list-item">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
                <div>
                    <Link to={`/product-preview/${product.id}`}>
                        <button>Preview</button>
                    </Link>

                    <button onClick={this.exportFile}>Export</button>
                </div>

            </div>
        );
    }
});