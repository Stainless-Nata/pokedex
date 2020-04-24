import React from 'react';

import './SearchBox.css';

const SearchBox = ({ setSearchChange }) => {
    return (
        <div className="pa1">
            <input
                aria-label='Search Characters'
                className="pa3 searchBox"
                type='search'
                placeholder='Search characters'
                onChange={(e) => setSearchChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBox;