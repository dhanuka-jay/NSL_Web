import React from 'react';
import {  Icon } from 'semantic-ui-react';
import './Home.css';
import Trailer from '../mobile_web_bg_2.mp4'

const HomeMain = ({rotateBtn}) => {
    return (
        <div id='home-main'>            
            <div className="overlay"></div>
            <video src={Trailer} playsInline muted loop autoPlay />
            <div className="home-content">
                <h1 className={ rotateBtn ? 'lg-heading hide' : 'lg-heading' }>
                    Northside Legends
                </h1>
                <h2 className={ rotateBtn ? 'sm-heading hide' : 'sm-heading' }>
                    Welcome to Northside Legends cricket club!
                </h2>
                <div className={ rotateBtn ? 'social-icons hide' : 'social-icons' }>
                    <a href="https://www.facebook.com/NorthSide-Legends-540287353026304" target='_blank'>
                        <div className="icon-container">
                            <Icon name='facebook f' size='large'/>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCPmT74NawRaPkpVuVtWYkMA" target='_blank'>
                        <div className="icon-container">
                            <Icon name='youtube play' size='large'/>
                        </div>
                    </a>                
                </div>        
            </div>
        </div>
    )
}

export default HomeMain
