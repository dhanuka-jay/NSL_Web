import { useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import './News.css';
import coach_img from '../img/News/Coach-Image.png';
import covid_safety_plan from '../img/cact_covid_safety_plan_for_clubs.pdf';
import playing_conditions from '../img/playing_conditions.pdf';
import nsl_covid_safe from '../img/NSL_COVID_safe_plan.pdf';


const News = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return (
        <div id="news">
            <h2 className="sub-header header-announce">Announcements</h2>
            <div className="content-container">
                <h3 className="second-sub-header">Sinhala and Tamil New year Celebrations 2022</h3>
                <h5 className="small-sub">22/03/2022</h5>
                <div className="p-desc">Canberra Sinhala and Tamil New Year Celebrations 2022. The annual Sinhala and Tamil
                    cultural event organised by the Australia Sri Lanka Association (ASLA https://aslaact.com)
                    together with other Sri Lankan community organisations will take place on 9th April 2022
                    from 1:00PM onwards at Melrose High school, Marr Street, Pearce ACT 2607.</div>
                <div className="p-desc">Traditional customs and cultural items performed by the young and the old will add colour to
                    the event and a range of traditional Avurudu games will be organised at the celebration. The
                    much anticipated ‘Aurudu Kumara’ and the ‘Aurudu Kumariya’ pageants will also be staged
                    during the celebration.</div>
                <div className="p-desc">Northside Legends has been proudly appointed to organise the ‘Aurudu Kumara’ and the
                    ‘Aurudu Kumariya’ pageant contest 2022. අවුරුදු කුමරා සහ කුමරිය 2022.</div>
                <div className="p-desc">The final winners will be selected by a distinguished panel of judges and the winners will
                    receive valuable gifts including a photography package by Flashed Photography and more. All
                    participants will receive a gift.</div>
                <div className="p-desc">For more information, please contact - Thulasee 0469162032, Yehan 0401562172, Dammika
                    0423124976 or write to us on info@northsidelegends.com.au</div>
                <div className="p-desc"><a href='https://forms.gle/cqc23kiniN21UmaPA' target="_blank">Please register here for the pageant.</a></div>
                <div className="news-img-container aurudu-kumara">
                    <div className="news-img img1">
                        <img src="img/news_img_40.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>
            </div>

            <div className="content-container">
                <h3 className="second-sub-header">Northside Legends in Semi Final</h3>
                <h5 className="small-sub">26/01/2022</h5>
                <div className="p-desc">Northside Legends booked their place in the CCSCA premier One Day League semi-finals
                    with a 7 wicket win over Canberra Rhinos CC thanks to some fine top-order batting.</div>
                <div className="p-desc">A fine half-century by Anjula Ranasinghe with a knock of 82 not out, as well as 42 from
                    Vincika Hapuarachchige, helped NSL to 178 for 3 from just 30.3 overs and that helped
                    NSL secure a spot in the semi final with a bonus point. Canberra Rhinos was in a very
                    strong position at one stage at 93 for 2 but a fine bowling performance of 4 for 30 by
                    Sudheera Ilandarage and 3 for 37 by Nishantha Dissanayake was able to get Rhinos all
                    out in the last over.</div>
                <div className="p-desc">We are very pleased that our Grade 2 team secured a spot at the semi-final. Our Grade 4
                    team gained a huge amount of experience by playing the tournament and had some
                    really good contributions between them. We thank the coaching staff for their
                    contribution for this success. We wish all the very best for NSL Grade 2 at semi-finals.</div>
                <div className="news-img-container semi-qualify">
                    <div className="news-img img1">
                        <img src="img/news_img_23.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src="img/news_img_24.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img1">
                        <img src="img/news_img_25.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>
            </div>
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
                    <p className="p-desc"><a href={nsl_covid_safe} target="_blank">NSL COVID safety plan</a></p>
                    <p className="p-desc"><a href={covid_safety_plan} target="_blank">CACT Covid Safety Plan for Clubs</a></p>
                    <p className="p-desc"><a href={playing_conditions} target="_blank">cricket act covid-19 supplement playing conditions</a></p> 
            </div>

            <Divider horizontal>
                    <div className="divider-img"></div>
            </Divider>

            <h2 className="sub-header">Latest News</h2>

            <div className="content-container news-latest">

                <h3 className="second-sub-header semis-writeup">Rain prematurely ended the Semifinals between Northside Legends and
                    Canberra Rhinos</h3>
                <h5 className="small-sub">06/03/2022</h5>
                <div className="p-desc">Northside Legends finished the CCSCA Premier on a high note despite rain prematurely
                    ending the Semifinals between NSL and Canberra Rhinos which prevented NSL qualifying
                    for finals. Despite NSL beating Canberra Rhinos twice in the tournament before the
                    semifinals, according to tournament rules, Canberra Rhinos qualified to play for the finals
                    as they finished higher on the round ladder. Both Rhinos and NSL won 7 games each
                    during round matches despite losing few games to rain throughout the tournament. The
                    difference was just two bonus points. The only other team who won more matches(10)
                    were the Workers Redbacks CC who finished first on the table.</div>
                <div className="p-desc">Semifinals day morning was a very sad day as Australia and the cricket world were in
                    shock after the sudden death of Shane Warne, one of the sport's greatest players.
                    Warne's death came few hours after former Australian wicketkeeper Rod Marsh’s death.
                    Ahead of the start of play, Northside Legends and Canberra Rhinos players observed a
                    minute of silence and were also seen donning black armbands for Shane Warne and Rod
                    Marsh.</div>
                <div className="news-img-container end-of-season">
                    <div className="news-img">
                        <img src="img/news_img_26.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_27.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_28.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_29.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>
                <div className="news-img-container end-of-season section2">
                    <div className="news-img">
                        <img src="img/news_img_30.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_31.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_32.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_33.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>
                <div className="news-img-container end-of-season section2">
                    <div className="news-img">
                        <img src="img/news_img_34.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_35.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_36.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img">
                        <img src="img/news_img_37.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>

                <h3 className="second-sub-header header-cap">Legends receiving the official NSL Cap</h3>
                <h5 className="small-sub">30/10/2021</h5>
                <p className="p-desc">Our Legends receiving their official NSL Cap from head coach Shehan De Silva on the morning before the match.</p>
                <div className="news-img-container cap-ceremony section1">
                    <div className="news-img img1">
                        <img src="img/news_img_9.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src="img/news_img_10.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img1">
                        <img src="img/news_img_11.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src="img/news_img_12.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>
                <div className="news-img-container cap-ceremony section2">
                    <div className="news-img img3">
                        <img src="img/news_img_13.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src="img/news_img_14.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img3">
                        <img src="img/news_img_15.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src="img/news_img_16.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>                

                <h3 className="second-sub-header header-religeous">Northside Legends teams took part in religious ceremonies</h3>
                <h5 className="small-sub">29/10/2021</h5>
                <p className="p-desc">NSL CCSCA teams took part in religious ceremonies seeking for blessings from religious leaders 
                    in the community for the cricket season. NSL being a multinational and multicultural team, we value all religious 
                    practises and take this opportunity to wish everyone in the team all the very best for the season 2021/22.</p>
                <div className="news-img-container religeous-activity">
                    <div className="news-img img1">
                        <img src="img/news_img_17.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src="img/news_img_18.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img3">
                        <img src="img/news_img_19.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src="img/news_img_20.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                </div>

                <h3 className="second-sub-header header-community-cup">Super 8 Community Cup 2021 - <span className="sp-text">Sundays Awards Ceremony</span></h3>
                <h5 className="small-sub">20/06/2021</h5>
                <p className="p-desc">NSL was recognised for its outstanding performances including the Best Batsman of the
                    tournament (Shehan De Silva) and few player of the match awards.</p>
                <div className="news-img-container community-cup">
                    <div className="news-img img1">
                        <img src="img/news_img_1.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img2">
                        <img src="img/news_img_2.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img3">
                        <img src="img/news_img_3.jpg" alt="Sorry, Photo unavailable" />
                    </div>
                    <div className="news-img img4">
                        <img src="img/news_img_4.jpg" alt="Sorry, Photo unavailable" />
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
                            <img src="img/family_barbeque/news_img_fam_bbq_1.jpg" alt="Sorry, Photo unavailable" />
                        </div>                    
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src="img/family_barbeque/news_img_fam_bbq_2.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src="img/family_barbeque/news_img_fam_bbq_3.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src="img/family_barbeque/news_img_fam_bbq_4.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src="img/family_barbeque/news_img_fam_bbq_5.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src="img/family_barbeque/news_img_fam_bbq_6.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src="img/family_barbeque/news_img_fam_bbq_7.jpg" alt="Sorry, Photo unavailable" />
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
                            <img src="img/sausage/news_img_ssg_1.jpg" alt="Sorry, Photo unavailable" />
                        </div>                    
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src="img/sausage/news_img_ssg_2.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src="img/sausage/news_img_ssg_3.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src="img/sausage/news_img_ssg_4.jpg" alt="Sorry, Photo unavailable" />
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
                            <img src="img/news_img_5.jpg" alt="Sorry, Photo unavailable" />
                        </div>                    
                    </div>
                    <div className="news-img-container event-img-container2 section2">
                        <div className="news-img img6">
                            <img src="img/news_img_6.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img7">
                            <img src="img/news_img_7.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                        <div className="news-img img8">
                            <img src="img/news_img_8.jpg" alt="Sorry, Photo unavailable" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
