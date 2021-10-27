import './Sponsors.css';
import { Divider, Header, Card, Icon, Image } from 'semantic-ui-react';
import p_rohan from '../img/sponsors/sp-rohan.jpg';
import p_himanshu from '../img/sponsors/sp-himanshu.jpg';
import p_anton from '../img/sponsors/sp-anton.jfif';

const Sponsors = () => {
    return (
        <div id="sponsors">
            <div className="sp-header">
                <h2 className="sub-header">Our Partners</h2>
                
                <Divider horizontal>
                    <div className="divider-img"></div>
                </Divider>
                <p className="p-desc">Thank you for your generous contribution.</p>
            </div>
            <div className="sponsor-logos">
                <div className="main-sponsors">
                    <div className="m-sp bemnt-tiles">

                    </div>
                    <div className="m-sp med-practice">

                    </div>
                </div>
                <div className="secondary-sponsors">                    
                    <div className="s-sp aussie">

                    </div>
                    <div className="s-sp fintax">

                    </div>
                    <div className="s-sp rma">

                    </div>
                </div>
            </div>
            {/* <div className="sp-quote"> 
                <h3>Thank you for your generous contribution.</h3>
            </div> */}
        </div>
    )
}

export default Sponsors
