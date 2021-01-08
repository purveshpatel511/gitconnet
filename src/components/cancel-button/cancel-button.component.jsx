import React from 'react';
import './cancel-button.style.scss';

const CancelButton = (...otherProps) => {
    return(
        <button className="cancel-button" {...otherProps}>X</button>
    );
}

export default CancelButton;