import React from 'react';
import MainMenu from './MainMenu';
import MenuButton from './MenuButton';
import './Shared.css';

const Header = ({rotateBtn, changeRotateBtn, isLoggedIn, setIsLoggedIn, setLoggedInMember, activePage, setActivePage}) => {
    return (
        <div className='header-menu'>
            <MenuButton 
                rotateBtn={rotateBtn}
                changeRotateBtn={changeRotateBtn}
                isLoggedIn={isLoggedIn}
            />
            <MainMenu 
                rotateBtn={rotateBtn}
                changeRotateBtn={changeRotateBtn}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setLoggedInMember={setLoggedInMember}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </div>
    )
}

export default Header
