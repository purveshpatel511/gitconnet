import React from 'react';
import './contribution-notification-card.style.scss';

const ContributionNotificationCard = (props) => {
    return(
        <div className="contribution-notification-card">
            <h2>{props.requestedProject}</h2>
            <span>Your Request status: {props.status}</span>
            <br /><br />
            <div className="mod-button1">
                {props.children}
            </div>
        </div>
    )
}

export default ContributionNotificationCard;