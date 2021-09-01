import React from 'react';
import {  Icon } from 'semantic-ui-react';
import './Home.css';
import Trailer from '../Home_bg_vid_01.mp4';

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
            <div className="sponsor-container">
                <a href="https://www.aussie.com.au/find-store/act/gungahlin.html?cid=010517&utm_medium=cpc&utm_source=google&utm_campaign%7bCampaign%7d&utm_termaussie%20gungahlin&gclid=Cj0KCQjwpreJBhDvARIsAF1_BU1KQ7j9JAWXlh45jRBPmDpboIR17mE9dVfYW1zy4dhEYRq7OjbWdhQaAvKlEALw_wcB&gclsrc=aw.ds" target="_blank">
                    <div className="sponsor sp-aussie"></div>
                </a>  
                <a href="https://www.fintaxservices.com.au/" target="_blank">
                    <div className="sponsor sp-fintax"></div>
                </a> 
                <a href="" target="_blank">
                    <div className="sponsor sp-tonight"></div>
                </a>
            </div>
        </div>
    )
}

export default HomeMain
