import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import ThankLogo from '../png_logo_NSL_250px.png';

const ThankyouPage = () => {
    return (
        <div className="contact-thankyou">
            <div className="branding-logo">
                <Image src={ThankLogo} centered alt="Player Profile Photo" />
            </div>
            <h2>Thank you for contacting us! </h2> 
            <h3>We will get back to you as soon as we can.</h3>
            <Link 
                    className="nav-backtosite"  
                    to='/'
                >
                    Back to Northside Legends
            </Link>        
        </div>
    )
}

export default ThankyouPage
