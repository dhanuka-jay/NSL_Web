import React from 'react';
import './Home.css';

const HomeMain = ({rotateBtn}) => {
    return (
        <div id='home-main'>            
            <div className="overlay"></div>
            <video playsInline muted loop autoPlay >
                <source src={'/img/home_bg_vid_nsl_trl.mp4'} type="video/mp4" />
            </video>
            
            <div className={rotateBtn ? 'name-logo hide' : 'name-logo'}>
                
            </div>
            <div className="home-content">                
                
                <h2 className={rotateBtn ? 'welcome-msg hide' : 'welcome-msg'}>
                    Welcome to the home of Northside Legends!
                </h2>
                
                <h2 className={ rotateBtn ? 'sm-heading hide' : 'sm-heading' }>
                    “Cricket is a funny game, we have legends and living legends but the game doesn’t stop for anyone!”
                </h2>
                <h4 className={ rotateBtn ? 'name-kumar hide' : 'name-kumar' }>Kumar Sangakkara</h4>
            </div>
        </div>
    )
}

export default HomeMain
