import React from 'react';
/*
Scroll is a wrapping component
*/ 
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
            {props.children}        {/* scroll will use it's children to render here*/}
        </div>
    );
};

export default Scroll;