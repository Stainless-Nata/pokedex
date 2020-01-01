import React, { Fragment } from 'react';


const Card = ({ name, email, id }) => {         //receiving props and destructuring them in the brackets
    return (
        <Fragment>
            <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;

