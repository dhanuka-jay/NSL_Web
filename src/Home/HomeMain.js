import React from 'react';
import {  Icon } from 'semantic-ui-react';
import './Home.css';
import Trailer from '../NSL_TRAILER_FINAL_Trim_2.mp4'

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
            {/* <div className="home-desc">
                <div className={ rotateBtn ? "desc-vision hide" : "desc-vision"}>
                    <h3>Our Vision</h3>
                    <p>Foster ongoing respect and success by providing a positive and 
                        enjoyable cricket experience for all, while developing players, 
                        people and partnerships in the community.</p>
                </div>
                <div className={ rotateBtn ? "desc-mission hide" : "desc-mission"}>
                    <h3>Our Mission</h3>
                    <p>Providing an environment that encourages achievement, team spirit and 
                    sportsmanship Striving to offer the best facilities and coaching 
                    available To promote the growth of the club in the local community</p>
                </div>
            </div>  */}
        </div>
    )
}

export default HomeMain
