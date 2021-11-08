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
                    found at these links</p>
                    <p className="p-desc"><a href={covid_safety_plan} target="_blank">CACT Covid Safety Plan for Clubs</a></p>
                    <p className="p-desc"><a href={playing_conditions} target="_blank">cricket act covid-19 supplement playing conditions</a></p> 
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <h2 className="sub-header">Latest News</h2>
            <div className="content-container news-latest">
                <h3 className="second-sub-header">Super 8 Community Cup 2021 - <span className="sp-text">Sundays Awards Ceremony</span></h3>
                <h5 className="small-sub">20/06/2021</h5>
                <p className="p-desc">NSL was recognised for its outstanding performances including the Best Batsman of the
                    tournament ( Shehan De Silva ) and few player of the match awards.</p>
                <div className="news-img-container">
                    <div className="news-img img1">
                        <img src={news_img1} alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src={news_img2} alt="Sorry, Photo unavailable" />
                    </div>
                </div>
                <div className="news-img-container">
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
                <h3 className="second-sub-header">Official Launch Northside Legends</h3>
                <p className="p-desc">The official launch of Northside Legends was held on 18th July 2021 at Ramada Diplomat
                    Hotel at Griffith at 3.00pm. This event was organised as the first official event after
                    becoming a registered club in Canberra</p>
                <div className="news-img-container event-img-container1">
                    <div className="news-img img5">
                        <img src={news_img5} alt="Sorry, Photo unavailable" />
                    </div>                    
                </div>
                <div className="news-img-container event-img-container2">
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
    )
}

export default News
