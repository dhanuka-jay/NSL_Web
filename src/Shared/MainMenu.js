import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Facebook from '../Members/Facebook';
import MainLogo from '../png_logo_NSL_250px.png';

const MainMenu = ({rotateBtn, changeRotateBtn, isLoggedIn, setIsLoggedIn, setLoggedInMember}) => {    

    return (
        <div className={ rotateBtn ? 'main-menu show' : 'main-menu' }>
            <div className={ rotateBtn ? 'menu-branding show' : 'menu-branding' }>
                <div className="branding-logo">
                    <Image src={MainLogo} centered alt="Player Profile Photo" />
                </div>
                {isLoggedIn ? '' : <Facebook 
                                        isLoggedIn={isLoggedIn}
                                        setIsLoggedIn={setIsLoggedIn}   
                                        setLoggedInMember={setLoggedInMember}                                     
                                    />
                }
            </div>
            <div className={ rotateBtn ? 'menu-nav show' : 'menu-nav' }>
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link1'
                    to='/'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Home
                </Link>
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link2'
                    to='/gallery'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Media Gallery
                </Link>
                <Link
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link3'
                    to='/contacts'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Contact Us
                </Link>
                { isLoggedIn ?
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link4'
                    to='/member'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    My Profile
                </Link> 
                :
                ''
                }    
            </div>
            
        </div>
    )
}

export default MainMenu
