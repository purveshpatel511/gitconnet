import React from 'react';
import './cancel-button.style.scss';

const CancelButton = ({onClick}) => {
    return(
        <button className="cancel-button" onClick={onClick}>X</button>
    );
}

export default CancelButton;