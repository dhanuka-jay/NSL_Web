import { useEffect } from 'react';
import './Sponsors.css';
import { Divider, Icon } from 'semantic-ui-react';

const Sponsors = () => {    

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

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
                    {/* <div className="s-sp aussie">

                    </div> */}
                    <div className="s-sp fintax">

                    </div>
                    <div className="s-sp rma">

                    </div>
                </div>
                <Divider as="h2">
                    <Icon name="fdfd" />
                </Divider>
                <div className="own-sponsors">
                    <p className="p-desc">Official Photography Partner</p>
                    <div className="flash-photo">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
