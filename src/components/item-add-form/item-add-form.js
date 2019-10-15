import React, {Component} from 'react';

import './item-add-form.css';

class ItemAddForm extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('Hello World')}>
                    Add Item
                </button>
            </div>
        )
    }
}

export default ItemAddForm;