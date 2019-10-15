import React from 'react';

import './search-panel.css';


const SearchPanel = () => {
    return (
        <div>
            <input type="text"
            className="form-control search-input"
            placeholder="type to search" />
        </div>
    );
    
};

export default SearchPanel;