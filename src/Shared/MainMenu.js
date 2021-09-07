import { Link } from 'react-router-dom';
import { Image, Label, List } from 'semantic-ui-react';
import MainLogo from '../png_logo_NSL.png';

const MainMenu = ({rotateBtn, changeRotateBtn, isLoggedIn, setIsLoggedIn, setLoggedInMember}) => {    

    return (
        <div className={ rotateBtn ? 'main-menu show' : 'main-menu' }>
            <div className={ rotateBtn ? 'menu-branding show' : 'menu-branding' }>
                <div className="branding-logo">
                    <Image src={MainLogo} centered alt="Player Profile Photo" />
                </div>
                <div className="menu-desc">
                    <div className={ rotateBtn ? "desc-vision hide" : "desc-vision"}>                        
                        <Label size="huge" as='a' color='brown' >
                           Our Vision
                        </Label>
                        <div className="desc-text">
                            <p>Foster ongoing respect and success by providing a positive and 
                                enjoyable cricket experience for all, while developing players, 
                                people and partnerships in the community.</p>
                        </div>
                        
                    </div>
                    <div className={ rotateBtn ? "desc-mission hide" : "desc-mission"}>
                        <Label size="huge" as='a' color="brown">
                           Our Mission
                        </Label>
                        <div className="desc-text">
                            <List>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>Providing an environment that encourages achievement, team spirit and 
                                            sportsmanship</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>Striving to offer the best facilities and coaching 
                                            available</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>to promote the growth of the club in the local community</List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                </div> 
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
                    to='/aboutus'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    About Us
                </Link>
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link3'
                    to='/gallery'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Media Gallery
                </Link>
                <Link
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link4'
                    to='/contacts'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Contact Us
                </Link>
                <Link
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link5'
                    to='/sponsors'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Sponsors
                </Link>
                {/* { isLoggedIn ?
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link5'
                    to='/member'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    My Profile
                </Link> 
                :
                <div className={ rotateBtn ? 'fb-login show' : 'fb-login' }>
                    <Facebook 
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}   
                        setLoggedInMember={setLoggedInMember}                                     
                    />
                </div>
                }     */}
            </div>
            
        </div>
    )
}

export default MainMenu
