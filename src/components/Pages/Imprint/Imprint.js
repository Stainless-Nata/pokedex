import React from 'react'

import { imprint } from './imprint_data'
import './Imprint.css';
import Scroll from '../../Scroll';



const Imprint = () => {
    return <div className="Imprint tc dib br3 pa3 ma2 bw2 shadow-5"><Scroll><p>{imprint.text}</p></Scroll></div>
}

export default Imprint;
