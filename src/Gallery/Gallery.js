
import { useState, useRef, useEffect } from 'react';
import './MediaGallery.css';
import { Modal } from 'semantic-ui-react';

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const [isImgOpen, setIsImgOpen] = useState(false);
    const [currImg, setCurrImg] = useState();
    const imgRef = useRef();

    const handleImageClick = (img_id) => {
        setIsImgOpen(true);

        switch (img_id) {
            case 1:
                setCurrImg("img/gallery/gal_img_1.jpg")
                break;
            case 2:
                setCurrImg("img/gallery/gal_img_2.jpg")
                break;
            case 3:
                setCurrImg("img/gallery/gal_img_3.jpg")
                break;
            case 4:
                setCurrImg("img/gallery/gal_img_4.jpg")
                break;
            case 5:
                setCurrImg("img/gallery/gal_img_5.jpg")
                break;
            case 6:
                setCurrImg("img/gallery/gal_img_6.jpg")
                break;  
            case 7:
                setCurrImg("img/gallery/gal_img_7.jpg")
                break;
            case 8:
                setCurrImg("img/gallery/gal_img_8.jpg")
                break;
            case 9:
                setCurrImg("img/gallery/gal_img_9.jpg")
                break;
            case 10:
                setCurrImg("img/gallery/gal_img_10.jpg")
                break;
            case 11:
                setCurrImg("img/gallery/gal_img_11.jpg")
                break;
            case 12:
                setCurrImg("img/gallery/gal_img_12.jpg")
                break;  
            case 13:
                setCurrImg("img/gallery/gal_img_13.jpg")
                break;  
            case 14:
                setCurrImg("img/gallery/gal_img_14.jpg")
                break;  
            case 15:
                setCurrImg("img/gallery/gal_img_15.jpg")
                break;  
            case 16:
                setCurrImg("img/gallery/gal_img_16.jpg")
                break;
            case 17:
                setCurrImg("img/gallery/gal_img_17.jpg")
                break;  
            case 18:
                setCurrImg("img/gallery/gal_img_18.jpg")
                break;  
            case 19:
                setCurrImg("img/gallery/gal_img_19.jpg")
                break;  
            case 20:
                setCurrImg("img/gallery/gal_img_20.jpg")
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
                    <img src="img/gallery/gal_img_7.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(1)}>
                    <img src="img/gallery/gal_img_1.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(2)}>
                    <img src="img/gallery/gal_img_2.jpg" alt="Sorry, Photo unavailable" />
                </div>                
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(6)}>
                    <img src="img/gallery/gal_img_6.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(3)}>
                    <img src="img/gallery/gal_img_3.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(4)}>
                    <img src="img/gallery/gal_img_4.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(18)}>
                    <img ref={imgRef} src="img/gallery/gal_img_18.jpg" alt="Sorry, Photo unavailable" />
                </div>                
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(10)}>
                    <img src="img/gallery/gal_img_10.jpg" alt="Sorry, Photo unavailable" />
                </div>                
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(16)}>
                    <img src="img/gallery/gal_img_16.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(14)}>
                    <img src="img/gallery/gal_img_14.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(17)}>
                    <img src="img/gallery/gal_img_17.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(19)}>
                    <img src="img/gallery/gal_img_19.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(15)}>
                    <img src="img/gallery/gal_img_15.jpg" alt="Sorry, Photo unavailable" />
                </div>
                <div 
                    className="gal-img"
                    onClick={() => handleImageClick(20)}>
                    <img src="img/gallery/gal_img_20.jpg" alt="Sorry, Photo unavailable" />
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
