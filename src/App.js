import Header from "./Shared/Header";
import { useState } from "react";
import HomeMain from "./Home/HomeMain";
import Contacts from "./ContactMe/Contacts";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from "./Gallery/Gallery";
import Footer from "./Shared/Footer";
import Sponsors from "./Sponors/Sponsors";
import TheClub from "./TheClub/TheClub";
import News from "./News/News";
import Fixtures from "./Fixtures/Fixtures";

function App() {
  const [rotateBtn, setRotateBtn] = useState(false);
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
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <Switch>
          <Route exact path='/'>
            <HomeMain 
              rotateBtn={rotateBtn}
            />
          </Route>
          <Route path='/fixtures'>
            <Fixtures />
            <Footer />
          </Route>
          <Route path='/gallery'>
            <Gallery />
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
          <Route path='/news'>
            <News />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
