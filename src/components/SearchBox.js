import React from 'react';

import './SearchBox.css';

const SearchBox = ({ setSearchChange }) => {
    return (
        <div className="searchboxWrapper">
            <input
                aria-label='Search Characters'
                className="searchBox"
                type='search'
                placeholder='SEARCH'
                onChange={(e) => setSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBox;