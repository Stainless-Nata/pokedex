import React from 'react'

import { imprint } from './imprint_data'
import './Imprint.css';
import Scroll from '../../Scroll';



const Imprint = () => {
    return (
        <div className="Imprint tc dib br3 pa3 ma2 bw2 shadow-5">
            <Scroll>
                <p>{imprint.headline}</p>
                <ol>
                    <li className="topli">Introduction
                        <ol>
                            <li>
                                This disclaimer shall govern your use of our website.
                            </li>
                            <li>
                                By using our website, you accept this disclaimer in full; accordingly, if you disagree with this disclaimer or any part of this disclaimer, you must not use our website.
                            </li>
                        </ol>
                    </li>
                    <li className="topli">
                        Credit
                        <ol>
                            <li>
                                his document was created using a template from SEQ Legal(https://seqlegal.com).
            You must retain the above credit.Use of this document without the credit is an infringement of copyright.However, you can purchase from us an equivalent document that does not include the credit.
                            </li>
                        </ol>
                    </li>
                </ol>
                <p></p>
            </Scroll>
        </div>);

}

export default Imprint;
