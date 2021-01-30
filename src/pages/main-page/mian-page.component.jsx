import React from 'react';
import './main-page.style.scss';

import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';

class MainPage extends React.Component {
    constructor(){
        super();

    }

    render() {
        return (
            <div className="main-page">
                <h1>Welcome to gitConnect</h1>
                <div className="login-button">
                    <Link to="/search">
                        <CustomButton title="LogIn" onClick={() => (this.props.data.handleLogin())} />
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage;