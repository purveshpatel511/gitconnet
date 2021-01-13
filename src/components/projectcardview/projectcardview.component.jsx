import React from 'react';
import './projectcardview.style.scss'

import CustomButton from '../custom-button/custom-button.component';
import Card from '../card/card.component';

const ProjectCardView = (props) => {
    console.log(props)
    return(
        <div className="project-card-view">
            <h2 className="project-title">{props.projectTitle}</h2>
            <span className="project-discription">{props.projectDescription}</span>
            <br/><br />
            <div className="skills-block">
                {
                    props.projectSkill.map((skill) => (
                        <Card>
                            <span className="project-skill">{skill}</span>
                        </Card>
                    ))
                }
            </div>
            <br/><br />
            {props.children}
        </div>        
    );
}

export default ProjectCardView;