import React from 'react';
import './user-project.style.scss';

import TextCard from '../../components/text-card/text-card.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CardGrid from '../../components/cardgrid/cardgrid.component';
import CardList from '../../components/cardlist/cardlist.component';
import Card from '../../components/card/card.component';
import CardView from '../../components/cardview/cardview.component';
import VerticalScroll from '../../components/vertical-scroll/vertical-scroll.component';
import SkillCard from '../../components/skill-card/skill-card.component';
import FormInput from '../../components/form-input/form-input.component';

class UserProject extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isAddProject: false,
            isEditProject: false,
            editProjectKey: null,
            projectsCount: 8,
            projects: [
                {
                    title: "project-1",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-2",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-3",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-4",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-5",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-6",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-7",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
                {
                    title: "project-8",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                },
            ]
        }
    }

    resetKey() {
        this.state.projects.forEach((project, i) => {
            project.key = i+1
        })
    }

    removeProject = (id) => {
        this.setState({projects: this.state.projects.filter(
            project => {return project.key !== id}
        )})
    }

    editProjectDetails= (id) => {
        console.log(id);
        console.log(this.state.projects);
        return(
            <div>
                {this.state.projects[id].title}
            </div>
        )
    }

    renderCard() {
        
    }

    renderProjects() {
        return(
            <div className="projects-section">
                <VerticalScroll height="600px">
                    <CardList>
                        {
                            this.state.projects.map(project => (
                                <CardView projectTitle={project.title} projectDescription={project.description}>
                                    <CardGrid gridColumn="1fr 1fr">
                                        <CustomButton title="Edit Details" onClick={() => (this.resetKey(),this.setState({isEditProject: true, editProjectKey: project.key}))} />
                                        <CustomButton title="Remove Project" onClick={() => (this.resetKey(),this.removeProject(project.key))} />
                                    </CardGrid>
                                </CardView>
                            ))
                        }
                    </CardList>
                </VerticalScroll>
            </div>
        )
    }

    renderChoice() {
        if(this.state.isEditProject){
            return(
                this.editProjectDetails(this.state.editProjectKey - 1)
            )
        }
        else{
            if(this.state.isAddProject){
                <h2>isAddProject</h2>
            }
            else{
                return(
                    this.renderProjects()
                )
            }
        }
    }

    render() {
        return(
            <div className="user-project">
                <div className="project-header">
                    <TextCard text="Projects" />        
                    <CustomButton title="Add Project" />
                </div>
                <br /><br />
                <Card>
                    {this.renderChoice()}
                </Card>
            </div>
        );
    }
}

export default UserProject;