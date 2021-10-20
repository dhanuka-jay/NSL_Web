import { Divider, Header, Icon, List, Segment, Grid } from 'semantic-ui-react';
import './TheClub.css';
import clb_img from '../img/gal_img_8.jpg';

const TheClub = () => {
    return (
        <div id="theclub">
            {/* <h2 className="page-header">The Club</h2>

            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='handshake' />
                </Header>
            </Divider> */}

            <div className="club-segment club-history">
                <h2 className="sub-header">Club History</h2>
                <p className="p-desc">Northside Legends (NSL) started in 2009 to promote Sunday social cricket in the North side of Canberra. 
                    Due to the easy-going culture of cricket enthusiastic members and common values of the club, NSL has become emergent in terms of 
                    quantity and quality. Our vision is to foster ongoing respect and success by providing a positive and enjoyable cricket experience 
                    for all, while developing players, people, and partnerships in the community. 
                    The club strives hard to provide an environment to its players that encourages achievement, team spirit, sportsmanship while 
                    promoting the growth of the club in the local community.</p>
                <p className="p-desc">In early days, the club participated in several soft-ball tournaments organised by various Canberra based 
                    cricket communities.  In 2021 the club was registered in Cricket Australia as Northside Legends Inc.  The club started playing 
                    hard-ball cricket in 2021 and soon achieved a vast success in this version by coming as far as quarter finals and semi-finals, 
                    respectively by the two teams entered in Super T20 Sunday competition in 2021.  Due to the increased interest and enthusiasm 
                    of members to play competitive cricket, NSL entered by fielding two teams in Canberra City & Suburban Cricket Association (CCSCA) 
                    tournament in 2021/22 season.</p>
                <p className="p-desc">We have been blessed with a wonderful set of members and backed by their families in various ways. How we play 
                    cricket on the field as a team united with team sprit enables us to maintain a high level of integrity and accountability. As a 
                    club we are innovative both on and off the field paving the success of NSL within a short period of time.</p>
                    <p className="p-desc p-sub">Go Legends!</p>
                {/* <div className="club-history-img"></div> */}
                <img src={clb_img} className="club-history-img" />
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            {/* <div className="club-segment president-message">
                <h2 className="sub-header">President's Message</h2>
                <div className="club-sub-segment">
                    <div className="president-img"></div>
                    <p className="p-desc">Northside Legends (NSL) started in 2009 to promote Sunday social cricket in the North side of Canberra. 
                        Due to the easy-going culture of cricket enthusiastic members and common values of the club, NSL has become emergent in terms of 
                        quantity and quality. Our vision is to foster ongoing respect and success by providing a positive and enjoyable cricket experience 
                        for all, while developing players, people, and partnerships in the community. 
                        The club strives hard to provide an environment to its players that encourages achievement, team spirit, sportsmanship while 
                        promoting the growth of the club in the local community.</p>
                    <p className="p-desc">In early days, the club participated in several soft-ball tournaments organised by various Canberra based 
                        cricket communities.  In 2021 the club was registered in Cricket Australia as Northside Legends Inc.  The club started playing 
                        hard-ball cricket in 2021 and soon achieved a vast success in this version by coming as far as quarter finals and semi-finals, 
                        respectively by the two teams entered in Super T20 Sunday competition in 2021.  Due to the increased interest and enthusiasm 
                        of members to play competitive cricket, NSL entered by fielding two teams in Canberra City & Suburban Cricket Association (CCSCA) 
                        tournament in 2021/22 season.</p> 
                </div>               
            </div>

            <Divider horizontal>
                <Header as='h2'>
                    <Icon name='handshake' />
                </Header>
            </Divider> */}

            <div className="club-segment office-bearers">
                <h2 className="sub-header">Office Bearers</h2>
                <h3 className="second-sub-header">The Northside Legends Board</h3>
                <p className="p-desc">President - Yehan Muthukuda</p>
                <p className="p-desc">Vice President - Lalitha Jayaweera</p>
                <p className="p-desc">Secretary - Lalantha Liyanage</p>
                <p className="p-desc">Treasurer - Rohan Jayasuriya</p>

                <h3 className="second-sub-header">Committee Members</h3>
                <p className="p-desc">Dammika Adhikari</p>
                <p className="p-desc">Kapila Hapu Arachchige</p>
                <p className="p-desc">Punya Abhayawickrama</p>
                <p className="p-desc">Muditha Hettiarachchy</p>
                <p className="p-desc">Indika Fernando</p>
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <div className="club-segment Affiliates">
                <h2 className="sub-header">Affiliates</h2>  
                <div className="affi-logos">
                    <a href="http://www.ccsca.org.au/" target="_blank"><div className="affi-logo ccsca"></div></a>    
                    <a href="https://www.cricketact.com.au/" target="_blank"><div className="affi-logo actcricket"></div></a> 
                    <a href="https://www.cricketaustralia.com.au/" target="_blank"><div className="affi-logo cric-aus"></div></a>    
                    <a href="https://iamsacanberra.com.au/" target="_blank"><div className="affi-logo iamsa"></div></a>    
                </div>  
            </div>

        </div>
    )
}

export default TheClub
