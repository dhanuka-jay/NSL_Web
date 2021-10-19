import Header from "./Shared/Header";
import { useState } from "react";
import HomeMain from "./Home/HomeMain";
import Contacts from "./ContactMe/Contacts";
import MemberProfile from "./Members/MemberProfile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from "./Gallery/Gallery";
import Footer from "./Shared/Footer";
import AboutUs from "./AboutUs/AboutUs";
import Sponsors from "./Sponors/Sponsors";
import TheClub from "./TheClub/TheClub";

function App() {
  const [rotateBtn, setRotateBtn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInMember, setLoggedInMember] = useState({});
  const [activePage, setActivePage] = useState('home');

  const changeRotateBtn = (isToggle) => {
    setRotateBtn(isToggle);
  }

  return (
    <Router>
      <div className="App">
        <Header 
          rotateBtn={rotateBtn}
          changeRotateBtn={changeRotateBtn}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setLoggedInMember={setLoggedInMember}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <Switch>
          <Route exact path='/'>
            <HomeMain 
              rotateBtn={rotateBtn}
            />
          </Route>
          <Route path='/aboutus'>
            <AboutUs />
            <Footer />
          </Route>
          <Route path='/gallery'>
            <Gallery />
            <Footer />
          </Route>
          <Route path='/member'>
            <MemberProfile 
              loggedInMember={loggedInMember}
            />
            <Footer />
          </Route>
          <Route path='/contacts'>
            <Contacts />
            <Footer />
          </Route>
          <Route path='/sponsors'>
            <Sponsors />
            <Footer />
          </Route>

          <Route path='/theclub'>
            <TheClub />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
