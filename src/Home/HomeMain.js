import React from 'react';
import {  Icon } from 'semantic-ui-react';
import './Home.css';
import Trailer from '../NSL_TRAILER_FINAL_Trim_2.mp4'

const HomeMain = ({rotateBtn}) => {
    return (
        <div id='home-main'>            
            <div className="overlay"></div>
            <video src={Trailer} playsInline muted loop autoPlay />
            
            <h1 className={ rotateBtn ? 'lg-heading hide' : 'lg-heading' }>
                Northside Legends
            </h1>
            <div className="home-content">
                <h2 className={ rotateBtn ? 'sm-heading hide' : 'sm-heading' }>
                    Welcome to our cricket club!
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
                    <a href="https://twitter.com/NSLCanberra" target='_blank'>
                        <div className="icon-container">
                            <Icon name='twitter' size='large'/>
                        </div>
                    </a> 
                    <a href="https://www.instagram.com/northsidelegends/" target='_blank'>
                        <div className="icon-container">
                            <Icon name='instagram' size='large'/>
                        </div>
                    </a>                                  
                </div>                       
            </div>
        </div>
    )
}

export default HomeMain
