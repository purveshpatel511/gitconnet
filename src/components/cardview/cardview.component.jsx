import React from 'react';
import './cardview.style.scss'

import CustomButton from '../custom-button/custom-button.component'

const CardView = (props) => {
    return(
        <div className="card-view">
            <h2 className="project-title">{props.projectTitle}</h2>
            <span className="project-discription">{props.projectDescription}</span>
            <br/><br />
            {props.children}
        </div>        
    );
}

export default CardView;