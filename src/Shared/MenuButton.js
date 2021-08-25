
import './Shared.css';

const MenuButton = ({rotateBtn, changeRotateBtn}) => {
    return (
        <div className="full-btn">
            <div className="btn-background">
                <div className={rotateBtn ? 'menu-btn spin' : 'menu-btn'} onClick={() => changeRotateBtn(!rotateBtn)}>
                    <div className="btn-line line1"></div>
                    <div className="btn-line line2"></div>
                    <div className="btn-line line3"></div>
                </div>
            </div>
            <div className="btn-logo">
                
            </div>
        </div>
    )
}

export default MenuButton
