import React from 'react';
/*
Scroll is a wrapping component
*/

import './Scroll.css';

const Scroll = (props) => {
    const { scrollContainer } = props;
    return (
        <div ref={scrollContainer} className="scrollContainer">
            {props.children}        {/* scroll will use it's children to render here*/}
        </div>
    );
}


export default Scroll;