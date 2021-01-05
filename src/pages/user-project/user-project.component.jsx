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

class UserProject extends React.Component {
    constructor(props) {
        super();
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
                    <div className="projects-section">
                        <VerticalScroll height="600px">
                            <CardList>
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                            </CardList>
                        </VerticalScroll>
                    </div>
                </Card>
            </div>
        );
    }
}

export default UserProject;