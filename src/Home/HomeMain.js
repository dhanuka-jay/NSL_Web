import React from 'react';
import { Dimmer, Icon, Loader, Segment } from 'semantic-ui-react';
import './Home.css';
import Trailer from '../logo_trailer.m4v'

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
                    We welcome you to <span className="highlight">Northside Legends</span> cricket club!
                </h2>
                <div className={ rotateBtn ? 'social-icons hide' : 'social-icons' }>
                    <a href="https://www.facebook.com/NorthSide-Legends-540287353026304" target='_blank'>
                        <Icon name='facebook square' size='big'/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCPmT74NawRaPkpVuVtWYkMA" target='_blank'>
                        <Icon name='youtube' size='big'/>
                    </a>                
                </div>        
            </div>
        </div>
    )
}

export default HomeMain
