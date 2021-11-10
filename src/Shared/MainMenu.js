import { Link } from 'react-router-dom';
import { useState } from "react";
import { Image, Label, List, Button, Header, Icon, Modal, Divider } from 'semantic-ui-react';
import MainLogo from '../png_logo_NSL.png';
import './Shared.css';

const MainMenu = ({rotateBtn, changeRotateBtn, isLoggedIn, setIsLoggedIn, setLoggedInMember, activePage, setActivePage}) => {    

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className={ rotateBtn ? 'main-menu show' : 'main-menu' }>
            <div className={ rotateBtn ? 'menu-branding show' : 'menu-branding' }>
                <div className="branding-logo">
                    <Image src={MainLogo} centered alt="Player Profile Photo" />
                </div>
                <div className="menu-desc">
                    <div className={ rotateBtn ? "desc-vision hide" : "desc-vision"}>                        
                        <Label size="huge" color='brown' >
                           Our Vision
                        </Label>
                        <div className="desc-text">
                            <p>Foster ongoing respect and success by providing a positive and 
                                enjoyable cricket experience for all, while developing players, 
                                people and partnerships in the community.</p>
                        </div>                        
                    </div>
                    <div className={ rotateBtn ? "desc-mission hide" : "desc-mission"}>
                        <Label size="huge" color="brown">
                           Our Mission
                        </Label>
                        <div className="desc-text">
                            <List>
                                <List.Item>
                                    <List.Content>Providing an environment that encourages achievement, team spirit and 
                                            sportsmanship</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>Striving to offer the best facilities and coaching 
                                            available</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>To promote the growth of the club in the local community</List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <div className="value-container">
                        <Label 
                            className="lbl-values" 
                            size="huge" 
                            as='a' 
                            color="brown" 
                            onClick={() => toggleModal()}>
                           Our Values
                        </Label>

                        {/* <Button 
                            className="btn-values"
                            color="brown"
                            inverted
                            labelPosition="right"
                            onClick={() => toggleModal()}
                            icon="arrow circle right"
                            content="Our Values"
                        >
                        </Button> */}

                    </div>
                </div> 
            </div>
            <div className={ rotateBtn ? 'menu-nav show' : 'menu-nav' }>
                {/* <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link1'
                    to='/'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'home' ? "active" : '' }
                        onClick={ () => setActivePage('home')}
                    >Home</h2>
                </Link> */}
                {/* <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link2'
                    to='/aboutus'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'aboutus' ? "active" : '' }
                        onClick={ () => setActivePage('aboutus')}
                    >About Us</h2>
                </Link> */}
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link1'
                    to='/theclub'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'theclub' ? "active" : '' }
                        onClick={ () => setActivePage('theclub')}
                    >The Club</h2>
                </Link>
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link2'
                    to='/fixtures'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'fixtures' ? "active" : '' }
                        onClick={ () => setActivePage('fixtures')}
                    >Fixtures</h2>
                </Link>
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link3'
                    to='/news'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'news' ? "active" : '' }
                        onClick={ () => setActivePage('news')}
                    >News</h2>
                </Link> 
                <Link 
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link4'
                    to='/gallery'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'media' ? "active" : '' }
                        onClick={ () => setActivePage('media')}
                    >Gallery</h2>
                </Link>                               
                <Link
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link5'
                    to='/sponsors'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'sponsors' ? "active" : '' }
                        onClick={ () => setActivePage('sponsors')}
                    >Partners</h2>
                </Link>
                <Link
                    className={ rotateBtn ? 'nav-item show' : 'nav-item' }  
                    id='link6'
                    to='/contacts'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    <h2 
                        className={ activePage === 'contactus' ? "active" : '' }
                        onClick={ () => setActivePage('contactus')}
                    >Contact Us</h2>
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
            <div className="modal-container">
                <Modal
                    className="values-modal"
                    basic
                    onClose={() => setOpenModal(false)}
                    onOpen={() => setOpenModal(true)}
                    open={openModal}
                    size='small'
                    >
                    <Modal.Content>
                        <h1>HOW WE PLAY</h1>

                        <Divider horizontal>
                                <div className="divider-img"></div>
                        </Divider>

                        <h2>SPIRIT OF CRICKET</h2>
                        <p className="p-desc">The laws of cricket clearly explain the expectations of how participants need to behave on the field. We believe in portraying professionalism in our conduct and attitude on the field.</p>

                        <h2>INTEGRITY</h2>
                        <p className="p-desc">We strive to protect NSL Cricket from activities that are detrimental to its integrity by means of disciplinary protocols that ensure fair-play. The establishment of the NSL Disciplinary Unit enables a more focused and coordinated approach to protecting the integrity of the sport in our community.</p>

                        <h2>TEAM WORK</h2>
                        <p className="p-desc">We are a multinational, multicultural, diverse team who process our own ideas. Through the collaboration of our individual uniqueness we try to achieve greater success.</p>

                        <h2>ACCOUNTABILITY</h2>
                        <p className="p-desc">We as a team believe in accountability and responsibility for all the actions within the NSL cricket community. We aim to achieve transparency through our governance protocols.</p>

                        <h2>INNOVATION</h2>
                        <p className="p-desc">We will be creative and innovative to be competitive in the game and to tackle unexpected situations in a competent manner.</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='brown' inverted onClick={() => setOpenModal(false)}>
                        <Icon name='arrow circle left' /> Menu
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        </div>
    )
}

export default MainMenu
