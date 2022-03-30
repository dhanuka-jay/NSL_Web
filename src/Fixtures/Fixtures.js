import { useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import './Fixtures.css';

const Fixtures = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div id="fixtures">
            <div className="fixture-result-container">
                <div className="fixtures-container">
                    <h2 className="sub-header">Fixtures</h2>
                    <div className="p-desc">Please select the season 2021/2022 to view the fixtures and results.</div>                    
                    <iframe src="https://mycricket2.cricket.com.au/common/pages/public/rv/draw.aspx?id=DRAW&save=0&entityid=33110" title="Fixtures"></iframe>

                    {/* <div className="fixtures-img-container">
                        <div className="fixture-img">
                            <img src="/img/Fixtures/fixtures_img_1.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="fixture-img">
                            <img src="/img/Fixtures/fixtures_img_2.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                    </div> */}
                </div>

                <Divider horizontal>
                    <div className="divider-img"></div>
                </Divider>

                <div className="result-container">

                    <h2 className="sub-header">NSL Top Performers of the Week</h2>

                    {/* <div className="round-results">
                        <h3 className="second-sub-header">CCSCA season 2021/22 results</h3>
                        <div className="result-img-container">
                            <div className="result-img">
                                <img src="/img/Fixtures/fixtures_img_3.jpg" alt="Sorry, Photo unavailable" />
                            </div>
                            <div className="result-img">
                                <img src="/img/Fixtures/fixtures_img_4.jpg" alt="Sorry, Photo unavailable" />    
                            </div>
                        </div>
                    </div> */}
                    <div className="top-performs">
                        {/* <h3 className="second-sub-header">NSL Top Performers of the Week!</h3> */}
                        <div className="perform-img-container">
                            <div className="performance-img section1">
                                <img src="/img/Fixtures/fixtures_img_9.jpg" alt="Sorry, Photo unavailable" />
                            </div>
                            <div className="performance-img section2">
                                <img src="/img/Fixtures/fixtures_img_10.jpg" alt="Sorry, Photo unavailable" />                      
                            </div>
                            <div className="performance-img section2">
                                <img src="/img/Fixtures/fixtures_img_11.jpg" alt="Sorry, Photo unavailable" />                      
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
