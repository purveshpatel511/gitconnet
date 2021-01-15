import React from 'react';
import './search-page.style.scss';

import FormInput from '../../components/form-input/form-input.component';
import Card from '../../components/card/card.component';
import VerticalScroll from '../../components/vertical-scroll/vertical-scroll.component';
import CardList from '../../components/cardlist/cardlist.component';
import ProjectCardView from '../../components/projectcardview/projectcardview.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CardGrid from '../../components/cardgrid/cardgrid.component';

class SearchPage extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: "",
            allProjects: [
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-1",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["python"]
                },
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-2",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["reactjs"]
                },
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-3",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["aws","babel"]
                },
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-4",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["reactjs","aws"]
                },
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-5",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["python","babel"]
                },
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-6",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["reactjs","aws","babel"]
                },
                {
                    user: "purvesh",
                    projectTitle: "gitConnect-7",
                    projectDescription: "This is small project for testing.",
                    projectSkill: ["python","reactjs","aws","babel"]
                }
            ]
        }
    }

    render() {

        const { allProjects, searchQuery } = this.state;
        const filteredProjects = allProjects.filter(project => (
            project.projectSkill.includes(searchQuery.toLowerCase())
        ))

        const searchQueryLength = this.state.searchQuery.length;
        const filteredProjectLength = filteredProjects.length;

        return(
            <div className="search-page">
                <div className="search-bar">
                    <FormInput placeholder="Search Project" onChange={e => {this.setState({searchQuery: e.target.value})}} />
                </div>
                <br /><br />
                <Card>
                {
                    (searchQueryLength !== 0)?
                        (filteredProjectLength !== 0)?(
                            <VerticalScroll height="600px">
                                <CardList>
                                    {
                                        filteredProjects.map(project => {
                                            return(
                                                <ProjectCardView projectTitle={project.projectTitle} projectDescription={project.projectDescription} projectSkill={project.projectSkill} >
                                                    <CardGrid gridColumn="1fr 1fr 1fr">
                                                        <CustomButton title="BookMark" />
                                                        <CustomButton title="Github" />
                                                        <CustomButton title="Do Contribution" />
                                                    </CardGrid>
                                                </ProjectCardView>
                                            )
                                        })
                                    }
                                </CardList>
                            </VerticalScroll>
                        ):(
                            <h2 className="search-info">No Projects Found</h2>
                        ):(
                            <h2 className="search-info">Search Something</h2>
                        )
                }
                </Card>
            </div>
        )
    }
}


export default SearchPage;