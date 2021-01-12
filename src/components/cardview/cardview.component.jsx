import React from 'react';
import './cardview.style.scss'

import CustomButton from '../custom-button/custom-button.component'

const CardView = (props) => {
    console.log(props)
    return(
        <div className="card-view">
            <h2 className="project-title">{props.projectTitle}</h2>
            <span className="project-discription">{props.projectDescription}</span>
 
            <h2 className="user-name">{props.user}</h2>
            <span className="collabration-request">want to collabrate with you in project <h3>{props.requestedProject}</h3>.</span>

            <h2 className="user-name">{props.user}</h2>
            <span className="contribution-request">want to collabrate with you in project <h3>{props.requestedProject}</h3>.</span>

            <br/><br />
            {props.children}
        </div>        
    );
}

export default CardView;