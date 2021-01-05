import React from 'react';

import './custom-button.style.scss'

const CustomButton = ({title, type}) => {
    return(
        <button className="custom-button" type={type}>{title}</button>
    );
}

export default CustomButton;