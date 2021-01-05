import React from 'react';
import './custom-button-card.style.scss';

const CustomButtonCard = ({classname, imageURL, imageText}) => {
    return(
        <div className="custom-button-card">
            <img className={classname} src={imageURL} alt={imageText} />
        </div>
    );
}

export default CustomButtonCard;