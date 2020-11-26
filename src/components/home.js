import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import './Components.css';

const HomePage = () => {
    return (
        <div className="container ">
            <div className="home_content">
                <h1 className="hero_h1">
                    Welcome to the financial literacy portal
                </h1>
                <h2 className="hero_h2">
                    Your finacial literacy includes knowing your CredistScore
                </h2>
                <Link to='/creditscores'>
                    <Button className='hero_button'>Check your scores</Button>
                </Link> 
            </div>
        </div>
    );
}

export default HomePage;