import { Divider } from 'semantic-ui-react';
import './TheClub.css';

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
                <h2 className="sub-header">Club History1</h2>
                <img src="img/gallery/gal_img_8.jpg" className="club-history-img" />
                <p className="p-desc">Northside Legends (NSL) started in 2009 founded by Mr. Yehan Muthukuda together with a few friends from the 
                    community to promote Sunday social cricket in the North side of Canberra.  Due to the easy-going culture of cricket 
                    enthusiastic members and common values of the club, NSL has become emergent in terms of quantity and quality. Our vision is 
                    to foster ongoing respect and success by providing a positive and enjoyable cricket experience for all, while developing 
                    players, people, and partnerships in the community. The club strives hard to provide an environment to its players that 
                    encourages achievement, team spirit, sportsmanship while promoting the growth of the club in the local community.</p>
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
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <div className="club-segment president-message">
                <h2 className="sub-header">President's Message</h2>
                <div className="club-sub-segment">
                    <div className="president-img"></div>
                    <p className="p-desc">Welcome to the website of the Northside Legends Cricket Club (NSL). Northside Legends Cricket Club is striving to promote cricket in the north side of Canberra. In 2009, a group of Cricket-loving friends started to play cricket every Sunday using a softball cricket kit. Due to the easy-going culture and common values of the club, NSL has become emergent in terms of quantity and quality. One of the things I love about the club is the spirit of inclusion where we support and get all involved. </p> 
                    <p className="p-desc">NSL has only been playing cricket as a registered club for a very short time. But we have already attracted many keen followers. Due to the increased interest and enthusiasm of members to play competitive cricket, NSL has entered CCSCA tournament during 21-22 season. We also participated in Super8 T20 tournaments and our teams have achieved some outstanding results. I strive NSL to become a major force in Canberra cricket community.</p>
                    <p className="p-desc">We have individuals with a great mix of capabilities in the committee as well as in our club in general and the combined efforts of this team will no doubt provide a great environment for all in the future. Serving in the committee can be a fun experience when you have a great team to work with and I certainly have that capability and the assurance in the current committee.</p>
                    <p className="p-desc">What I love about the club is that we have developed various channels to communicate across everyone in the club and collect all their ideas and it will be on display at a committee level. With collective thinking power, all of the ideas are welcomed by the committee to include in our discussions.</p>
                    <p className="p-desc p-left">We look forward to welcoming you soon and thank you for your visit.</p>
                    <p className="p-desc p-left">Yehan Muthukuda<br />
                    President/Founder</p> 
                </div>               
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <div className="club-segment office-bearers">
                <h2 className="sub-header">Office Bearers</h2>
                <h3 className="second-sub-header">The Northside Legends Board</h3>
                <p className="p-desc">President - Yehan Muthukuda</p>
                <p className="p-desc">Vice President - Lalitha Jayaweera</p>
                <p className="p-desc">Secretary - Lalantha Liyanage</p>
                <p className="p-desc">Treasurer - Rohan Jayasooriya</p>

                <h3 className="second-sub-header">Committee Members</h3>
                <p className="p-desc">Dammika Adikari</p>
                <p className="p-desc">Kapila Hapu Arachchige</p>
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
