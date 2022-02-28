import React from 'react';
import MainMenu from './MainMenu';
import MenuButton from './MenuButton';
import './Shared.css';

const Header = ({rotateBtn, changeRotateBtn, activePage, setActivePage}) => {
    return (
        <div className='header-menu'>
            <MenuButton 
                rotateBtn={rotateBtn}
                changeRotateBtn={changeRotateBtn}
            />
            <MainMenu 
                rotateBtn={rotateBtn}
                changeRotateBtn={changeRotateBtn}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </div>
    )
}

export default Header
