import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                aria-label='Search People'
                className="pa3 ba b--green bg-lightest-blue"
                type='search'
                placeholder='search people'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;