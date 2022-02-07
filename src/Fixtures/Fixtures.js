import { useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import './Fixtures.css';
import fixtures_img1 from '../img/Fixtures/fixtures_img_1.jpg';
import fixtures_img2 from '../img/Fixtures/fixtures_img_2.jpg';
import fixtures_img3 from '../img/Fixtures/fixtures_img_3.jpg';
import fixtures_img4 from '../img/Fixtures/fixtures_img_4.jpg';
import fixtures_img5 from '../img/Fixtures/fixtures_img_5.jpg';
import fixtures_img6 from '../img/Fixtures/fixtures_img_6.jpg';

const Fixtures = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div id="fixtures">
            <div className="fixture-result-container">
                <div className="fixtures-container">
                    <h2 className="sub-header">Fixtures</h2>
                    <div className="fixtures-img-container">
                        <div className="fixture-img">
                            <img src={fixtures_img1} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="fixture-img">
                            <img src={fixtures_img2} alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                </div>

                <Divider horizontal>
                    <div className="divider-img"></div>
                </Divider>

                <div className="result-container">
                    <h2 className="sub-header">Results</h2>
                    <div className="round-results">
                        <h3 className="second-sub-header">CCSCA season 2021/22 results</h3>
                        <div className="result-img-container">
                            <div className="result-img">
                                <img src={fixtures_img3} alt="Sorry, Photo unavailable" />
                            </div>
                            <div className="result-img">
                                <img src={fixtures_img4} alt="Sorry, Photo unavailable" />    
                            </div>
                        </div>
                    </div>
                    <div className="top-performs">
                        <h3 className="second-sub-header">NSL Top Performers of the Week!</h3>
                        <div className="perform-img-container">
                            <div className="performance-img section1">
                                <img src={fixtures_img5} alt="Sorry, Photo unavailable" />
                            </div>
                            <div className="performance-img section2">
                                <img src={fixtures_img6} alt="Sorry, Photo unavailable" />                      
                            </div>
                        </div>
                        <p className="p-desc">Keep up the Fighting Spirit Legends!</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Fixtures
