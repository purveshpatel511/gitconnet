import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './header.style.scss';

import CustomButton from '../custom-button/custom-button.component';

const Header = () => {
    return(
        <header className="header">
            <div className="logo">
            <CustomButton title="gitConnect" />
            </div>
            <div className="options">
                <CustomButton title="Projects"/>
                <CustomButton title="Notifications" />
                <CustomButton title="Sign Out" />
            </div>
        </header>
    );
}

export default Header;