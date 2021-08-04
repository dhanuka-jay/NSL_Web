
import { useState } from 'react';
import './MediaGallery.css';
import { Modal } from 'semantic-ui-react';
import img1 from '../img/gal_img_1.jpg';
import img2 from '../img/gal_img_2.jpg';
import img3 from '../img/gal_img_3.jpg';
import img4 from '../img/gal_img_4.jpg';
import img5 from '../img/gal_img_5.jpg';
import img6 from '../img/gal_img_6.jpg';

const Gallery = () => {

    const [isImgOpen, setIsImgOpen] = useState(false);
    const [currImg, setCurrImg] = useState();

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
            default:
                setCurrImg('')
                break;
        }
    }

    return (
        <div className='gallery'>
            <div className="gallery-container">
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
                    <img src={img5} alt="Sorry, Photo unavailable" />
                </div>
            </div>

            <Modal
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
