import { Divider } from 'semantic-ui-react';
import './News.css';
import coach_img from '../img/News/Coach-Image.png';
import covid_safety_plan from '../img/cact_covid_safety_plan_for_clubs.pdf';
import playing_conditions from '../img/playing_conditions.pdf';
import news_img1 from '../img/News_Images/news_img_1.jpg';
import news_img2 from '../img/News_Images/news_img_2.jpg';
import news_img3 from '../img/News_Images/news_img_3.jpg';
import news_img4 from '../img/News_Images/news_img_4.jpg';
import news_img5 from '../img/News_Images/news_img_5.jpg';
import news_img6 from '../img/News_Images/news_img_6.jpg';
import news_img7 from '../img/News_Images/news_img_7.jpg';
import news_img8 from '../img/News_Images/news_img_8.jpg';
import news_img9 from '../img/News_Images/news_img_9.jpg';
import news_img10 from '../img/News_Images/news_img_10.jpg';
import news_img11 from '../img/News_Images/news_img_11.jpg';
import news_img12 from '../img/News_Images/news_img_12.jpg';
import news_img13 from '../img/News_Images/news_img_13.jpg';
import news_img14 from '../img/News_Images/news_img_14.jpg';
import news_img15 from '../img/News_Images/news_img_15.jpg';
import news_img16 from '../img/News_Images/news_img_16.jpg';
import news_img17 from '../img/News_Images/news_img_17.jpg';
import news_img18 from '../img/News_Images/news_img_18.jpg';
import news_img19 from '../img/News_Images/news_img_19.jpg';
import news_img20 from '../img/News_Images/news_img_20.jpg';
import news_img21 from '../img/News_Images/news_img_21.jpg';
import news_img_ssg_1 from '../img/News_Images/sausage/news_img_ssg_1.jpg';
import news_img_ssg_2 from '../img/News_Images/sausage/news_img_ssg_2.jpg';
import news_img_ssg_3 from '../img/News_Images/sausage/news_img_ssg_3.jpg';
import news_img_ssg_4 from '../img/News_Images/sausage/news_img_ssg_4.jpg';
import news_img_fam_bbq_1 from '../img/News_Images/family_barbeque/news_img_fam_bbq_1.jpg';
import news_img_fam_bbq_2 from '../img/News_Images/family_barbeque/news_img_fam_bbq_2.jpg';
import news_img_fam_bbq_3 from '../img/News_Images/family_barbeque/news_img_fam_bbq_3.jpg';
import news_img_fam_bbq_4 from '../img/News_Images/family_barbeque/news_img_fam_bbq_4.jpg';
import news_img_fam_bbq_5 from '../img/News_Images/family_barbeque/news_img_fam_bbq_5.jpg';
import news_img_fam_bbq_6 from '../img/News_Images/family_barbeque/news_img_fam_bbq_6.jpg';
import news_img_fam_bbq_7 from '../img/News_Images/family_barbeque/news_img_fam_bbq_7.jpg';


const News = () => {
    return (
        <div id="news">
            <h2 className="sub-header header-announce">Announcements</h2>
            <div className="content-container">
                <h3 className="second-sub-header">CCSCA Announce tournament fixtures</h3>
                <h5 className="small-sub">18/09/2021</h5>
                <p className="p-desc">CCSCA has allocated Northside Legends to Grade 2 and Grade 4 for the upcoming
                tournament.</p>
            </div>

            <div className="content-container news-coach">
                <h3 className="second-sub-header">New Head Coach Appointment for Season 2021/22</h3>
                <h5 className="small-sub">18/07/2021</h5>
                <p className="p-desc">The Northside Cricket Club is excited to announce the appointment of Shehan De Silva as
                    our senior head coach for the 2021/22 season!</p>
                <p className="p-desc">Shehan is one of the top batsmen in Canberra, His vast experience in both domestic and
                    international cricket is invaluable for our club.</p>
                <p className="p-desc">We are thrilled to have Shehan at the club to coach and work with our players, providing
                    a fantastic wealth of experience for our seniors and juniors.</p>
                <img src={coach_img} className="coach-img" />
            </div>

            <div className="content-container news-covid">
                <h3 className="second-sub-header">COVID safety plan and playing conditions</h3>
                <p className="p-desc">CricketACT and NSL have developed a COVID-19 Safety Plan to help create and maintain
                    a safe environment for you, the players, volunteers and spectators.</p>
                <p className="p-desc">The policies and procedures must be understood by all players across the club. This will
                    help slow the spread of COVID-19 and reassure players and spectators that they can
                    participate in a day at the local cricket safely.</p>
                <p className="p-desc">The COVID safety plan and supplementary playing conditions provide the policies and
                    procedures which must be applied at all games and trainings this season and can be
                    found at these links.</p>
                    <p className="p-desc"><a href={covid_safety_plan} target="_blank">CACT Covid Safety Plan for Clubs</a></p>
                    <p className="p-desc"><a href={playing_conditions} target="_blank">cricket act covid-19 supplement playing conditions</a></p> 
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <h2 className="sub-header">Latest News</h2>
            <div className="content-container news-latest">                

                <h3 className="second-sub-header header-cap">Legends receiving the official NSL Cap</h3>
                <h5 className="small-sub">30/10/2021</h5>
                <p className="p-desc">Our Legends receiving their official NSL Cap from head coach Shehan De Silva on the morning before the match.</p>
                <div className="news-img-container cap-ceremony section1">
                    <div className="news-img img1">
                        <img src={news_img9} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src={news_img10} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img1">
                        <img src={news_img11} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src={news_img12} alt="Sorry, Photo unavailable" />
                    </div>
                </div>
                <div className="news-img-container cap-ceremony section2">
                    <div className="news-img img3">
                        <img src={news_img13} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src={news_img14} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img3">
                        <img src={news_img15} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src={news_img16} alt="Sorry, Photo unavailable" />
                    </div>
                </div>                

                <h3 className="second-sub-header header-religeous">Northside Legends teams took part in religious ceremonies</h3>
                <h5 className="small-sub">29/10/2021</h5>
                <p className="p-desc">NSL CCSCA teams took part in religious ceremonies seeking for blessings from religious leaders 
                    in the community for the cricket season. NSL being a multinational and multicultural team, we value all religious 
                    practises and take this opportunity to wish everyone in the team all the very best for the season 2021/22.</p>
                <div className="news-img-container religeous-activity">
                    <div className="news-img img1">
                        <img src={news_img17} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src={news_img18} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img3">
                        <img src={news_img19} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src={news_img20} alt="Sorry, Photo unavailable" />
                    </div>
                </div>

                <h3 className="second-sub-header header-community-cup">Super 8 Community Cup 2021 - <span className="sp-text">Sundays Awards Ceremony</span></h3>
                <h5 className="small-sub">20/06/2021</h5>
                <p className="p-desc">NSL was recognised for its outstanding performances including the Best Batsman of the
                    tournament (Shehan De Silva) and few player of the match awards.</p>
                <div className="news-img-container community-cup">
                    <div className="news-img img1">
                        <img src={news_img1} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src={news_img2} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img3">
                        <img src={news_img3} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src={news_img4} alt="Sorry, Photo unavailable" />
                    </div>
                </div>
            </div>            

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <h2 className="sub-header">Events</h2>
            <div className="content-container news-events">
                <div className="event-container fam-bbq">
                    <h3 className="second-sub-header">NSL Annual Family get-together & BBQ</h3>
                    <h5 className="small-sub">02/01/2022</h5>
                    <p className="p-desc">NSL annual family get-together 2022 was held at Bonner Cricket Ground 
                        on 2nd January 2022 from 12.30pm onwards.</p>
                    <p className="p-desc">The highlight of the day was the inter club match between NSL Thunders 
                        and NSL Gladiators. Congratulations to ‘NSL Thunders’ for their victory by 2 runs. It was 
                        a fantastic match went up to the last ball in a nail biting game and everyone had a great time. 
                        It was amazing to see such a turnout of the event, even though it was a busy period of the year. 
                        </p>
                    <p className="p-desc">A big Thank you goes to all the members for bringing their family and the 
                        kids and we are sure they enjoyed the fun filled day especially the ‘ladies and kids cricket match'. 
                        We had similar BBQs and family get-togethers in the last 12 years of NSL and this one is very significant 
                        for us due to the new additions and the substantial growth of our club within last year. We are also 
                        very glad to see how the NSL family grows bigger and better each year while we maintain our quality 
                        and standards in our unique way.</p>
                    <div className="news-img-container event-img-container1  section1">
                        <div className="news-img img5">
                            <img src={news_img_fam_bbq_1} alt="Sorry, Photo unavailable" />
                        </div>                    
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src={news_img_fam_bbq_2} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src={news_img_fam_bbq_3} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src={news_img_fam_bbq_4} alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src={news_img_fam_bbq_5} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src={news_img_fam_bbq_6} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src={news_img_fam_bbq_7} alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                </div>

                <div className="event-container ssg-zzl">
                    <h3 className="second-sub-header">NSL Bunnings Sausage Sizzle fundraiser</h3>
                    <h5 className="small-sub">01/12/2021</h5>
                    <p className="p-desc">On the 28th of November, 2021, Northside Legends had a Mini Fundraiser as a Sausage
                                Sizzle at Gungahlin Bunnings Warehouse. We humbly thank you, the Canberra
                                community who were very supportive by participating in this fundraiser. The Sausage
                                sizzle was a fun-filled event, with most of the members at the grill, doing the barbecue
                                and serving. It was a successful event and credit goes to the Dynamic Duo, Muditha and
                                Rohan, backed by the NSL Committee for organising it. We are looking to have many
                                more fun-filled events like this in future.</p>
                    <div className="news-img-container event-img-container1  section1">
                        <div className="news-img img5">
                            <img src={news_img_ssg_1} alt="Sorry, Photo unavailable" />
                        </div>                    
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src={news_img_ssg_2} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src={news_img_ssg_3} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src={news_img_ssg_4} alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                </div>

                <div className="event-container launch">
                    <h3 className="second-sub-header">Official Launch Northside Legends</h3>
                    <p className="p-desc">The official launch of Northside Legends was held on 18th July 2021 at Ramada Diplomat
                        Hotel at Griffith at 3.00pm. This event was organised as the first official event after
                        becoming a registered club in Canberra.</p>
                    <div className="news-img-container event-img-container1 section1">
                        <div className="news-img img5">
                            <img src={news_img5} alt="Sorry, Photo unavailable" />
                        </div>                    
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src={news_img6} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src={news_img7} alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src={news_img8} alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
