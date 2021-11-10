
import { useState, useRef } from 'react';
import './MediaGallery.css';
import { Modal, Popup } from 'semantic-ui-react';
import img1 from '../img/gal_img_1.jpg';
import img2 from '../img/gal_img_2.jpg';
import img3 from '../img/gal_img_3.jpg';
import img4 from '../img/gal_img_4.jpg';
import img5 from '../img/gal_img_5.jpg';
import img6 from '../img/gal_img_6.jpg';
import img7 from '../img/gal_img_7.jpg';
import img8 from '../img/gal_img_8.jpg';
import img9 from '../img/gal_img_9.jpg';
import img10 from '../img/gal_img_10.jpg';
import img11 from '../img/gal_img_11.jpg';
import img12 from '../img/gal_img_12.jpg';
import img13 from '../img/gal_img_13.jpg';
import img14 from '../img/gal_img_14.jpg';
import img15 from '../img/gal_img_15.jpg';

const Gallery = () => {

    const [isImgOpen, setIsImgOpen] = useState(false);
    const [currImg, setCurrImg] = useState();
    const imgRef = useRef();

    const handleImageClick = (img_id) => {
        setIsImgOpen(true);

        switch (img_id) {
            case 1:
                setCurrImg(img1)
                break;
            case 2:
                setCurrImg(img2)
                break;
            case 3:
                setCurrImg(img3)
                break;
            case 4:
                setCurrImg(img4)
                break;
            case 5:
                setCurrImg(img5)
                break;
            case 6:
                setCurrImg(img6)
                break;  
            case 7:
                setCurrImg(img7)
                break;
            case 8:
                setCurrImg(img8)
                break;
            case 9:
                setCurrImg(img9)
                break;
            case 10:
                setCurrImg(img10)
                break;
            case 11:
                setCurrImg(img11)
                break;
            case 12:
                setCurrImg(img12)
                break;  
            case 13:
                setCurrImg(img13)
                break;  
            case 14:
                setCurrImg(img14)
                break;  
            case 15:
                setCurrImg(img15)
                break;        
            default:
                setCurrImg('')
                break;
        }
    }

    return (
        <div className='gallery'>
            <div className="gallery-overlay"></div>
            <div className="gallery-container">
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(7)}>
                    <img src={img7} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(1)}>
                    <img src={img1} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(2)}>
                    <img src={img2} alt="Sorry, Photo unavailable" />
                </div>                
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(6)}>
                    <img src={img6} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(3)}>
                    <img src={img3} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(4)}>
                    <img src={img4} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(5)}>
                    <img ref={imgRef} src={img5} alt="Sorry, Photo unavailable" />
                </div>                
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(10)}>
                    <img src={img10} alt="Sorry, Photo unavailable" />
                </div>                
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(9)}>
                    <img src={img9} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(14)}>
                    <img src={img14} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(11)}>
                    <img src={img11} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(13)}>
                    <img src={img13} alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(15)}>
                    <img src={img15} alt="Sorry, Photo unavailable" />
                </div>
            </div>

            <Modal
                closeIcon
                size='large'
                open={isImgOpen}
                onClose={() => setIsImgOpen(false)}
            >
                <Modal.Content>
                    <img src={currImg} alt="Sorry, Photo unavailable" />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default Gallery
