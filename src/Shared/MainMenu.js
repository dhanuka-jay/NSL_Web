import { Link } from 'react-router-dom'

const MainMenu = ({rotateBtn, changeRotateBtn}) => {
    return (
        <div className={ rotateBtn ? 'main-menu show' : 'main-menu' }>
            <div className={ rotateBtn ? 'menu-branding show' : 'menu-branding' }>
                <div className="branding-logo">
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
                    to='/gallery'
                    onClick={() => changeRotateBtn(!rotateBtn)}
                >
                    Media Gallery
                </Link>
            </div>
            
        </div>
    )
}

export default MainMenu
