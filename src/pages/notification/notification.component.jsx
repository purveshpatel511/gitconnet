import React from 'react';
import './notification.style.scss';

import CardGrid from '../../components/cardgrid/cardgrid.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import TextCard from '../../components/text-card/text-card.component';
import Card from '../../components/card/card.component';
import VerticalScroll from '../../components/vertical-scroll/vertical-scroll.component';
import ProjectCardView from '../../components/projectcardview/projectcardview.component';
import CardList from '../../components/cardlist/cardlist.component';
import CollabrationNotificationCard from '../../components/collabration-notification-card/collabration-notification-card.component';
import ContributionNotificationCard from '../../components/contribution-notification-card/contribution-notification-card.component';

class Notification extends React.Component {
    constructor() {
        super();

        this.state = {
            collabrations: [
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                }
            ],
            contributions: [
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                },
                {
                    status: "Ongoing",
                    requestedProject: "gitConnet"
                }
            ]
        }
    }

    render() {
        return(
            <div className="notification">
                <TextCard text="Notifications" />
                <br /><br />
                    <CardGrid gridColumn="1fr 1fr">
                        <Card>
                            <h2 className="inner-header">Collabration Requests</h2>
                            <VerticalScroll height="520px">
                                <CardList>
                                    {
                                        this.state.collabrations.map(collabration => (
                                            <CollabrationNotificationCard user={collabration.user} requestedProject={collabration.requestedProject}>
                                                <CustomButton title="Accept" />
                                                <CustomButton title="Reject" />
                                            </CollabrationNotificationCard>
                                        ))
                                    }
                                </CardList>
                            </VerticalScroll>
                        </Card>
                        <Card>
                            <h2 className="inner-header">Contribution Requests</h2>
                            <VerticalScroll height="520px">
                                <CardList>
                                    {
                                        this.state.contributions.map(contribution => (
                                            <ContributionNotificationCard requestedProject={contribution.requestedProject} status={contribution.status}>
                                                <CustomButton title="Remove" />
                                            </ContributionNotificationCard>
                                        ))
                                    }
                                </CardList>
                            </VerticalScroll>
                        </Card>
                    </CardGrid>
            </div>
        );
    }
}

export default Notification;