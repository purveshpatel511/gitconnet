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
                <h1>Main Page</h1>
                <br />
                <br />
                <br />
                <Link to="/search">
                    <CustomButton title="LogIn" onClick={() => (this.props.data.handleLogin())} />
                </Link>
            </div>
        )
    }
}

export default MainPage;