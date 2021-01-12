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
import ProjectEditSkill from '../../components/project-edit-skill/project-edit-skill.component';
import CancelButton from '../../components/cancel-button/cancel-button.component';

class UserProject extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isAddProject: false,
            isEditProject: false,
            editProjectKey: null,
            tempSkill: "",
            newProjectTitle: "",
            newProjectDescription: "",
            newProjectURL: "",
            newProjectSkills: [],
            projects: [
                {
                    title: "project-1",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS","python","reactJS","python","reactJS","python","reactJS","python","reactJS","python","reactJS","python","reactJS"],
                },
                {
                    title: "project-2",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
                },
                {
                    title: "project-3",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
                },
                {
                    title: "project-4",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
                },
                {
                    title: "project-5",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
                },
                {
                    title: "project-6",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
                },
                {
                    title: "project-7",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
                },
                {
                    title: "project-8",
                    description: "This is a small description of this project-1. BEtter fit in size to avoid overflow and make CSS ugly.",
                    skills: ["python","reactJS"],
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

    addSkill = (id) => {
        this.setState(({projects}) => ({
            projects: [
                ...projects.slice(0,id),
                {
                    ...projects[id],
                    skills: this.state.projects[id].skills.concat(this.state.tempSkill),
                },
                ...projects.slice(id+1)
            ],
            tempSkill: "",
        }))
    }

    removeSkill = (remove_skill,id) => {
        this.setState(({projects}) => ({
            projects: [
                ...projects.slice(0,id),
                {
                    ...projects[id],
                    skills: this.state.projects[id].skills.filter(
                        skill => { return skill !== remove_skill}
                    )
                },
                ...projects.slice(id+1)
            ]
        }))
    }

    editProjectDetails = (id) => {
        return(
            <div className="edit-project-section">
                <CardGrid gridColumn="1fr 1fr">
                    <Card>
                        <VerticalScroll height="500px">
                            <div className="title-section">
                                <div className="title-card">
                                    <Card><h3>Title</h3></Card>
                                </div>
                                <FormInput placeholder="Enter Title" value={this.state.projects[id].title} onChange={(e) => {
                                    this.setState(({projects}) => ({
                                        projects: [
                                            ...projects.slice(0,id),
                                            {
                                                ...projects[id],
                                                title: e.target.value,
                                            },
                                            ...projects.slice(id+1)
                                        ]
                                    }))
                                }} />
                            </div>
                            <br /><br />
                            <div className="description-section">
                                <div className="title-card">
                                    <Card><h3>Description</h3></Card>
                                </div>
                                <FormInput placeholder="Enter Description" value={this.state.projects[id].description} onChange={(e) => {
                                    this.setState(({projects}) => ({
                                        projects: [
                                            ...projects.slice(0,id),
                                            {
                                                ...projects[id],
                                                description: e.target.value,
                                            },
                                            ...projects.slice(id+1)
                                        ]
                                    }))
                                }} />
                            </div>
                        </VerticalScroll>
                    </Card>
                    <Card>
                        <h2 className="inner-header">Required Skill</h2>
                        <div className="add-new-skill">
                            <FormInput placeholder="Skill" value={this.state.tempSkill} onChange={e => {this.setState({tempSkill: e.target.value})}} />
                            <CustomButton title="Add Skill" onClick={() => this.addSkill(id)}/>
                        </div>
                        <br /><br />
                        <div className="user-project-edit-skill">
                            <VerticalScroll height="300px">
                                <CardGrid gridColumn="1fr 1fr 1fr">
                                    {
                                        this.state.projects[id].skills.map(skill => {
                                            return (
                                                <ProjectEditSkill skill={skill}>
                                                    <CancelButton onClick={() => this.removeSkill(skill,id)} />
                                                </ProjectEditSkill>   
                                            )
                                        })
                                    }
                                </CardGrid>
                            </VerticalScroll>
                        </div>
                    </Card>
                </CardGrid>
                <div className="custom-save">
                    <CustomButton title="Save Details" onClick={() => {this.setState({isEditProject: false})}} />
                </div>
            </div>
        )
    }

    addNewProject = () => {
        return(
            <div className="add-project-section">
                <CardGrid gridColumn="1fr 1fr">
                    <Card>
                        <VerticalScroll height="500px">
                            <div className="title-section">
                                <div className="title-card">
                                    <Card><h3>Title</h3></Card>
                                </div>
                                <FormInput placeholder="Enter Title" value={this.state.newProjectTitle} onChange={(e) => {this.setState({newProjectTitle: e.target.value})}} />
                            </div>
                            <br /><br />
                            <div className="description-section">
                                <div className="title-card">
                                    <Card><h3>Description</h3></Card>
                                </div>
                                <FormInput placeholder="Enter Description" value={this.state.newProjectDescription} onChange={(e) => {this.setState({newProjectDescription: e.target.value})}} />
                            </div>
                            <div className="project-url-section">
                                <div className="title-card">
                                    <Card><h3>Description</h3></Card>
                                </div>
                                <FormInput placeholder="Enter Project URL" value={this.state.newProjectURL} onChange={(e) => {this.setState({newProjectURL: e.target.value})}} />
                            </div>
                        </VerticalScroll>
                    </Card>
                    <Card>
                        <h2 className="inner-header">Required Skill</h2>
                        <div className="add-new-skill">
                            <FormInput placeholder="Skill" value={this.state.tempSkill} onChange={e => {this.setState({tempSkill: e.target.value})}} />
                            <CustomButton title="Add Skill" onClick={() => {this.setState({newProjectSkills: this.state.newProjectSkills.concat(this.state.tempSkill), tempSkill: ""})}}/>
                        </div>
                        <br /><br />
                        <div className="user-project-edit-skill">
                            <VerticalScroll height="300px">
                                <CardGrid gridColumn="1fr 1fr 1fr">
                                    {
                                        this.state.newProjectSkills.map(skill => {
                                            return (
                                                <ProjectEditSkill skill={skill}>
                                                    <CancelButton onClick={() => {this.setState({newProjectSkills: this.state.newProjectSkills.filter(
                                                        (newSkill) => {return newSkill !== skill}
                                                    )})}} />
                                                </ProjectEditSkill>   
                                            )
                                        })
                                    }
                                </CardGrid>
                            </VerticalScroll>
                        </div>
                    </Card>
                </CardGrid>
                <div className="custom-save">
                    <CustomButton title="Save Details" onClick={() => {this.setState({
                        isAddProject: false,
                        projects: this.state.projects.concat({
                            title: this.state.newProjectTitle,
                            description: this.state.newProjectDescription,
                            skills: this.state.newProjectSkills
                        }),
                        newProjectTitle: "",
                        newProjectDescription: "",
                        newProjectSkills: [],
                        newProjectURL: "",
                    })}} />
                </div>
            </div>
        )
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
                return(
                    this.addNewProject()
                )
            }
            else{
                return(
                    this.renderProjects()
                )
            }
        }
    }

    renderMainButton() {
        if(this.state.isEditProject){
            return(
                <CustomButton title="Save Details" onClick={() => {this.setState({isEditProject: false})}} />
            )
        }
        else{
            if(this.state.isAddProject){
                <CustomButton title="Save Details" onClick={() => {this.setState({isAddProject: false})}} />
            }
            else{
                return(
                    <CustomButton title="Add Project" onClick={() => {this.setState({isAddProject: true})}} />
                )
            }
        }
    }

    render() {
        return(
            <div className="user-project">
                <div className="project-header">
                    <TextCard text="Projects" />        
                    {this.renderMainButton()}
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