import { Link } from 'react-router-dom';
import { Image, Icon } from 'semantic-ui-react';
import FooterLogo from '../png_logo_NSL_70px.png';
import './Shared.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-overlay"></div>
            <div className="logo-copyright-container">
                <Image src={FooterLogo} alt="Player Profile Photo" /> 
                <div className="text-wrap">
                    <h4>&copy;2021 Northside Legends</h4>
                    <h4>All Rights Reserved</h4>
                </div>                 
            </div> 
            <div className="footer-contacts">
                <div className="contact-us">
                    <Link to='/contacts'><p className="p-desc">Contact Us</p></Link>
                </div>
                <div className="contact-socialmedia-container">
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
              
            <div className="tech-msg-container">
                <h4>Design & Powered by NSL Tech Team</h4>
            </div>
        </div>
    )
}

export default Footer
