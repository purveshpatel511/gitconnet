import React from 'react';
import './notification.style.scss';

import CardGrid from '../../components/cardgrid/cardgrid.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import TextCard from '../../components/text-card/text-card.component';
import Card from '../../components/card/card.component';
import VerticalScroll from '../../components/vertical-scroll/vertical-scroll.component';
import CardView from '../../components/cardview/cardview.component';
import CardList from '../../components/cardlist/cardlist.component';

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
                },
                {
                    user: "purvesh",
                    requestedProject: "gitConnet"
                },
                {
                    user: "purvesh",
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
                            <h2 className="notification-title">Collabration Requests</h2>
                            <VerticalScroll height="520px">
                                <CardView />
                                <CardView />
                                <CardView />
                                <CardView />
                            </VerticalScroll>
                        </Card>
                        <Card>
                            <h2 className="notification-title">Contribution Requests</h2>
                            <VerticalScroll height="520px">
                                {
                                    this.state.collabrations.map(collabration => {
                                        <CardView user={collabration.user} requestedProject={collabration.requestedProject} />
                                    })
                                }
                            </VerticalScroll>
                        </Card>
                    </CardGrid>
            </div>
        );
    }
}

export default Notification;