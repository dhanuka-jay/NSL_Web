import { Link } from 'react-router-dom';
import { Transition } from 'semantic-ui-react';
import Facebook from '../Members/Facebook';

const MainMenu = ({rotateBtn, changeRotateBtn, isLoggedIn, setIsLoggedIn, setLoggedInMember}) => {    

    return (
        <div className={ rotateBtn ? 'main-menu show' : 'main-menu' }>
            <div className={ rotateBtn ? 'menu-branding show' : 'menu-branding' }>
                <div className="branding-logo">
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
                { isLoggedIn ?
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link3'
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
