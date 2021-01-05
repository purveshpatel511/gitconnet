import React from 'react';
import './skill-card.style.scss';

import CancelButton from '../cancel-button/cancel-button.component';

const SkillCard = ({imageURL, imageText, isRemove}) => {
    if(isRemove == "true"){
        return (
            <div className="skill-card">
                <img className="skill-svg" src={imageURL} alt={imageText} />
                <span className="skill-name">{imageText}</span>
                <CancelButton />
            </div>
        );
    }
    else{
        return (
            <div className="skill-card">
                <img className="skill-svg" src={imageURL} alt={imageText} />
                <span className="skill-name">{imageText}</span>
            </div>
        );
    }
}

export default SkillCard;