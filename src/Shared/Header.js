import React from 'react';
import MainMenu from './MainMenu';
import MenuButton from './MenuButton';
import './Shared.css';

const Header = ({rotateBtn, changeRotateBtn, isLoggedIn, setIsLoggedIn, setLoggedInMember}) => {
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
            />
        </div>
    )
}

export default Header
