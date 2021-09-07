import './Sponsors.css';
import { Divider, Header, Card, Icon, Image } from 'semantic-ui-react';
import p_rohan from '../img/sponsors/sp-rohan.jpg';
import p_himanshu from '../img/sponsors/sp-himanshu.jpg';
import p_anton from '../img/sponsors/sp-anton.jfif';

const Sponsors = () => {
    return (
        <div id="sponsors">
            <div className="sp-header">
                <h2>Our valued Sponsors</h2>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='handshake' />
                    </Header>
                </Divider>
            </div>
            <div className="sp-cards">
                <div className="sp-container sp-aussie">
                    <Card>
                        <Image src={p_rohan} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Rohan Jayasooriya</Card.Header>
                        <Card.Meta>
                            <span className='company'>Fintax Business Service</span>
                        </Card.Meta>
                        <Card.Description>
                            For all your tax solutions.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='phone' />
                                0410 385 045
                            </a>
                            <br/>
                            <a>
                                <Icon name='globe' />
                                www.fintaxservices.com.au
                            </a>
                        </Card.Content>
                    </Card>
                </div>
                <div className="sp-container sp-fintax">
                    <Card>
                        <Image src={p_himanshu} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Himanshu Sharma</Card.Header>
                        <Card.Meta>
                            <span className='company'>Aussie - Gungahlin</span>
                        </Card.Meta>
                        <Card.Description>
                            Mortgage Broker & Franchisee.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='phone' />
                                0410 092 221
                            </a>
                            <br/>
                            <a>
                                <Icon name='globe' />
                                www.aussie.com.au
                            </a>
                        </Card.Content>
                    </Card>
                </div>          
                <div className="sp-container sp-tonight">
                    <Card>
                        <Image src={p_anton} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Anton De Almeida</Card.Header>
                        <Card.Meta>
                            <span className='company'>Tonight Accommodations - Canada</span>
                        </Card.Meta>
                        <Card.Description>
                            For all your housing and accommodation needs in Canada.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='phone' />
                                +1 416-938-1906
                            </a>
                            <br/>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Sponsors
