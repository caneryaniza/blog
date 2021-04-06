import React from 'react';

import BottomLeft from './Sides/BottomLeft';
import BottomRight from './Sides/BottomRight';

import './Bottom.css';

const Bottom = () =>{
    return (
        <div className="container  footer__bottom">
            <BottomLeft/>
            <BottomRight/>
        </div>
    );
}

export default Bottom;
