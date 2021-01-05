import React from 'react';
import './cardview.style.scss'

import CustomButton from '../custom-button/custom-button.component'

const CardView = (props) => {
    return(
        <div className="card-view">
            <h2 className="project-title">Project Title</h2>
            <span className="project-discription">This is a brief discription about project.</span>
            <br/>
            <CustomButton
                title="BookMark"
            />
        </div>        
    );
}

export default CardView;