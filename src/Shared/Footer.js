import { Image } from 'semantic-ui-react';
import FooterLogo from '../png_logo_NSL_70px.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-overlay"></div>
            <div className="footer-logo-container">
                <Image src={FooterLogo} alt="Player Profile Photo" /> 
            </div>  
            <div className="copyright">
                <h4>Copyright &copy;2021, All Right Reserved</h4>
            </div>   
        </div>
    )
}

export default Footer
